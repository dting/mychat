import React from 'react';
import classNames from 'classnames';

export default ({ children, dark, disabled, onClick }) => (
  <button className={classNames('rounded-button', { dark })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
