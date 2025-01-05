import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';
import {Budget, SendExpenseForm} from '../types';

// types

export const addExpense = createAsyncThunk<Budget, SendExpenseForm>(
  'auth/login',
  async (budgetDetails, {rejectWithValue}) => {
    try {
      console.log('budgetDetails', budgetDetails);
      const {data} = await baseService.post('budget/addExpense', {
        expenses: budgetDetails.expenses,
        userId: budgetDetails.userId,
        currency: budgetDetails.currency,
      });
      console.log('data', data);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.errorMessage || 'Something is wrong',
      );
    }
  },
);
