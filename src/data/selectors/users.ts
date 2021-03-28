import { Map } from 'immutable';
import { denormalize } from 'normalizr';
import { IImmutableAgreement } from '../utils/types';
import * as schemas from '../utils/schemas';
import { getUserDetail } from './auth';

import { loadingProgress, updationProgress } from '../reducers/users';
import { RootState } from '../reducers';

const getState = (store: RootState) => store.users;

export const getEntities = (store: RootState) => getState(store).get('entities');

export const getItem = (store: RootState): IImmutableAgreement => {
  const { userId } = getUserDetail(store);
  const entities = Map({
    users: getEntities(store),
  });

  return denormalize(getEntities(store).get(userId), schemas.user, entities);
};

export const getEntityLoaded = (store: RootState): boolean => loadingProgress.getLoaded(getState(store));
export const getEntityLoading = (store: RootState): boolean => loadingProgress.getLoading(getState(store));
export const getEntityLoadFailed = (store: RootState): boolean => loadingProgress.getLoadFailed(getState(store));

export const getEntityUpdated = (store: RootState): boolean => updationProgress.getLoaded(getState(store));
export const getEntityUpdating = (store: RootState): boolean => updationProgress.getLoading(getState(store));
export const getEntityUpdatingFailed = (store: RootState): boolean => updationProgress.getLoadFailed(getState(store));
