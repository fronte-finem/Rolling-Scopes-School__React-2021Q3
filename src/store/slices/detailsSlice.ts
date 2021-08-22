import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  DetailsQuery,
  DetailsQueryVariables,
} from 'services/anilist-api/generated/details-query-types';
import detailsQuery from 'services/anilist-api/queries/details-query.graphql';
import { apiRequestUtil } from 'services/anilist-api/api-utils';
import { FetchState } from '../types/fetch';

const NAMESPACE = 'details';

type DetailsState = FetchState<DetailsQuery> & DetailsQueryVariables;

export const detailsFetch = createAsyncThunk(
  `${NAMESPACE}/fetch`,
  async (vars: DetailsQueryVariables, { signal }) => {
    return await apiRequestUtil<DetailsQueryVariables, DetailsQuery>(
      detailsQuery,
      vars,
      signal
    );
  }
);

const initialState: DetailsState = {
  isLoading: false,
  isError: false,
  id: 1,
};

export const detailsSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    reset: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(detailsFetch.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(detailsFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(detailsFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const { setId, reset } = detailsSlice.actions;

export const detailsReducer = detailsSlice.reducer;
