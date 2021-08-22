import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Maybe } from 'shared/maybe';
import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { SearchQueryVariables } from 'services/anilist-api/generated/search-query-types';

const NAMESPACE = 'search';

const initialState: SearchQueryVariables = {
  page: 1,
  perPage: 10,
  search: null,
  sort: null,
};

export const searchVarsSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
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
});

export const { setPage, setPerPage, setSearch, setSort } =
  searchVarsSlice.actions;

export const searchVarsReducer = searchVarsSlice.reducer;
