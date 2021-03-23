const prefix = (type: string): string => `easy-web/values/${type}`;

export const LIST_LOAD_START: string = prefix('LIST_LOAD_START');
export const LIST_LOAD_SUCCESS: string = prefix('LIST_LOAD_SUCCESS');
export const LIST_LOAD_FAILED: string = prefix('LIST_LOAD_FAILED');

export const CLEAR: string = prefix('CLEAR');
