const express = require('express');
const cors = require('cors');
const {Server} = require('socket.io');
const app = express();

const server =app.listen(5000, () => {
    console.log("server bezi ")
}); 

app.use(cors());

const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000',
        methods: ['POST','GET'], 
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on("disconect", () => {
        console.log("odpojene", socket.id);
    });
});