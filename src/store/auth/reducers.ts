import * as types from './types';

export const initialState = (state: types.AuthForm) => {
  return {
    ...state,
    user: null,
  };
};

export const changeIsAuthenticatedStatus = (state: types.AuthForm) => {
  return {
    ...state,
    isAuthenticated: !state.isAuthenticated,
  };
};
