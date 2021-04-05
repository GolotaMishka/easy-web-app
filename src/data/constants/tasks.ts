const prefix = (type: string): string => `easy-web/tasks/${type}`;

export const LIST_LOAD_START: string = prefix('LIST_LOAD_START');
export const LIST_LOAD_SUCCESS: string = prefix('LIST_LOAD_SUCCESS');
export const LIST_LOAD_FAILED: string = prefix('LIST_LOAD_FAILED');

export const UPDATE_ANSWER_START: string = prefix('UPDATE_ANSWER_START');
export const UPDATE_ANSWER_SUCCESS: string = prefix('UPDATE_ANSWER_SUCCESS');
export const UPDATE_ANSWER_FAILED: string = prefix('UPDATE_ANSWER_FAILED');

export const UPDATE_SEVERAL_ANSWERS_START: string = prefix('UPDATE_SEVERAL_ANSWERS_START');
export const UPDATE_SEVERAL_ANSWERS_SUCCESS: string = prefix('UPDATE_SEVERAL_ANSWERS_SUCCESS');
export const UPDATE_SEVERAL_ANSWERS_FAILED: string = prefix('UPDATE_SEVERAL_ANSWERS_FAILED');

export const CLEAR: string = prefix('CLEAR');
