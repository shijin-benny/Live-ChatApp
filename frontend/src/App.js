import io from 'socket.io-client'
import React,{useState} from 'react'
import Chat from './chat';
const socket = io.connect("http://localhost:3001");



function App() {
  const [username,setName] = useState("");
  const [room ,setRoom] = useState('');
  console.log(username);
const JoinRoom = ()=>{
    if(username != "" && room !=""){
       socket.emit("join_room",room)
    }
}

  return (
    <div className="App">
    <h3>Join A chat</h3>
    <input type="text" placeholder='John.' onChange={(e)=>setName(e.target.value)}/>
    <input type="text" placeholder='Room Id' onChange={(e)=>setRoom(e.target.value)}/>
    <button onClick={JoinRoom}> Join A Room</button>

    <Chat socket={socket} username ={username} room ={room}/>
    </div>
  );
}

export default App;
