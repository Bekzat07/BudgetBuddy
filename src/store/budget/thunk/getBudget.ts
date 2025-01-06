import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';

// types
import {Budget} from '../types';

// types

export const getBudget = createAsyncThunk<Budget, void>(
  'budget/getBudget',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await baseService.get('budget');
      return data;
    } catch (error: any) {
      console.log('error: ' + error);
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
