import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './messagespage.styles.css'

<>
        
<button onClick={() => navigate("/home")}>RETURN</button> 
</>

export const MessagesPage = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    (() => console.log("CLICKED USER", state))();
    return (
        <div class="container">
        
        <div class="chat-box">
          
            <div class="client">
                <img src="logo.jpg" alt="logo" />
                <div class="client-info">
                    <h2>Hanae</h2>
                    <p>online</p>
                </div>
            </div>

            <div class="chats">
                <div class="client-chat">Hi!</div>
                <div class="my-chat">Hello!</div>
                <div class="client-chat">How are you ?</div>
                <div class="my-chat">I am good hbu ?</div>
                <div class="client-chat">I am great !</div>
                <div class="client-chat">any new about the projet !</div>
                <div class="my-chat">No, not yet</div>


            </div>

  
            <div class="chat-input">
                <input type="text" placeholder="Enter Message" />
                
                <>
                <button class="send-btn" onClick={() => navigate("/home")}>Return</button> 
                 </>
                    
               
            </div>
        </div>

        
      
    </div>

  );
}