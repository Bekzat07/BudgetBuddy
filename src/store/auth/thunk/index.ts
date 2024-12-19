import {ActionReducerMapBuilder, isAnyOf} from '@reduxjs/toolkit';
import {AuthForm} from '../types';

export const extraReducers = (builder: ActionReducerMapBuilder<AuthForm>) => {
  builder.addMatcher(isAnyOf(), state => {
    state.isLoading = true;
  });

  builder.addMatcher(isAnyOf(), state => {
    state.isLoading = false;
  });
};
