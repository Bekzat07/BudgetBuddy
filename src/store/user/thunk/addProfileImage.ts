import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';
import {ImageForm} from '../types';

export const addProfileImage = createAsyncThunk<ImageForm, ImageForm>(
  'user/addProfileImage',
  async (profileDetails, {rejectWithValue}) => {
    try {
      const {data} = await baseService.post(
        `users/${profileDetails.userId}/profile-image`,
        profileDetails.image,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return data;
    } catch (error: any) {
      console.log('error', error);
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
