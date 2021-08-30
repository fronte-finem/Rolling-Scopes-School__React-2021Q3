import { IS_PROD } from 'env';
import { configureStore } from '@reduxjs/toolkit';
import { anilistApi } from 'services/anilist-api/anilist-api';
import { searchVarsReducer } from './slices/search-vars';

export const getStore = () =>
  configureStore({
    reducer: {
      searchVars: searchVarsReducer,
      [anilistApi.reducerPath]: anilistApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      anilistApi.middleware,
    ],
    devTools: !IS_PROD,
  });

export const store = getStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
