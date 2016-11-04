import React, { Component } from 'react';

import { NavLink } from '../../../components';

const RoomList = ({ roomList }) => (
  <div className="room_list">
    <NavLink className="room_list__heading" to={`/c/`}>
      <span className="add"></span>Rooms
    </NavLink>
    {roomList.rooms && roomList.rooms.map(room => (
      <NavLink className="room_name" key={room._id} to={`/r/${room.roomName}/`}>
        {`#${room.roomName}`}
      </NavLink>
    ))}
  </div>
);

export default RoomList;
