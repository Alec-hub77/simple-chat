import React from "react";

function Chat() {
  return (
    <div className="chat_block">
      <div className="chat-user">
        <b>User(1):</b>
        <ul>
          <li>Test User</li>
        </ul>
      </div>
      <div className="chat-messages">
        <div className="messages">
          <div className="message">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              porro in quae iste minima nulla vitae assumenda necessitatibus?
              Quae, neque!
            </p>
            <div>
              <span>Test User</span>
            </div>
          </div>
          <div className="message">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              porro in quae iste minima nulla vitae assumenda necessitatibus?
              Quae, neque!
            </p>
            <div>
              <span>Test User</span>
            </div>
          </div>

          <form action="">
            <textarea name="" id=""></textarea>
          </form>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
