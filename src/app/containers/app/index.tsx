import React, { ReactElement } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  appBasePath,
  knowledgePath,
  interviewPath,
  vacanciesPath,
  resumePath,
  trajectoryPath,
  profilePath,
  publicPath,
} from 'app/constants/url';
import Layout from 'app/components/core/layout';
import ErrorBoundary from 'app/utils/error-boundary';
import TrajectoryComponent from 'app/components/app/trajectory';
import { selectors } from 'data';
import { connect } from 'react-redux';
import ProfileContainer from './profile';

export interface AppRouteProps {
  isLoggedIn: boolean;
}

const mapStateToProps = (state) => ({
  isLoggedIn: selectors.auth.getIsLoggedIn(state),
  // profileLoaded: selectors.auth.getProfileLoaded(state),
  // isAccessDenied: selectors.auth.getAccessDenied(state),
  // partiallyLoggedIn: selectors.auth.getPartiallyLoggedIn(state),
  // profile: selectors.auth.getProfile(state),
});

const mapDispatchToProps = {
  // signOut: actions.auth.signOut,
  // fetchCurrentUser: actions.auth.fetchCurrentUser,
  // loginLocally: actions.auth.loginLocally,
};

const AppRoute = ({ isLoggedIn }: AppRouteProps): ReactElement => {
  if (!isLoggedIn) {
    return <Redirect to={publicPath} />;
  }
  return (
    <Layout>
      <ErrorBoundary>
        <Switch>
          <Route path={knowledgePath} component={() => <div>knowledgePath</div>} />
          <Route path={interviewPath} component={() => <div>interviewPath</div>} />
          <Route path={vacanciesPath} component={() => <div>vacanciesPath</div>} />
          <Route path={resumePath} component={() => <div>resumePath</div>} />
          <Route path={trajectoryPath} component={TrajectoryComponent} />
          <Route path={profilePath} component={ProfileContainer} />
          <Redirect from={appBasePath} to={knowledgePath} />
        </Switch>
      </ErrorBoundary>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoute);
