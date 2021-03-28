import React, { ReactElement } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { homePath, signInPath, signUpPath, appBasePath } from 'app/constants/url';
import { selectors } from 'data';
import { connect } from 'react-redux';
import HomeContainer from './home';
import SignInContainer from './sign-in';
import SignUpContainer from './sign-up';

export interface PublicRouteProps {
  isLoggedIn: boolean;
}

const mapStateToProps = (state) => ({
  isLoggedIn: selectors.auth.getIsLoggedIn(state),
});

const PublicRoute = ({ isLoggedIn }: PublicRouteProps): ReactElement => {
  if (isLoggedIn) {
    return <Redirect to={appBasePath} />;
  }
  return (
    <Switch>
      <Route path={homePath} component={HomeContainer} />
      <Route path={signInPath} component={SignInContainer} />
      <Route path={signUpPath} component={SignUpContainer} />

      <Redirect to={homePath} />
    </Switch>
  );
};

export default connect(mapStateToProps, null)(PublicRoute);
