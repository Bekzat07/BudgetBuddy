import * as types from './types';

export const initialState = (state: types.UserForm) => {
  return {
    ...state,
    user: null,
  };
};
