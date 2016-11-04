import React from 'react';

import './root.scss';

const Root = ({ children }) => (
  <div className="page_container">
    {children}
  </div>
);

export default Root;
