import { IS_PROD } from 'env';
import { configureStore } from '@reduxjs/toolkit';
import { detailsReducer } from './slices/detailsSlice';
import { searchReducer } from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    details: detailsReducer,
    search: searchReducer,
  },
  devTools: !IS_PROD,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
