import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';

// types
import {RegisterForm, User} from '../types';

export const register = createAsyncThunk<User, RegisterForm>(
  'auth/login',
  async (authDetails, {rejectWithValue}) => {
    try {
      const {data} = await baseService.post('/auth/register', {
        email: authDetails.email,
        password: authDetails.password,
        phone: authDetails.phone,
      });

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
