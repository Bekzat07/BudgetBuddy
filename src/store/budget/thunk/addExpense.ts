import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';
import {Budget, SendExpenseForm} from '../types';

// types

export const addExpense = createAsyncThunk<Budget, SendExpenseForm>(
  'auth/login',
  async (budgetDetails, {rejectWithValue}) => {
    try {
      const {data} = await baseService.post('budget/addExpense', budgetDetails);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
