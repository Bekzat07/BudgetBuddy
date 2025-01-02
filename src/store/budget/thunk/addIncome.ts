import {createAsyncThunk} from '@reduxjs/toolkit';
import baseService from '../../../init/axios/baseService';

// types
import {Budget, SendIncomeForm} from '../types';

// types

export const AddIncome = createAsyncThunk<Budget, SendIncomeForm>(
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
