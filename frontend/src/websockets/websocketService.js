class WebSocketService {
    static instance = null;
    socketRef = null;
    callbacks = {};

    static getInstance() {
        if (!WebSocketService.instance) {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    connect(roomName) {
        if (!this.socketRef || this.socketRef.readyState === WebSocket.CLOSED) {
            const token = localStorage.getItem('accessToken');
            const path = `ws://localhost:8000/ws/chat/private/${roomName}/?token=${token}`;
            this.socketRef = new WebSocket(path);

            this.socketRef.onopen = () => {
                console.log('WebSocket open');
            };

            this.socketRef.onmessage = (e) => {
                const data = JSON.parse(e.data);
                if (data.message) {
                    if (this.callbacks['chat_message']) {
                        this.callbacks['chat_message'](data);
                    }
                }
                if (data.history) {
                    if (this.callbacks['chat_history']) {
                        this.callbacks['chat_history'](data);
                    }
                }
                console.log('Received data:', data);
            };

            this.socketRef.onerror = (e) => {
                console.log("WebSocket error:", e);
                this.reconnect(roomName);
            };

            this.socketRef.onclose = () => {
                console.log('WebSocket closed');
                this.reconnect(roomName);
            };
        }
    }

    disconnect() {
        if (this.socketRef) {
            this.socketRef.close();
        }
    }

    reconnect(roomName) {
        setTimeout(() => {
            console.log('Reconnecting WebSocket...');
            this.connect(roomName);
        }, 1000);
    }

    sendMessage(data) {
        try {
            this.socketRef.send(JSON.stringify(data));
        } catch (err) {
            console.log(err.message);
        }
    }

    addCallbacks(chatMessageCallback, chatHistoryCallback) {
        this.callbacks['chat_message'] = chatMessageCallback;
        this.callbacks['chat_history'] = chatHistoryCallback;
    }
}

const WebSocketInstance = WebSocketService.getInstance();
export default WebSocketInstance;
