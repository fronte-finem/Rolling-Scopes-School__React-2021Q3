import React from 'react';
import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { SearchQuery } from 'services/anilist-api/generated/search-query-types';
import { Paginator } from 'components/paginator/paginator';
import { ErrorInfo } from 'components/error-info/error-info';
import { Cards } from 'components/cards/cards';
import { SearchBar } from 'components/search-bar/search-bar';
import { OrderByGroup } from 'components/order-by/order-by-group';
import { FullLoader } from 'components/loader/full-loader';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  setPage,
  setPerPage,
  setSearch,
  setSort,
} from 'store/slices/search-vars';
import { Maybe } from 'shared/maybe';
import { useSearchQuery } from 'services/anilist-api/anilist-api';
import classes from './page-home.module.pcss';

const isResults = (data: Maybe<SearchQuery>): boolean =>
  (data?.Page?.pageInfo?.total || 0) > 0;

export function PageHome() {
  const dispatch = useAppDispatch();
  const searchVars = useAppSelector((state) => state.searchVars);
  const { isLoading, data, isError, error } = useSearchQuery(searchVars);

  const handlePageSelect = (num: number) => {
    console.log('Selected page:', num);
    dispatch(setPage(num));
  };

  const handlePerPageSelect = (num: number) => {
    console.log('Selected results per page:', num);
    dispatch(setPerPage(num));
  };

  const PaginatorWrapper = data?.Page?.pageInfo && (
    <div className={classes.paginatorWrapper}>
      <Paginator
        pageInfo={data.Page.pageInfo}
        onPageSelect={handlePageSelect}
        onPerPageSelect={handlePerPageSelect}
      />
      {isLoading && <FullLoader />}
    </div>
  );

  const handleSubmit = (str: string) => {
    console.log('Search:', str);
    dispatch(setSearch(str || undefined));
  };

  const handleOrderBy = (mediaSort?: MediaSort) => {
    console.log('Order by:', mediaSort);
    dispatch(setSort(mediaSort));
  };

  const SearchWrapper = (
    <div className={classes.searchWrapper}>
      <SearchBar onSubmit={handleSubmit} />
      {isResults(data) && <OrderByGroup onChange={handleOrderBy} />}
      {isLoading && <FullLoader />}
    </div>
  );

  return (
    <div className={classes.pageHome}>
      {SearchWrapper}
      <div>
        <div className={classes.stateWrapper}>
          {isError && <ErrorInfo error={error} />}
        </div>
        {!isLoading && !isResults(data) && (
          <div className={classes.searchWrapper}>
            （＞人＜；） No results for query: &quot;{searchVars.search}
            &quot;
          </div>
        )}
        {PaginatorWrapper}
        {data?.Page?.media && <Cards mediaFragments={data.Page.media} />}
        {PaginatorWrapper}
      </div>
    </div>
  );
}
