import {ActionReducerMapBuilder, isAnyOf} from '@reduxjs/toolkit';
import {BudgetForm} from '../types';
import {addExpense} from './addExpense';
import {addIncome} from './addIncome';
import {getBudget} from './getBudget';

export const extraReducers = (builder: ActionReducerMapBuilder<BudgetForm>) => {
  builder.addMatcher(
    isAnyOf(addExpense.pending, addIncome.pending, getBudget.pending),
    state => {
      state.isLoading = true;
    },
  );
  builder.addMatcher(
    isAnyOf(addExpense.fulfilled, addIncome.fulfilled, getBudget.fulfilled),
    (state, action) => {
      state.isLoading = false;
      state.budget = action.payload;
    },
  );
  builder.addMatcher(
    isAnyOf(addExpense.rejected, addIncome.rejected, getBudget.rejected),
    state => {
      state.isLoading = false;
    },
  );
};
