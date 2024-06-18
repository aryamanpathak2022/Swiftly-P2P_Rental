class WebSocketService {
    static instance = null;
    callbacks = {};

    static getInstance() {
        if (!WebSocketService.instance) {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    constructor() {
        this.socketRef = null;
    }

    connect(roomName) {
        const token = localStorage.getItem('accessToken');
        const path = `ws://localhost:8000/ws/chat/private/${roomName}/?token=${token}`;
        this.socketRef = new WebSocket(path);
        console.log("hello");
        console.log(this.socketRef)

        this.socketRef.onopen = () => {
            console.log('WebSocket open');
        };

        this.socketRef.onmessage = (e) => {
            const data = JSON.parse(e.data);
            if (Object.keys(this.callbacks).length === 0) {
                return;
            }
            this.callbacks['chat_message'](data);
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
            this.socketRef.send(JSON.stringify({ ...data }));
        } catch (err) {
            console.log(err.message);
        }
    }

    addCallbacks(messagesCallback) {
        this.callbacks['chat_message'] = messagesCallback;
    }
}

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;
