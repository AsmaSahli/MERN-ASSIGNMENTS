import "./App.css";
import "@fontsource/roboto/300.css";
import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import io, { Socket } from "socket.io-client";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Chat from "./components/Chat";

function App() {

  const [socket] = useState(() => io(":8000"));
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(()=>{
    socket.on('connect',()=>{
      console.log("Connected")
      console.log(socket.id)
      setIsConnected(true)
    })
    return ()=>{
      socket.disconnect(true)
    }
  },[])



  return ( 
  <div className="App">
      <Typography variant="h1" gutterBottom> Socket.io !</Typography>
      <Routes>
          <Route path="/" element={<Form username={username} setUsername={setUsername} socket={socket}/>} />
          <Route path="/chat" element={<Chat username={username} socket={socket}/>} />
      </Routes>
  </div>
  )
}

export default App;
