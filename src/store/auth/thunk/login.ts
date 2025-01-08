import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';

// types
import {LoginForm, User} from '../types';

export const login = createAsyncThunk<User, LoginForm>(
  'auth/login',
  async (authDetails, {rejectWithValue}) => {
    try {
      console.log('authDetails', authDetails);
      const {data} = await baseService.post('auth/login', authDetails);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
