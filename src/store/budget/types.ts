export type BudgetForm = {
  isLoading: boolean;
  budget: Budget | null;
};

export type Budget = {
  _id: string;
  expenses: number[];
  incomes: number[];
  date: Date;
  currency: string;
  userId: string;
};

export type SendExpenseForm = {
  expenses: number;
  userId: string;
  currency: string;
};
export type SendIncomeForm = {
  incomes: number;
  userId: string;
  currency: string;
};
