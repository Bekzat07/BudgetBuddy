import {ActionReducerMapBuilder, isAnyOf} from '@reduxjs/toolkit';
import {UserForm} from '../types';
import {getUser} from './getUser';

export const extraReducers = (builder: ActionReducerMapBuilder<UserForm>) => {
  builder.addMatcher(isAnyOf(getUser.pending), state => {
    state.isLoading = true;
  });

  builder.addMatcher(isAnyOf(getUser.fulfilled), (state, action) => {
    state.isLoading = false;
    state.currentUser = action.payload;
  });

  builder.addMatcher(isAnyOf(), state => {
    state.isLoading = false;
  });
};
