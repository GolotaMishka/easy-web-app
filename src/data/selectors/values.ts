import { Map } from 'immutable';
import { denormalize } from 'normalizr';
import * as schemas from '../utils/schemas';

import { listLoadingProgress } from '../reducers/values';
import { RootState } from '../reducers';

const getState = (store: RootState) => store.values;

export const getEntities = (store: RootState) => getState(store).get('entities');

export const getList = (store: RootState) => getState(store).get('list');

export const getItemsList = (store: RootState) => {
  const entities = Map({
    values: getEntities(store),
  });

  return denormalize(getList(store), [schemas.value], entities);
};

export const getListLoaded = (store: RootState): boolean => listLoadingProgress.getLoaded(getState(store));
export const getListLoading = (store: RootState): boolean => listLoadingProgress.getLoading(getState(store));
export const getListLoadFailed = (store: RootState): boolean => listLoadingProgress.getLoadFailed(getState(store));
