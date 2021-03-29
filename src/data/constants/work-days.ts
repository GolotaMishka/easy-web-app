const prefix = (type: string): string => `easy-web/workDays/${type}`;

export const LIST_LOAD_START: string = prefix('LIST_LOAD_START');
export const LIST_LOAD_SUCCESS: string = prefix('LIST_LOAD_SUCCESS');
export const LIST_LOAD_FAILED: string = prefix('LIST_LOAD_FAILED');

export const UPDATE_TASK_START: string = prefix('UPDATE_TASK_START');
export const UPDATE_TASK_SUCCESS: string = prefix('UPDATE_TASK_SUCCESS');
export const UPDATE_TASK_FAILED: string = prefix('UPDATE_TASK_FAILED');

export const CLEAR: string = prefix('CLEAR');
