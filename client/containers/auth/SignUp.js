import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import React from 'react';

import { actions } from '../../modules';
import { RoundedButton } from '../../components';
import Auth from './Auth';

const SignUp = ({ signUp }) => (
  <Auth>
    <RoundedButton onClick={signUp}>
      Sign Up
    </RoundedButton>
    <div className="switch">
      Already have an account? <Link to="/login" className="link__light">Log in</Link> now.
     </div>
  </Auth>
);

SignUp.propTypes = {
  signUp: React.PropTypes.func.isRequired,
};

SignUp.displayName = 'SignUp';

const mapDispatchToProps = dispatch => ({
  signUp: bindActionCreators(actions.auth.signUp, dispatch),
});

export default connect(null, mapDispatchToProps)(SignUp);
