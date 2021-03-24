import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { appBasePath, learningPath } from 'app/constants/url/user';
import AppContainer from './app';

const AppRoute = () => (
  <Switch>
    <Route path={learningPath} component={AppContainer} />
    <Redirect from={appBasePath} to={learningPath} />
  </Switch>
);

export default AppRoute;
