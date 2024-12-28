import * as types from './types';
import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {extraReducers} from './thunk';

const initialState: types.AuthForm = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
  extraReducers,
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
