import * as types from './types';

export const initialState = (state: types.AuthForm) => {
  return {
    ...state,
    user: null,
  };
};
