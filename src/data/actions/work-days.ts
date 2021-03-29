import { Dispatch } from 'redux';
import * as constants from '../constants/work-days';
// import * as authSelectors from '../selectors/auth';

import { RootState } from '../reducers';
import { ThunkExtraArguments } from '../utils/types';

export const fetchList = () => async (
  dispatch: Dispatch,
  getState: () => RootState,
  { api, normalize, schema }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.LIST_LOAD_START });
  try {
    const res = await api?.get(`/work-days`);
    const payload = {
      ...normalize(
        res.data.items.map((item) => ({ ...item, id: String(item.id) })),
        [schema.workDay],
      ),
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
