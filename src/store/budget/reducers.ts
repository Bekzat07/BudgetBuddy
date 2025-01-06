import * as types from './types';

export const initialState = (state: types.BudgetForm) => {
  return {
    ...state,
    budget: null,
  };
};
