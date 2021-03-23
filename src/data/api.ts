import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Store } from 'redux';
import * as apiConstants from './constants/api';

class API {
  private readonly axios: AxiosInstance;

  private store: Store;

  constructor(store: Store, config: AxiosRequestConfig) {
    this.axios = axios.create(config);
    this.store = store;
    this.axios.interceptors.response.use(this.successInterceptor, this.errorInterceptor);
  }

  successInterceptor = (response) => {
    this.store.dispatch({ type: apiConstants.SUCCESS });
    return response;
  };

  isAuthUrl = (url) => {
    return new RegExp(/\/users\/access_token/).test(url);
  };

  errorInterceptor = (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          return this.store.dispatch({ type: apiConstants.UNEXPECTED_ERROR });
        case 401:
          return this.store.dispatch({ type: apiConstants.UNAUTHORIZED });
        case 403:
          this.store.dispatch({ type: apiConstants.FORBIDDEN });
          break;
        case 500:
          this.store.dispatch({ type: apiConstants.SERVER_ERROR });
          break;
        case 404:
          this.store.dispatch({ type: apiConstants.NOT_FOUND });
          break;
        default:
          break;
      }
    } else {
      this.store.dispatch({ type: apiConstants.CONNECTION_ERROR });
      throw new Error('No connection');
    }
    return Promise.reject(error);
  };

  setAuthorizationHeader = (apiKey: string): void => {
    this.axios.defaults.headers.common.Authorization = `Bearer ${apiKey}`;
  };

  removeAuthorizationHeader = (): void => {
    delete this.axios.defaults.headers.common.Authorization;
  };

  get = (...args) => this.axios.get.apply(this, args);

  post = (...args) => this.axios.post.apply(this, args);

  patch = (...args) => this.axios.patch.apply(this, args);

  put = (...args) => this.axios.put.apply(this, args);

  delete = (...args) => this.axios.delete.apply(this, args);
}

export default API;
