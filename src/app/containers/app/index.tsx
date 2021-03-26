import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  appBasePath,
  knowledgePath,
  interviewPath,
  vacanciesPath,
  resumePath,
  trajectoryPath,
  profilePath,
} from 'app/constants/url';
import Layout from 'app/components/core/layout';
import ErrorBoundary from 'app/utils/error-boundary';
// import AppContainer from './app';

const AppRoute = () => (
  <Layout>
    <ErrorBoundary>
      <Switch>
        <Route path={knowledgePath} component={() => <div>knowledgePath</div>} />
        <Route path={interviewPath} component={() => <div>interviewPath</div>} />
        <Route path={vacanciesPath} component={() => <div>vacanciesPath</div>} />
        <Route path={resumePath} component={() => <div>resumePath</div>} />
        <Route path={trajectoryPath} component={() => <div>trajectoryPath</div>} />
        <Route path={profilePath} component={() => <div>profilePath</div>} />
        <Redirect from={appBasePath} to={knowledgePath} />
      </Switch>
    </ErrorBoundary>
  </Layout>
);

export default AppRoute;
