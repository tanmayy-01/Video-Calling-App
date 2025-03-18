import express from 'express';
import serverConfig from './config/serverConfig';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import roomHandler from './handlers/RoomHandler';

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: '*',
        methods: [
            'GET',
            'POST'
        ]
    }
});

io.on('connection', (socket) => {
    console.log('user connected');
    roomHandler(socket);    // pass the socket connection to the room handler to create room
    socket.on('diconnected', () => {
        console.log('user disconnected');
    });
});


server.listen(serverConfig.PORT,()=> {
    console.log(`Server is up at port: ${serverConfig.PORT}`);
});
