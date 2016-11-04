import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { actions } from '../../../modules';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open })
  }

  onDocumentClick(evt) {
    if (!ReactDOM.findDOMNode(this).contains(evt.target)) {
      this.setState({ open: false });
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick, false)
    document.addEventListener('touchend', this.onDocumentClick, false)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onDocumentClick, false)
    document.removeEventListener('touchend', this.onDocumentClick, false)
  }

  render() {
    const { logOut, username } = this.props;
    const toggleClassName = classNames('user_menu__toggle', this.state);
    const dropdownClassName = classNames('user_menu__dropdown', this.state);
    return (
      <div className="user_menu">
        <button className={toggleClassName} onClick={this.toggle}>
          <div className="brand__small">MyChat</div>
          <div className="user_info">@{username}</div>
        </button>
        <div className={dropdownClassName}>
          <button className="user_menu__item" onClick={logOut}>Sign out</button>
          <button className="user_menu__item">Profile</button>
          <button className="user_menu__item">Preferences</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.user.username,
});

const mapDispatchToProps = dispatch => ({
  logOut: bindActionCreators(actions.auth.logOut, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
