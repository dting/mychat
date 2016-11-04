import React from 'react';

export default ({ roomName }) => (
  <div className="chat_header">
    <h1 className="room-name">{`#${roomName}`}</h1>
  </div>
);
