import { Dispatch } from 'redux';
import * as constants from '../constants/values';
import { RootState } from '../reducers';
import { ThunkExtraArguments } from '../utils/types';

export const fetchList = () => async (
  dispatch: Dispatch,
  _: RootState,
  { api, normalize, schema }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.LIST_LOAD_START });
  try {
    const res = await api?.get(`/values`);
    const payload = {
      ...normalize(res.data.items, [schema.value]),
    };
    dispatch({
      type: constants.LIST_LOAD_SUCCESS,
      payload,
    });
    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.LIST_LOAD_FAILED });
    return false;
  }
};

export const clear = () => ({ type: constants.CLEAR });
