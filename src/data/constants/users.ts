const prefix = (type: string): string => `easy-web/values/${type}`;

export const PROFILE_LOAD_START: string = prefix('PROFILE_LOAD_START');
export const PROFILE_LOAD_SUCCESS: string = prefix('PROFILE_LOAD_SUCCESS');
export const PROFILE_LOAD_FAILED: string = prefix('PROFILE_LOAD_FAILED');

export const PROFILE_UPDATE_START: string = prefix('PROFILE_UPDATE_START');
export const PROFILE_UPDATE_SUCCESS: string = prefix('PROFILE_UPDATE_SUCCESS');
export const PROFILE_UPDATE_FAILED: string = prefix('PROFILE_UPDATE_FAILED');

export const CLEAR: string = prefix('CLEAR');
