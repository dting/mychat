import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import React, { Component } from 'react';

import { LoadingDots, Status } from '../../components';
import { actions } from '../../modules';

class App extends Component {
  componentWillMount() {
    if (this.props.token) {
      this.props.userActions.me();
    } else {
      this.props.replace('/login');
    }
  }

  render() {
    const { children, user } = this.props;
    return (
      <div className="app">
        {user.loading && (
          <Status className="app_loading">
            <div className="brand-medium">MyChat</div>
            <p className="app_loading__message">Loading</p>
            <LoadingDots />
          </Status>
        )}
        {!user.loading && user.username && children}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(actions.user, dispatch),
  replace: bindActionCreators(replace, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
