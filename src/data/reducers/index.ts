import { combineReducers } from 'redux';

import users from './users';
import api from './api';
import auth from './auth';
import workDays from './work-days';

export const entities = { users, workDays };

const appReducers = combineReducers({
  api,
  auth,
  ...entities,
});

export default appReducers;

export type RootState = ReturnType<typeof appReducers>;
