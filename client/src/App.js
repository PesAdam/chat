import './App.css';
import Chat from "./components/Chat";
import io from 'socket.io-client';
import React, {useState} from 'react';
const socket = io.connect("http://localhost:5000");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom]         = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if(username !== "" & room !== ""){
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      { !showChat ? (
      
      <div className="joinChatContainer">
        <h3>Pripoj sa</h3>
      
        <input placeholder="zadaj svoje meno" type="text" onChange={e => setUsername(e.target.value)}></input>
      
        <input placeholder="Room id" onChange={e => setRoom(e.target.value)}></input>
      
        <button onClick={joinRoom}>Pripoj sa</button>
      </div> )
        : (
        <Chat socket={socket} username={username} room={room}/>
      )}
    </div>
  );
}

export default App;