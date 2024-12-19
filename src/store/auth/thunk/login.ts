import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';

// types
import {LoginForm, User} from '../types';

export const login = createAsyncThunk<User, LoginForm>(
  'auth/login',
  async (authDetails, {rejectWithValue}) => {
    try {
      const {data} = await baseService.post('/auth/login', {
        email: authDetails.email,
        password: authDetails.password,
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
