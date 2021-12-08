import React, {useState, useEffect} from "react";

function Chat({socket, username, room}) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const SendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() 
                      + ":" +
                      new Date(Date.now()).getMinutes(),
                
            };
        await socket.emit("send_message", messageData); 
        setMessageList((list) => [...list, messageData]);
        }
    };

    useEffect( () => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return(
        <div className="chat-window">
            <div className="hat-header">
                <p>Live Chat</p>
            </div>

            <div className="chat-body">
                {
                messageList.map((messageContent) => {
                    return <h1>{messageContent.message}</h1>;
                })
                }

            </div>
            
            <div className="chat-footer">
                <input type="text" placeholder="tvoja sprava" onChange={e => setCurrentMessage(e.target.value)}></input>
                <button onClick={SendMessage}>&#9658;</button>
            </div>
        
        </div>
    )

}

export default Chat;