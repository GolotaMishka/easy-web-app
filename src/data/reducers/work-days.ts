import { fromJS } from 'immutable';
import * as constants from '../constants/work-days';
import LoadingProgress from '../utils/reducers/loading';

export const listLoadingProgress = new LoadingProgress('workDaysList');
export const taskUpdationProgress = new LoadingProgress('taskUpdation');

const mergeData = (state, payload) => {
  return state.withMutations((newState) => {
    const {
      entities: { workDays },
    } = payload;

    if (!workDays) return;
    fromJS(workDays).forEach((workDay) => {
      newState.updateIn(['entities', workDay.get('id')], (prevWorkDay = workDay) => prevWorkDay.merge(workDay));
    });
  });
};

const loadList = (state, action) =>
  state.withMutations((newState) => {
    newState.set('list', fromJS(action.payload.result));
    mergeData(newState, action.payload);
    listLoadingProgress.setLoaded(newState);
  });

const updateTask = (state, action) =>
  state.withMutations((newState) => {
    const { task, workDayId } = action.payload;

    newState.updateIn(['entities', workDayId, 'tasks'], (tasks) =>
      tasks.map((taskOld) => (taskOld.get('id') === task.id ? fromJS(task) : taskOld)),
    );

    taskUpdationProgress.setLoaded(newState);
  });

const initialState = fromJS({
  entities: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.LIST_LOAD_START:
      return listLoadingProgress.setLoading(state);
    case constants.LIST_LOAD_FAILED:
      return listLoadingProgress.setLoadFailed(state);
    case constants.LIST_LOAD_SUCCESS:
      return loadList(state, action);

    case constants.UPDATE_TASK_START:
      return taskUpdationProgress.setLoading(state);
    case constants.UPDATE_TASK_FAILED:
      return taskUpdationProgress.setLoadFailed(state);
    case constants.UPDATE_TASK_SUCCESS:
      return updateTask(state, action);

    case constants.CLEAR:
      return initialState;

    default:
      return state;
  }
};
