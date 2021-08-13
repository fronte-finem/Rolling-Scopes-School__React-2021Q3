import React, { useState } from 'react';
import {
  UseAnilistApi,
  useAnilistApi,
} from 'services/anilist-api/use-anilist-api';
import searchQuery from 'services/anilist-api/queries/search-query.graphql';
import {
  SearchQuery,
  SearchQueryVariables,
} from 'services/anilist-api/generated/types';
import { Paginator } from 'components/paginator/paginator';
import { ErrorInfo } from 'components/error-info/error-info';
import { Cards } from 'components/cards/cards';
import { SearchBar } from 'components/search-bar/search-bar';
import { OrderByGroup } from 'components/order-by/order-by-group';
import { OrderMap } from 'components/order-by/order-state';
import {
  mapOrderSort,
  ORDER_SORT_MAP,
} from 'components/order-by/order-to-sort';
import { FullLoader } from 'components/loader/full-loader';
import classes from './app.module.css';

const isResults = (api: UseAnilistApi<SearchQuery>): boolean =>
  (api.data?.Page?.pageInfo?.total || 0) > 0;

export function App() {
  const [variables, setVariables] = useState<SearchQueryVariables>({
    page: 1,
    perPage: 10,
  });

  const api = useAnilistApi<SearchQuery, SearchQueryVariables>(
    searchQuery,
    variables
  );

  const handlePageSelect = (page: number) => {
    console.log('Selected page:', page);
    setVariables((prev) => ({ ...prev, page }));
  };

  const handlePerPageSelect = (perPage: number) => {
    console.log('Selected results per page:', perPage);
    setVariables((prev) => ({ ...prev, page: 1, perPage }));
  };

  const PaginatorWrapper = api.data?.Page?.pageInfo && (
    <div className={classes.paginatorWrapper}>
      <Paginator
        pageInfo={api.data.Page.pageInfo}
        onPageSelect={handlePageSelect}
        onPerPageSelect={handlePerPageSelect}
      />
      {api.isLoading && <FullLoader />}
    </div>
  );

  const handleSubmit = (search: string) => {
    console.log('Search:', search);
    setVariables((prev) => ({ ...prev, page: 1, search: search || undefined }));
  };

  const handleOrderBy = (orders: OrderMap) => {
    const sort = mapOrderSort(orders);
    console.log('Order by:', sort);
    setVariables((prev) => ({ ...prev, page: 1, sort }));
  };

  const SearchWrapper = (
    <div className={classes.searchWrapper}>
      <SearchBar onSubmit={handleSubmit} />
      {isResults(api) && (
        <OrderByGroup
          names={[...ORDER_SORT_MAP.keys()]}
          onChange={handleOrderBy}
        />
      )}
      {api.isLoading && <FullLoader />}
    </div>
  );

  return (
    <div className={classes.app}>
      {SearchWrapper}
      <div>
        <div className={classes.stateWrapper}>
          {api.isError && <ErrorInfo error={api.error} />}
        </div>
        {!api.isLoading && !isResults(api) && (
          <div className={classes.searchWrapper}>
            （＞人＜；） No results for query: &quot;{variables.search}&quot;
          </div>
        )}
        {PaginatorWrapper}
        {api.data?.Page?.media && (
          <Cards mediaFragments={api.data.Page.media} />
        )}
        {PaginatorWrapper}
      </div>
    </div>
  );
}
