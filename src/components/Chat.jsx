import React, { useState } from 'react';
import { ReactComponent as ChatIcon } from '../images/comments-solid.svg';
import { StyledChat } from '../styled/chat';
import { Link } from '@reach/router';

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
            <h1>Hi Elena 👋</h1>
          </div>
          <div class="conversation-box">
            <p>We'll be back online on Monday</p>
            <div class="chat-inner-box">
              <h3>Start a conversation</h3>

              <button>Send us a message</button>
              <p>Our usual reply time is one hour</p>
            </div>
            <Link to={'/faq'}>
              <h3>Or find your answer now</h3>
            </Link>
          </div>
        </div>
      )}
    </StyledChat>
  );
}
