import React from 'react';

import { NavLink, Status } from '../';

const Home = () => (
  <Status className="home">
    <div className="brand__medium">MyChat</div>
    <div className="info">
      <NavLink to="/login" className="link_nav__rounded">
        Log In
      </NavLink>
      <NavLink to="/signup" className="link_nav__rounded">
        Sign Up
      </NavLink>
    </div>
  </Status>
);

Home.displayName = 'Home';

export default Home;
