import * as types from './types';
import {createSlice} from '@reduxjs/toolkit';

import * as reducers from './reducers';
import {extraReducers} from './thunk';

const initialState: types.AuthForm = {
  isLoading: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
  extraReducers,
});

export const userActions = authSlice.actions;
export default authSlice.reducer;
