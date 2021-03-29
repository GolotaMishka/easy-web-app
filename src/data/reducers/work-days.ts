import { fromJS } from 'immutable';
import * as constants from '../constants/work-days';
import LoadingProgress from '../utils/reducers/loading';

export const listLoadingProgress = new LoadingProgress('workDaysList');

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
    newState.set('list', action.payload.result);
    mergeData(newState, action.payload);
    listLoadingProgress.setLoaded(newState);
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

    case constants.CLEAR:
      return initialState;

    default:
      return state;
  }
};
