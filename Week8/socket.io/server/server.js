const express = require("express");
const app=express();
const socket=require('socket.io')
const cors=require("cors");
app.use(cors());


app.use(express.json(express.urlencoded({extended: true})))

require("dotenv").config()


const port=process.env.PORT
const server =app.listen(port,()=>console.log(`listening on port: ${port}`))


const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

let users=[];
let messages = [];
io.on("connection", socket =>{

    console.log(socket.id);
    socket.on('joined-server',data=>{
        users.push({name:data ,id:socket.id})
        io.emit('new-user',users)

    })

    socket.on('send-message',data =>{
        messages.push(data)
        io.emit('new-message',messages)
    })

    socket.on('disconnect',()=>{
        users=users.filter(user=>user.id !==socket.id)
        io.emit('user-disconnectd',users);
    })


})
