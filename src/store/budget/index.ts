// hooks
import {useDispatch} from '../../hooks/useDispatch';

// utils
import {addExpense} from './thunk/addExpense';
import {SendExpenseForm, SendIncomeForm} from './types';
import {addIncome} from './thunk/addIncome';
import {useSelector} from '../../hooks/useSelector';

export const useBudget = () => {
  const dispatch = useDispatch();

  return {
    addExpense: async (authDetails: SendExpenseForm) =>
      dispatch(addExpense(authDetails)).unwrap(),
    addIncome: async (authDetails: SendIncomeForm) =>
      dispatch(addIncome(authDetails)).unwrap(),
    isLoading: useSelector(({budget}) => budget.isLoading),
    budget: useSelector(({budget}) => budget.budget),
  };
};
