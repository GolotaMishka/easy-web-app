import { Map } from 'immutable';
import { denormalize } from 'normalizr';
import * as schemas from '../utils/schemas';

import { listLoadingProgress, taskUpdationProgress } from '../reducers/work-days';
import { RootState } from '../reducers';

const getState = (store: RootState) => store.workDays;

export const getEntities = (store: RootState) => getState(store).get('entities');
export const getList = (store: RootState) => getState(store).get('list');

export const getItemsList = (store: RootState) => {
  const entities = Map({
    workDays: getEntities(store),
  });

  return denormalize(getList(store), [schemas.workDay], entities);
};

export const getItemsListLoaded = (store) => listLoadingProgress.getLoaded(getState(store));
export const getItemsListLoading = (store) => listLoadingProgress.getLoading(getState(store));
export const getItemsListLoadFailed = (store) => listLoadingProgress.getLoadFailed(getState(store));

export const getTaskUpdated = (store) => taskUpdationProgress.getLoaded(getState(store));
export const getTaskUpdating = (store) => taskUpdationProgress.getLoading(getState(store));
export const getTaskUpdatingFailed = (store) => taskUpdationProgress.getLoadFailed(getState(store));
