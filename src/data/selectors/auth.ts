import { sessionLoading } from '../reducers/auth';
import { RootState } from '../reducers';

const getState = (state: RootState) => state.auth;

export const getSessionLoaded = (store: RootState): boolean => sessionLoading.getLoaded(getState(store));
export const getSessionLoading = (store: RootState): boolean => sessionLoading.getLoading(getState(store));
export const getSessionLoadFailed = (store: RootState): boolean => sessionLoading.getLoadFailed(getState(store));

export const getAccess = (state: RootState): string => getState(state).get('access');
export const getRefreshToken = (state: RootState): string => getState(state).get('refresh');
export const getExpiresIn = (state: RootState): string => getState(state).get('expiresIn');

export const getIsLoggedIn = (state: RootState): boolean => Boolean(getAccess(state));

export const getUserDetail = (state: RootState): any => getState(state).get('userDetail');
