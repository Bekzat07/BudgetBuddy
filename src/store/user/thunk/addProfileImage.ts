import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';
import {ImageForm} from '../types';

export const addProfileImage = createAsyncThunk<ImageForm, ImageForm>(
  'auth/login',
  async (profileDetails, {rejectWithValue}) => {
    try {
      console.log('profileDetails', profileDetails.image);
      const {data} = await baseService.post(
        `users/${profileDetails.userId}/profile-image`,
        profileDetails.image,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('data', data);
      return data;
    } catch (error: any) {
      console.log('error', error);
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
