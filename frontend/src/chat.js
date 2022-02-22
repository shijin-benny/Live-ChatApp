import React, { useEffect, useState } from 'react'

function Chat({socket,username,room}) {
    const [currentMessage,setCurrentMessage] = useState("")


    const sendMessage = async()=>{
        if(currentMessage != ""){
            const messageData = {
                room:room,
                author:username,
                message:currentMessage,
                time:new Date(Date.now()).getHours() 
                + ":" + new Date(Date.now()).getMinutes(),
            };
            await socket.emit("send_message",messageData);
        }
    }
useEffect(()=>{
    socket.on('receive_message',(data)=>{
        console.log(data);

    })
},[socket])

  return (
    <div>
        <div className="chat-header">
            <p>Live chatApp</p>
        </div>
        <div className="chat-body"></div>
        <div className="chat-footer">
            <input type="text" placeholder='hey..' 
             onChange={(e)=>setCurrentMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>

    </div>
  )
}

export default Chat