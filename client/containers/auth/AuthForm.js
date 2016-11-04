import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import t from 'tcomb-form'

import { actions } from '../../modules';

const Form = t.form.Form;
const FormSchema = t.struct({ username: t.String, password: t.String });
const options = { fields: { password: { type: 'password' } } };

class AuthForm extends Component {
  componentWillMount() {
    this.onChange = this.onChange.bind(this);
  }

  componentWillUnmount() {
    this.props.authActions.clear();
  }

  onChange(formValue) {
    this.form.validate();
    this.props.authActions.formOnChange({
      formValue,
      credentials: this.form.getValue(),
    });
  }

  render() {
    return (
      <div className="auth_form">
        <div className="auth_form__error">
          {this.props.auth.formError}
        </div>
        <Form
          ref={c => this.form = c}
          type={FormSchema}
          options={options}
          value={this.props.auth.formValue}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(actions.auth, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
