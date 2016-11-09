import classNames from 'classnames';
import React from 'react';

const RoundedButton = ({ children, dark, disabled, onClick }) => (
  <button
    className={classNames('rounded-button', { dark })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

RoundedButton.propTypes = {
  children: React.PropTypes.node,
  dark: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

RoundedButton.displayName = 'RoundedButton';

export default RoundedButton;
