import { Dispatch } from 'redux';
import { FormikValues } from 'formik';
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

export const updateTask = (workDayId: string, values: FormikValues) => async (
  dispatch: Dispatch,
  _: () => RootState,
  { api }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.UPDATE_TASK_START });

  try {
    const res = await api?.patch(`/tasks/${values.id}`, values);

    dispatch({
      type: constants.UPDATE_TASK_SUCCESS,
      payload: { task: res.data, workDayId },
    });

    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.UPDATE_TASK_FAILED });

    return false;
  }
};

export const updateSeveralTasks = (values: FormikValues) => async (
  dispatch: any,
  _: () => RootState,
  { api }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.UPDATE_SEVERAL_TASKS_START });
  console.log(values, '  values');
  try {
    const requests = values.tasks.map(async (task) => {
      if (task) {
        const request = await dispatch(updateTask(values.id, task));
        return request;
      }
      return null;
    });

    await Promise.all(requests);

    dispatch({
      type: constants.UPDATE_SEVERAL_TASKS_SUCCESS,
    });
    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.UPDATE_SEVERAL_TASKS_FAILED });

    return false;
  }
};

export const clear = () => ({ type: constants.CLEAR });
