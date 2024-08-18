import http from "node:http";
import express from "express";
import {Server} from "socket.io";
import cors from "cors";

const app = express();
export const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:'http://localhost:5173',
        methods:['GET','POST'],
        credentials:true
    }
})





io.on("connection",(socket)=>{
    console.log(socket.id)
    socket.on("message",({room,message})=>{
        console.log(message)
        io.to(room).emit('recieve-message',message)
    })
})



app.use(cors({origin:['http://localhost:5173']}))