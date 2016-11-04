import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { actions } from '../../modules';
import { LoadingDots } from '../../components';
import { SideBar } from '../';

import Editor from './editor/Editor';
import Header from './header/Header';
import MessageList from './message-list/MessageList';

class Chat extends Component {
  componentWillMount() {
    return this.props.roomActions.get(this.props.params.roomName);
  }

  componentDidUpdate() {
    const {
      roomActions: { get },
      room: { checking, checked },
      params: { roomName },
    } = this.props;
    if (!checking && !checked) {
      get(roomName);
    }
  }

  renderLoading() {
    return (
      <div className="chat_contents__loading">
        <div className="loading_status">
          {`Loading #${this.props.params.roomName}`}
        </div>
        <LoadingDots />
      </div>
    );
  }

  renderChatRoom() {
    return (
      <div className="chat_contents fade-in">
        <MessageList roomName={this.props.params.roomName} />
        <Editor />
      </div>
    )
  }

  render() {
    const { checking, checked } = this.props.room;
    return (
      <div className="chat fade-in">
        <SideBar />
        <div className="chat_main">
          <Header roomName={this.props.params.roomName} />
          {checking && this.renderLoading()}
          {checked && this.renderChatRoom()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  room: state.room,
});

const mapDispatchToProps = dispatch => ({
  roomActions: bindActionCreators(actions.room, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
