import { Socket } from 'socket.io/dist';
import {v4 as UUIDv4} from 'uuid'

const roomHandler = (socket: Socket) => {

    const creatRoom = () => {
        const roomId = UUIDv4();    // This will be our unique room id 
        socket.join(roomId);    // we will make the socket connection to enter new room 
        socket.emit('room-created',{ roomId });
        console.log('Room created with Id: ', roomId);
    }

    const joinedRoom = ({roomId} : {roomId: string}) => {
        console.log('New user joined room with id: ', roomId);
    }

    socket.on('create-room', creatRoom);
    socket.on('joined-room', joinedRoom);
}

export default roomHandler;