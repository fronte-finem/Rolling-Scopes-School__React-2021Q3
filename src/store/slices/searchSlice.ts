import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Maybe } from 'shared/maybe';
import { MediaSort } from 'services/anilist-api/generated/schema-types';
import {
  SearchQuery,
  SearchQueryVariables,
} from 'services/anilist-api/generated/search-query-types';
import searchQuery from 'services/anilist-api/queries/search-query.graphql';
import { apiRequestUtil } from 'services/anilist-api/api-utils';
import { FetchState } from '../types/fetch';

const NAMESPACE = 'search';

export const searchFetch = createAsyncThunk(
  `${NAMESPACE}/fetch`,
  async (vars: SearchQueryVariables, { signal }) => {
    return await apiRequestUtil<SearchQueryVariables, SearchQuery>(
      searchQuery,
      vars,
      signal
    );
  }
);

interface SearchState extends FetchState<SearchQuery>, SearchQueryVariables {
  isUnmount: boolean;
}

const initialState: SearchState = {
  isLoading: false,
  isError: false,
  isUnmount: true,
  page: 1,
  perPage: 10,
  search: null,
  sort: null,
};

export const searchSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    setUnmount: (state, action: PayloadAction<boolean>) => {
      state.isUnmount = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      state.page = 1;
      state.perPage = action.payload;
    },
    setSearch: (state, action: PayloadAction<Maybe<string>>) => {
      state.page = 1;
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<Maybe<MediaSort>>) => {
      state.page = 1;
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchFetch.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(searchFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      .addCase(searchFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const { setPage, setPerPage, setSearch, setSort, setUnmount } =
  searchSlice.actions;

export const searchReducer = searchSlice.reducer;
