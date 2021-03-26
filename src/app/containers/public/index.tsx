import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { homePath, signInPath, signUpPath } from 'app/constants/url';
import HomeContainer from './home';
import SignInContainer from './sign-in';
import SignUpContainer from './sign-up';

const PublicRoute = () => (
  <Switch>
    <Route path={homePath} component={HomeContainer} />
    <Route path={signInPath} component={SignInContainer} />
    <Route path={signUpPath} component={SignUpContainer} />

    <Redirect to={homePath} />
  </Switch>
);

export default PublicRoute;
