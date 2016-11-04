import { Link } from 'react-router';
import React from 'react';

import { Status } from '../';

export default () => (
  <Status dark>
    <div className="brand__medium">MyChat</div>
    <p>Nothing here... Go to <Link to="/" className="link__light">Home Page</Link>?</p>
  </Status>
);
