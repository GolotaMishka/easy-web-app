import { Dispatch } from 'redux';
import * as constants from '../constants/api';

export const reset = () => async (dispatch: Dispatch): Promise<void> => {
  dispatch({
    type: constants.RESET,
  });
};
