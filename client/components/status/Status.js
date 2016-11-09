import React from 'react';

import classNames from 'classnames';

const Status = ({ children, className, dark }) => (
  <div className={classNames('status', [className], { dark })}>
    {children}
  </div>
);

Status.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  dark: React.PropTypes.bool,
};

export default Status;
