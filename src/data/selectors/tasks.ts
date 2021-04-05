import { Map } from 'immutable';
import { denormalize } from 'normalizr';
import * as schemas from '../utils/schemas';

import { listLoadingProgress, severalTaskUpdationProgress, taskUpdationProgress } from '../reducers/tasks';
import { RootState } from '../reducers';

const getState = (store: RootState) => store.tasks;

export const getEntities = (store: RootState) => getState(store).get('entities');
export const getList = (store: RootState) => getState(store).get('list');

export const getItemsList = (store: RootState) => {
  const entities = Map({
    tasks: getEntities(store),
  });

  return denormalize(getList(store), [schemas.task], entities);
};

export const getItemsListLoaded = (store: RootState) => listLoadingProgress.getLoaded(getState(store));
export const getItemsListLoading = (store: RootState) => listLoadingProgress.getLoading(getState(store));
export const getItemsListLoadFailed = (store: RootState) => listLoadingProgress.getLoadFailed(getState(store));

export const getTaskUpdated = (store: RootState) => taskUpdationProgress.getLoaded(getState(store));
export const getTaskUpdating = (store: RootState) => taskUpdationProgress.getLoading(getState(store));
export const getTaskUpdatingFailed = (store: RootState) => taskUpdationProgress.getLoadFailed(getState(store));

export const getSeveralTasksUpdated = (store: RootState) => severalTaskUpdationProgress.getLoaded(getState(store));
export const getSeveralTasksUpdating = (store: RootState) => severalTaskUpdationProgress.getLoading(getState(store));
export const getSeveralTasksUpdatingFailed = (store: RootState) =>
  severalTaskUpdationProgress.getLoadFailed(getState(store));
