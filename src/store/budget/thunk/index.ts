import {ActionReducerMapBuilder, isAnyOf} from '@reduxjs/toolkit';
import {BudgetForm} from '../types';
import {addExpense} from './addExpense';
import {addIncome} from './addIncome';

export const extraReducers = (builder: ActionReducerMapBuilder<BudgetForm>) => {
  builder.addMatcher(isAnyOf(addExpense.pending, addIncome.pending), state => {
    state.isLoading = true;
  });

  builder.addMatcher(
    isAnyOf(
      addExpense.rejected,
      addExpense.fulfilled,
      addIncome.fulfilled,
      addIncome.rejected,
    ),
    state => {
      state.isLoading = false;
    },
  );
};
