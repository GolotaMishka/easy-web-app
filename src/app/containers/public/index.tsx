import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { publicPath, homePath, signInPath } from 'app/constants/url/user';
import HomeContainer from './home';

const PublicRoute = () => (
  <Switch>
    <Route path={homePath} component={HomeContainer} />
    <Route path={signInPath} component={() => <div>sign in</div>} />
    <Redirect from={publicPath} to={homePath} />
  </Switch>
);

export default PublicRoute;
