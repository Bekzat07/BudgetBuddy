import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';
import {User} from '../types';
import Config from 'react-native-config';

export const findUser = createAsyncThunk<User[], string>(
  'user/findUser',
  async (userName: string, {rejectWithValue}) => {
    try {
      console.log('userName', userName);
      console.log('Config', Config.API_KEY);

      const {data} = await baseService.get(`users?name=${userName}`);
      return data;
    } catch (error: any) {
      console.log('error: ', error);
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
