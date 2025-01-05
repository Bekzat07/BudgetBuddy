import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';
import {User} from '../types';

export const getUser = createAsyncThunk<User, void>(
  'auth/login',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await baseService.get('getUser');
      console.log('data', data);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
