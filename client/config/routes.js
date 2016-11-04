import { Route, IndexRedirect, IndexRoute, Redirect } from 'react-router';
import { Link } from 'react-router';
import React from 'react';

import { App, Chat, CreateRoom, LogIn, SignUp } from '../containers';
import { Home, NotFound, Status } from '../components';
import Root from '../Root';

const routes = (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route component={App}>
      <Route path="r/">
        <IndexRedirect to="/r/general/" />
        <Route path=":roomName/" component={Chat} />
        <Route path=":roomName/create" component={CreateRoom} />
        <Redirect from=":roomName" to=":roomName/" />
      </Route>
      <Route path="c/" component={CreateRoom} />
    </Route>
    <Route path="login" component={LogIn} />
    <Route path="signup" component={SignUp} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
