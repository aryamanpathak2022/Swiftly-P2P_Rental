import json

from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from django.contrib.auth import get_user_model

from .models import Message

from rest_framework_simplejwt.tokens import AccessToken


User = get_user_model()

class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        token = self.scope['query_string'].decode().split('=')[1]
        if token:
            try:
                decoded_token = AccessToken(token)
                self.current_user = await database_sync_to_async(User.objects.get)(id=decoded_token['user_id'])
            except Exception as e:
                print(e)
                await self.close()
                return

        if not self.current_user or not self.current_user.is_authenticated:
            await self.close()
            return
        # extract other user id from self.scope['url_route']['kwargs']['room_name']  which is in form current_user_id_other_user_id so find the ids and check which is not current user id that is other user id
        other_user_id = self.scope['url_route']['kwargs']['room_name'].replace(str(self.current_user
        .id),'')
        # also remove _ from the other_user_id and convert it to integer
        other_user_id = int(other_user_id.replace('_',''))

        print(self.current_user)
        print(other_user_id)
    
       

        # Ensure user is authenticated
        
        # Validate and get other user
        try:
            other_user = await database_sync_to_async(User.objects.get)(pk=other_user_id)
        except User.DoesNotExist:
            await self.close()
            return
        print(other_user)
        # Determine unique thread name (lexicographically ordered user IDs)
        self.room_name = f'{self.current_user.id}_{other_user.id}' if self.current_user.id < other_user.id else f'{other_user.id}_{self.current_user.id}'
        self.room_group_name = f'chat_{self.room_name}'

        # Add consumer to channel layer group for the chat thread
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()  # Accept the connection

        messages = await self.fetch_messages()
        print(messages)
        for message in messages:
            await self.send(text_data=json.dumps(message))

    # async def disconnect(self, close_code):
    #     # Remove consumer from channel layer group

    #     await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def receive(self, text_data=None, bytes_data=None):
        data = json.loads(text_data)
        message = data['message']
        current_user_obj = data['senderUsername']
        # get user id from username
        current_user = await database_sync_to_async(User.objects.get)(username=current_user_obj)

        other_user_id = self.scope['url_route']['kwargs']['room_name'].replace(str(current_user
        .id),'')
        # also remove _ from the other_user_id and convert it to integer
        other_user_id = int(other_user_id.replace('_',''))
        other_user = await database_sync_to_async(User.objects.get)(pk=other_user_id)

        # get User instance of current_user_obj
        current_user_obj = await database_sync_to_async(User.objects.get)(username=current_user_obj)

        # Save the message
        await self.save_message(sender=current_user_obj, recipient=other_user, message=message)

        # Broadcast the message to the chat thread
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'senderUsername': self.scope['user'].username,
            }
        )

    async def chat_message(self, event):
        message = event['message']
        username = event['senderUsername']

        # Send the message to the connected user
        await self.send(text_data=json.dumps({'message': message, 'senderUsername': username}))

    @database_sync_to_async
    def save_message(self, sender, recipient, message):
        Message.objects.create(sender=sender, recipient=recipient, message=message, thread_name=self.room_name)

    from datetime import datetime

    @database_sync_to_async
    def fetch_messages(self):
        messages = Message.objects.filter(thread_name=self.room_name).order_by('timestamp').values('sender__username', 'message', 'timestamp')
        return [
        {
            'sender__username': msg['sender__username'],
            'message': msg['message'],
            'timestamp': msg['timestamp'].strftime('%Y-%m-%d %H:%M:%S')
        } for msg in messages
    ]

