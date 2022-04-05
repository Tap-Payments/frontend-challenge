import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/balance/balanceApi';
import globalSlice from "../features/global/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;