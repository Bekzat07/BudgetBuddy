import {ActionReducerMapBuilder, isAnyOf} from '@reduxjs/toolkit';
import {UserForm} from '../types';

export const extraReducers = (builder: ActionReducerMapBuilder<UserForm>) => {
  builder.addMatcher(isAnyOf(), state => {
    state.isLoading = true;
  });

  builder.addMatcher(isAnyOf(), state => {
    state.isLoading = false;
  });
};
