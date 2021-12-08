import React from "react";

function Chat({socket, username, room}) {

    const [] = useState("");

    return(
        <div>
            <div className="hat-header">
                <p>Live Chat</p>
            </div>

            <div className="chat-body"></div>
            
            <div className="chat-footer">
                <input type="text" placeholder="tvoja sprava"></input>
                <button>&#9658;</button>
            </div>
        
        </div>
    )

}