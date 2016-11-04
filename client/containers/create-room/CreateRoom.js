import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { actions } from '../../modules';
import { LoadingDots, RoundedButton, Status } from '../../components';

class CreateRoom extends Component {
  componentWillMount() {
    this.onChange = this.onChange.bind(this);
    this.state = {
      roomName: this.props.params.roomName,
      disabled: !!this.props.params.roomName,
    };
  }

  onChange(evt) {
    this.setState({ roomName: evt.target.value })
  }

  render() {
    const { error, params, creating, createRoom } = this.props;
    return (
      <Status className="chat_create fade-in">
        {error && <p>{error}</p>}
        {!error && <p>Create Room?</p>}
        <div className="chat_create__input">
          <input type="text"
            value={this.state.roomName}
            onChange={this.onChange}
            disabled={this.state.disabled || this.state.creating}
          />
          <span className="chat_create__icon">#</span>
        </div>
        <div className="chat_create__actions">
          {creating && <LoadingDots />}
          {!creating && (
            <RoundedButton onClick={() => createRoom(this.state.roomName)} dark>
              Create
            </RoundedButton>
          )}
        </div>
      </Status>
    );
  }
}

const mapStateToProps = state => ({
  creating: state.room.creating,
  error: state.room.error,
});

const mapDispatchToProps = dispatch => ({
  createRoom: bindActionCreators(actions.room.create, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoom);