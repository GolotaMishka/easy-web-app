const prefix = (type: string): string => `easy-web/auth/${type}`;

export const SESSION_LOAD_START = prefix('SESSION_LOAD_START');
export const SESSION_LOADED = prefix('SESSION_LOADED');
export const SESSION_LOAD_FAILED = prefix('SESSION_LOAD_FAILED');

export const LOGIN_START: string = prefix('LOGIN_START');
export const LOGIN_SUCCESS: string = prefix('LOGIN_SUCCESS');
export const LOGIN_FAILED: string = prefix('LOGIN_FAILED');

export const SIGNUP_START: string = prefix('SIGNUP_START');
export const SIGNUP_SUCCESS: string = prefix('SIGNUP_SUCCESS');
export const SIGNUP_FAILED: string = prefix('SIGNUP_FAILED');

export const LOGOUT: string = prefix('LOGOUT');
