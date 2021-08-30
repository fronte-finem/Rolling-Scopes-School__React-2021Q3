import { graphql } from 'msw';
import { isValue } from 'shared/maybe';
// import { API_ENDPOINT } from 'services/anilist-api/anilist-api';
import {
  SearchQuery,
  SearchQueryVariables,
} from 'services/anilist-api/generated/search-query-types';
import {
  DetailsQuery,
  DetailsQueryVariables,
} from 'services/anilist-api/generated/details-query-types';

// const anilistApi = graphql.link(API_ENDPOINT);

function getPageInfo(variables: SearchQueryVariables) {
  const total = 42;
  let { page = 1, perPage = 10 } = variables;
  let currentPage = isValue(page) ? page : 1;
  perPage = isValue(perPage) ? perPage : 10;
  const lastPage = Math.ceil(total / perPage);
  currentPage = currentPage > lastPage ? lastPage : currentPage;
  const hasNextPage = currentPage < lastPage;
  return { total, perPage, currentPage, lastPage, hasNextPage };
}

const testError = {
  message: 'Test error',
  locations: [
    {
      line: 42,
      column: 42,
    },
  ],
};

export const handlers = [
  graphql.query<SearchQuery, SearchQueryVariables>(
    'Search',
    (req, res, context) => {
      if (req.variables.search === 'error')
        return res(context.errors([testError]));

      let pageInfo = getPageInfo(req.variables);

      return res(
        context.data({
          Page: {
            pageInfo,
            media: [
              {
                id: 1,
                title: { english: 'Cowboy Bebop' },
              },
              {
                id: 5,
                title: { english: 'Trigan' },
              },
            ],
          },
        })
      );
    }
  ),

  graphql.query<DetailsQuery, DetailsQueryVariables>(
    'Details',
    (req, res, context) => {
      switch (req.variables.id) {
        case 0:
          return res(context.errors([testError]));
        case 1:
          return res(
            context.data({
              Media: {
                id: 1,
                title: { english: 'Cowboy Bebop' },
              },
            })
          );
        case 42:
          return res(
            context.data({
              Media: {
                id: 42,
              },
            })
          );
      }
    }
  ),
];
