import { Dispatch } from 'redux';
import { FormikValues, FormikHelpers } from 'formik';
import * as constants from '../constants/users';
import * as authSelectors from '../selectors/auth';

import { RootState } from '../reducers';
import { ThunkExtraArguments } from '../utils/types';

export const fetchProfile = () => async (
  dispatch: Dispatch,
  getState: () => RootState,
  { api, normalize, schema }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.PROFILE_LOAD_START });
  try {
    const { userId } = authSelectors.getUserDetail(getState());
    const res = await api?.get(`/users/${userId}`);
    const payload = {
      ...normalize(res.data, schema.user),
    };
    dispatch({
      type: constants.PROFILE_LOAD_SUCCESS,
      payload,
    });
    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.PROFILE_LOAD_FAILED });
    return false;
  }
};

export const updateProfile = (values: FormikValues, formikActions: FormikHelpers<FormikValues>) => async (
  dispatch: Dispatch,
  getState: () => RootState,
  { api, normalize, schema }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.PROFILE_UPDATE_START });
  formikActions.setSubmitting(true);

  try {
    const { userId } = authSelectors.getUserDetail(getState());
    const res = await api?.patch(`/users/${userId}`, values);
    const payload = {
      ...normalize(res.data, schema.user),
    };
    dispatch({
      type: constants.PROFILE_UPDATE_SUCCESS,
      payload,
    });
    formikActions.setSubmitting(false);

    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.PROFILE_UPDATE_FAILED });
    formikActions.setSubmitting(false);

    return false;
  }
};

export const clear = () => ({ type: constants.CLEAR });
