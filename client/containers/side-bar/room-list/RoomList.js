import React from 'react';

import { NavLink } from '../../../components';

const RoomList = ({ roomList }) => (
  <div className="room_list">
    <NavLink className="room_list__heading" to={'/c/'}>
      <span className="add" />Rooms
    </NavLink>
    {roomList.rooms && roomList.rooms.map(room => (
      <NavLink className="room_name" key={room._id} to={`/r/${room.roomName}/`}>
        {`#${room.roomName}`}
      </NavLink>
    ))}
  </div>
);

RoomList.propTypes = {
  roomList: React.PropTypes.shape({
    rooms: React.PropTypes.arrayOf(React.PropTypes.shape({
      _id: React.PropTypes.string.isRequired,
      roomName: React.PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

RoomList.displayName = 'RoomList';

export default RoomList;
