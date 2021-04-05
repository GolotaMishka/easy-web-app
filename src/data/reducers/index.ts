import { combineReducers } from 'redux';

import users from './users';
import api from './api';
import auth from './auth';
import tasks from './tasks';

export const entities = { users, tasks };

const appReducers = combineReducers({
  api,
  auth,
  ...entities,
});

export default appReducers;

export type RootState = ReturnType<typeof appReducers>;
