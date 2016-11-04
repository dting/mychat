import React from 'react';

import classNames from 'classnames';

export default ({ children, className, dark }) => (
  <div className={classNames('status', [className], { dark })}>
    {children}
  </div>
);
