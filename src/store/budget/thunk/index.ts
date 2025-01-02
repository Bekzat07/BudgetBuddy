import {ActionReducerMapBuilder, isAnyOf} from '@reduxjs/toolkit';
import {BudgetForm} from '../types';

export const extraReducers = (builder: ActionReducerMapBuilder<BudgetForm>) => {
  builder.addMatcher(isAnyOf(), state => {
    state.isLoading = true;
  });

  builder.addMatcher(isAnyOf(), state => {
    state.isLoading = false;
  });
};
