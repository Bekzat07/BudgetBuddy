import {ActionReducerMapBuilder, isAnyOf} from '@reduxjs/toolkit';
import {BudgetForm} from '../types';
import {addExpense} from './addExpense';
import {addIncome} from './addIncome';

export const extraReducers = (builder: ActionReducerMapBuilder<BudgetForm>) => {
  builder.addMatcher(isAnyOf(addExpense.pending, addIncome.pending), state => {
    state.isLoading = true;
  });
  builder.addMatcher(
    isAnyOf(addExpense.fulfilled, addIncome.fulfilled),
    (state, action) => {
      state.isLoading = false;
      state.budget = action.payload;
    },
  );
  builder.addMatcher(
    isAnyOf(addExpense.rejected, addIncome.rejected),
    state => {
      state.isLoading = false;
    },
  );
};
