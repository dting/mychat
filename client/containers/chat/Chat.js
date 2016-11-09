import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';

import { actions } from '../../modules';
import { LoadingDots } from '../../components';
import { SideBar } from '../';

import Editor from './editor/Editor';
import Header from './header/Header';
import MessageList from './message-list/MessageList';

class Chat extends React.PureComponent {
  static propTypes = {
    params: React.PropTypes.shape({
      roomName: React.PropTypes.string.isRequired,
    }),
    room: React.PropTypes.shape({
      checked: React.PropTypes.bool,
      checking: React.PropTypes.bool,
    }),
    roomActions: React.PropTypes.shape({
      get: React.PropTypes.func.isRequired,
    }),
  };

  componentWillMount() {
    this.props.roomActions.get(this.props.params.roomName);
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

  render() {
    const { room: { checking, checked }, params } = this.props;
    return (
      <div className="chat fade-in">
        <SideBar />
        <div className="chat_main">
          <Header roomName={params.roomName} />
          {checking &&
            <div className="chat_contents__loading">
              <div className="loading_status">
                {`Loading #${params.roomName}`}
              </div>
              <LoadingDots />
            </div>
          }
          {checked &&
            <div className="chat_contents fade-in">
              <MessageList roomName={params.roomName} />
              <Editor />
            </div>
          }
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
