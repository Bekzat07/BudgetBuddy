import * as types from './types';
import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {extraReducers} from './thunk';

const initialState: types.BudgetForm = {
  budget: null,
  isLoading: false,
};

export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers,
  extraReducers,
});

export const authActions = budgetSlice.actions;
export default budgetSlice.reducer;
