import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createStore } from 'data';
import { Provider } from 'react-redux';
import { Loader } from 'ui';

import './styles/global.scss';
import EasyWeb from './containers';
import history from './history';

const { store } = createStore();
const rootElement: HTMLElement = document.getElementById('root') as HTMLElement;

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
