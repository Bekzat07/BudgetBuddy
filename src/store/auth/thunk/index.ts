import {ActionReducerMapBuilder, isAnyOf} from '@reduxjs/toolkit';
import {AuthForm} from '../types';
import {login} from './login';

export const extraReducers = (builder: ActionReducerMapBuilder<AuthForm>) => {
  builder.addMatcher(isAnyOf(login.pending), state => {
    state.isLoading = true;
  });

  builder.addMatcher(isAnyOf(login.fulfilled), (state, action) => {
    state.isLoading = false;
    state.isAuthenticated = true;
    console.log('action', action.payload);
    state.user = action.payload;
  });
  builder.addMatcher(isAnyOf(login.rejected), state => {
    state.isLoading = false;
  });
};
