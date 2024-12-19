import {ActionReducerMapBuilder, isAnyOf} from '@reduxjs/toolkit';
import {AuthForm} from '../types';
import {login} from './login';

export const extraReducers = (builder: ActionReducerMapBuilder<AuthForm>) => {
  builder.addMatcher(isAnyOf(login.pending), state => {
    state.isLoading = true;
  });

  builder.addMatcher(isAnyOf(login.fulfilled), state => {
    state.isLoading = false;
    state.isAuthenticated = true;
  });
  builder.addMatcher(isAnyOf(login.rejected), state => {
    state.isLoading = false;
  });
};
