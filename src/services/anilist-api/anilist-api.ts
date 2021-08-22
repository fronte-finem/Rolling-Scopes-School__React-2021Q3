import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import {
  SearchQuery,
  SearchQueryVariables,
} from './generated/search-query-types';
import {
  DetailsQuery,
  DetailsQueryVariables,
} from './generated/details-query-types';
import searchQuery from 'services/anilist-api/queries/search-query.graphql';
import detailsQuery from 'services/anilist-api/queries/details-query.graphql';

const API_ENDPOINT = 'https://graphql.anilist.co';

export const anilistApi = createApi({
  reducerPath: 'anilistApi',
  baseQuery: graphqlRequestBaseQuery({
    url: API_ENDPOINT,
  }),
  endpoints: (builder) => ({
    search: builder.query<SearchQuery, SearchQueryVariables>({
      query: (variables) => ({
        document: searchQuery,
        variables,
      }),
    }),
    details: builder.query<DetailsQuery, DetailsQueryVariables>({
      query: (variables) => ({
        document: detailsQuery,
        variables,
      }),
    }),
  }),
  keepUnusedDataFor: 60 * 10,
});

export const { useSearchQuery, useDetailsQuery } = anilistApi;
