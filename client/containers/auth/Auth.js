import React from 'react';

import AuthForm from './AuthForm';

export default ({ children }) => (
  <div className="auth">
    <div className="banner">
      <div className="brand__medium">MyChat</div>
    </div>
    <div className="auth_form__group">
      <AuthForm />
      <div className="auth_form__actions">
        {children}
      </div>
    </div>
  </div>
);
