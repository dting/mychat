import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import { actions } from '../../modules';
import RoomList from './room-list/RoomList';
import UserMenu from './user-menu/UserMenu';

class SideBar extends React.Component {
  static propTypes = {
    roomListActions: React.PropTypes.shape({
      index: React.PropTypes.func.isRequired,
    }).isRequired,
  };

  componentWillMount() {
    this.checkForNewRooms();
    this.poller = setInterval(() => this.checkForNewRooms(), 4000);
  }

  componentWillUnmount() {
    clearInterval(this.poller);
  }

  checkForNewRooms() {
    this.props.roomListActions.index();
  }

  render() {
    return (
      <div className="side-bar">
        <UserMenu />
        <RoomList {...this.props} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  roomList: state.roomList,
});

const mapDispatchToProps = dispatch => ({
  roomListActions: bindActionCreators(actions.roomList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
