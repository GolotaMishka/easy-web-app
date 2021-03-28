import jwtDecode from 'jwt-decode';
import { Dispatch } from 'redux';

import { FormikValues, FormikHelpers } from 'formik';
import * as constants from '../constants/auth';
import { RootState } from '../reducers';
import { IToken, ThunkExtraArguments } from '../utils/types';

export const getInitialCredentials = () => (
  dispatch: Dispatch,
  getState: () => RootState,
  { api }: ThunkExtraArguments,
): void => {
  const tokenFromStorage = window.localStorage.getItem('auth');
  if (tokenFromStorage) {
    try {
      const { userId, firstName, lastName, email }: IToken = jwtDecode(tokenFromStorage);
      api?.setAuthorizationHeader(tokenFromStorage);
      const payload = {
        userDetail: { userId, firstName, lastName, email },
        access: tokenFromStorage,
      };

      dispatch({
        type: constants.SESSION_LOADED,
        payload,
      });
    } catch (e) {
      dispatch({
        type: constants.SESSION_LOAD_FAILED,
      });
    }
  }
};

export const signUp = (values: FormikValues, formikActions: FormikHelpers<FormikValues>) => async (
  dispatch: Dispatch,
  _: RootState,
  { api }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.SIGNUP_START });
  formikActions.setSubmitting(true);
  try {
    const res = await api?.post(`/auth/registration`, values);
    const token = res.headers['x-auth'];
    const { userId, firstName, lastName, email }: IToken = jwtDecode(token);
    api?.setAuthorizationHeader(token);

    const payload = {
      userDetail: { userId, firstName, lastName, email },
      access: token,
    };
    localStorage.setItem('auth', token);
    dispatch({
      type: constants.SIGNUP_SUCCESS,
      payload,
    });
    formikActions.setSubmitting(false);

    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.SIGNUP_FAILED });
    formikActions.setSubmitting(false);
    if (e.response && e.response.data) {
      formikActions.setErrors({ message: e.response.data.message, reason: e.response.data.reason });
    }
    return false;
  }
};

export const signIn = (values: FormikValues, formikActions: FormikHelpers<FormikValues>) => async (
  dispatch: Dispatch,
  _: RootState,
  { api }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.LOGIN_START });
  formikActions.setSubmitting(true);
  try {
    const res = await api?.post(`/auth/login`, values);
    const token = res.headers['x-auth'];
    const { userId, firstName, lastName, email }: IToken = jwtDecode(token);
    api?.setAuthorizationHeader(token);

    const payload = {
      userDetail: { userId, firstName, lastName, email },
      access: token,
    };
    localStorage.setItem('auth', token);
    dispatch({
      type: constants.LOGIN_SUCCESS,
      payload,
    });
    formikActions.setSubmitting(false);

    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.LOGIN_FAILED });
    formikActions.setSubmitting(false);
    if (e.response && e.response.data) {
      formikActions.setErrors({ message: e.response.data.message, reason: e.response.data.reason });
    }
    return false;
  }
};
