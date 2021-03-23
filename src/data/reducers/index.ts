import { combineReducers } from 'redux';

import values from './values';
import api from './api';

export const entities = { values };

const appReducers = combineReducers({
  api,
  ...entities,
});

export default appReducers;

export type RootState = ReturnType<typeof appReducers>;
