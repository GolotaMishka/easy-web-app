import { combineReducers } from 'redux';

import values from './values';
import api from './api';
import auth from './auth';

export const entities = { values };

const appReducers = combineReducers({
  api,
  auth,
  ...entities,
});

export default appReducers;

export type RootState = ReturnType<typeof appReducers>;
