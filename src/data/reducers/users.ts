import { fromJS } from 'immutable';
import * as constants from '../constants/users';
import LoadingProgress from '../utils/reducers/loading';

export const loadingProgress = new LoadingProgress('user');
export const updationProgress = new LoadingProgress('userUpdation');

const mergeData = (state, payload) => {
  return state.withMutations((newState) => {
    const {
      entities: { users },
    } = payload;

    if (!users) return;
    fromJS(users).forEach((user) => {
      newState.updateIn(['entities', user.get('id')], (prevUser = user) => prevUser.merge(user));
    });
  });
};

const loadEntity = (state, action) =>
  state.withMutations((newState) => {
    mergeData(newState, action.payload);
    loadingProgress.setLoaded(newState);
  });

const updateEntity = (state, action) =>
  state.withMutations((newState) => {
    mergeData(newState, action.payload);
    updationProgress.setLoaded(newState);
  });

const initialState = fromJS({
  entities: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.PROFILE_LOAD_START:
      return loadingProgress.setLoading(state);
    case constants.PROFILE_LOAD_FAILED:
      return loadingProgress.setLoadFailed(state);
    case constants.PROFILE_LOAD_SUCCESS:
      return loadEntity(state, action);

    case constants.PROFILE_UPDATE_START:
      return updationProgress.setLoading(state);
    case constants.PROFILE_UPDATE_FAILED:
      return updationProgress.setLoadFailed(state);
    case constants.PROFILE_UPDATE_SUCCESS:
      return updateEntity(state, action);

    case constants.CLEAR:
      return initialState;

    default:
      return state;
  }
};
