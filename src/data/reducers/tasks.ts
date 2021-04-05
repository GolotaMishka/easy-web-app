import { fromJS } from 'immutable';
import * as constants from '../constants/tasks';
import LoadingProgress from '../utils/reducers/loading';

export const listLoadingProgress = new LoadingProgress('tasksList');
export const taskUpdationProgress = new LoadingProgress('taskUpdation');
export const severalTaskUpdationProgress = new LoadingProgress('severalTaskUpdation');

const mergeData = (state, payload) => {
  return state.withMutations((newState) => {
    const {
      entities: { tasks },
    } = payload;

    if (!tasks) return;
    fromJS(tasks).forEach((task) => {
      newState.updateIn(['entities', task.get('id')], (prevTask = task) => prevTask.merge(task));
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
    const { task } = action.payload;

    newState.setIn(['entities', task.id], fromJS(task));
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

    case constants.UPDATE_ANSWER_START:
      return taskUpdationProgress.setLoading(state);
    case constants.UPDATE_ANSWER_FAILED:
      return taskUpdationProgress.setLoadFailed(state);
    case constants.UPDATE_ANSWER_SUCCESS:
      return updateTask(state, action);

    case constants.UPDATE_SEVERAL_ANSWERS_START:
      return severalTaskUpdationProgress.setLoading(state);
    case constants.UPDATE_SEVERAL_ANSWERS_FAILED:
      return severalTaskUpdationProgress.setLoadFailed(state);
    case constants.UPDATE_SEVERAL_ANSWERS_SUCCESS:
      return severalTaskUpdationProgress.setLoaded(state);

    case constants.CLEAR:
      return initialState;

    default:
      return state;
  }
};
