import { Dispatch } from 'redux';
import { FormikValues } from 'formik';
import * as constants from '../constants/tasks';
// import * as authSelectors from '../selectors/auth';
import * as authSelectors from '../selectors/auth';
import { fullDate } from '../../app/utils';
import { RootState } from '../reducers';
import { ThunkExtraArguments } from '../utils/types';

export const fetchList = () => async (
  dispatch: Dispatch,
  getState: () => RootState,
  { api, normalize, schema }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.LIST_LOAD_START });
  try {
    const { userId } = authSelectors.getUserDetail(getState());

    const res = await api?.get(`/tasks/${userId}`);
    const payload = {
      ...normalize(
        res.data.items.map((item) => ({ ...item, date: fullDate(item.date) })),
        [schema.task],
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

export const updateAnswer = (task: FormikValues) => async (
  dispatch: Dispatch,
  getState: () => RootState,
  { api }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.UPDATE_ANSWER_START });

  try {
    const { userId } = authSelectors.getUserDetail(getState());

    const res = await api?.patch(`/answers/users/${userId}/tasks/${task.id}`, task.answers[0]);

    const newTask = { ...task, answers: [{ ...res.data }] };
    dispatch({
      type: constants.UPDATE_ANSWER_SUCCESS,
      payload: { task: newTask },
    });

    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.UPDATE_ANSWER_FAILED });

    return false;
  }
};

export const updateSeveralAnswers = (workDay: FormikValues) => async (
  dispatch: any,
  _: () => RootState,
): Promise<boolean> => {
  dispatch({ type: constants.UPDATE_SEVERAL_ANSWERS_START });
  try {
    const requests = workDay.tasks.map(async (task) => {
      if (task?.answers[0]?.link) {
        const request = await dispatch(updateAnswer(task));
        return request;
      }
      return null;
    });

    await Promise.all(requests);

    dispatch({
      type: constants.UPDATE_SEVERAL_ANSWERS_SUCCESS,
    });
    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.UPDATE_SEVERAL_ANSWERS_FAILED });

    return false;
  }
};

export const clear = () => ({ type: constants.CLEAR });
