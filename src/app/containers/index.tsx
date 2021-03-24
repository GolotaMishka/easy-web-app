import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import { publicPath, appBasePath } from 'app/constants/url/user';
import PublicRoute from './public';
import AppRoute from './app';

const EasyWeb = () => (
  <Switch>
    <Route path={publicPath} component={PublicRoute} />
    <Route path={appBasePath} component={AppRoute} />
    <Redirect to={publicPath} />
  </Switch>
);
export default hot(module)(EasyWeb);
