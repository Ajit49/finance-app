import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactionsSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    user: userReducer,
  },
});