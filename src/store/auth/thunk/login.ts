import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';

export const registerAndLogin = createAsyncThunk<{phoneId: string}, string>(
  'user/registerAndLogin',
  async (phone, {rejectWithValue}) => {
    const formattedNumber = phone.replace(/\D/g, '');
    try {
      const {data} = await baseService.post<{phoneId: string}>(
        `/api/v1/auth/register-login`,
      );

      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
