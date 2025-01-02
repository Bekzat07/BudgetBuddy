import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

// slice
import userSlice from './user/slice';
import authSlice from './auth/slice';
import budgetSlice from './budget/slice';

const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    budget: budgetSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
