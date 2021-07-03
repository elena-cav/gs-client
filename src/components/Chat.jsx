import React, { useState } from 'react';
import { ReactComponent as ChatIcon } from '../images/comments-solid.svg';
import { StyledChat } from '../styled/chat';
export default function Chat() {
  const [chat, setChat] = useState(false);
  return (
    <StyledChat>
      <span>
        <ChatIcon className="chat-icon" onClick={() => setChat((v) => !v)} />
      </span>
      {chat && (
        <div class="chat-box">
          <div class="hello-box">
            <h3>Hi Elena 👋</h3>
            <h4>Start a conversation</h4>
          </div>
          <div class="conversation-box">
            <p>We'll be back online on Monday</p>
            <button>Send us a message</button>
            <h3>Find your answer now</h3>
          </div>
        </div>
      )}
    </StyledChat>
  );
}
