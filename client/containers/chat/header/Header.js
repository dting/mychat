import React from 'react';

const Header = ({ roomName }) => (
  <div className="chat_header">
    <h1 className="room-name">{`#${roomName}`}</h1>
  </div>
);

Header.propTypes = {
  roomName: React.PropTypes.string.isRequired,
};

Header.displayName = 'Header';

export default Header;
