import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createStore, actions, ThunkExtraArguments } from 'data';
import { Provider } from 'react-redux';
import { Loader } from 'ui';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from 'data/reducers';
import { AnyAction } from 'redux';
import './styles/global.scss';
import EasyWeb from './containers';
import history from './history';

const { store } = createStore();
const rootElement: HTMLElement = document.getElementById('root') as HTMLElement;
(store.dispatch as ThunkDispatch<RootState, ThunkExtraArguments, AnyAction>)(actions.auth.getInitialCredentials());
console.log(process.env.PROJECT_ENV, ' process.env.PROJECT_ENV');
const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Suspense fallback={Loader}>
        <EasyWeb />
      </Suspense>
    </Router>
  </Provider>
);
render(<App />, rootElement);
