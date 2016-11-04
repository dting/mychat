import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import React from 'react';

import { actions } from '../../modules';
import { RoundedButton } from '../../components';
import Auth from './Auth';

const LogIn = ({ logIn }) => (
  <Auth>
    <RoundedButton onClick={logIn}>
      Log In
    </RoundedButton>
    <div className="switch">
      Need an account? <Link to="/signup" className="link__light">Sign up</Link> now.
    </div>
  </Auth>
);

const mapDispatchToProps = dispatch => ({
  logIn: bindActionCreators(actions.auth.logIn, dispatch),
});

export default connect(null, mapDispatchToProps)(LogIn);
