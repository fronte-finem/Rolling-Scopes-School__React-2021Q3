import React from 'react';
import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { SearchQuery } from 'services/anilist-api/generated/search-query-types';
import { Paginator } from 'components/paginator/paginator';
import { ErrorInfo } from 'components/error-info/error-info';
import { Cards } from 'components/cards/cards';
import { SearchBar } from 'components/search-bar/search-bar';
import { OrderByGroup } from 'components/order-by/order-by-group';
import { FullLoader } from 'components/loader/full-loader';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import {
  searchFetch,
  setPage,
  setPerPage,
  setSearch,
  setSort,
  setUnmount,
} from 'store/slices/searchSlice';
import { Maybe } from 'shared/maybe';
import { selectSearch } from 'store/selectors/search';
import classes from './page-home.module.pcss';

const isResults = (data: Maybe<SearchQuery>): boolean =>
  (data?.Page?.pageInfo?.total || 0) > 0;

export function PageHome() {
  const dispatch = useAppDispatch();
  const searchApi = useAppSelector((state) => state.search);
  const { page, perPage, search, sort } = useAppSelector(selectSearch);

  React.useEffect(() => {
    return () => {
      dispatch(setUnmount(true));
    };
  }, []);

  React.useEffect(() => {
    const { isUnmount } = searchApi;
    if (isUnmount) dispatch(setUnmount(false));
    if ((isUnmount && searchApi.data) || searchApi.isLoading) return () => {};

    const promise = dispatch(searchFetch({ page, perPage, search, sort }));

    return () => {
      console.log('abort searchApi.fetch');
      promise.abort();
    };
  }, [page, perPage, search, sort]);

  const handlePageSelect = (num: number) => {
    console.log('Selected page:', num);
    dispatch(setPage(num));
  };

  const handlePerPageSelect = (num: number) => {
    console.log('Selected results per page:', num);
    dispatch(setPerPage(num));
  };

  const PaginatorWrapper = searchApi.data?.Page?.pageInfo && (
    <div className={classes.paginatorWrapper}>
      <Paginator
        pageInfo={searchApi.data.Page.pageInfo}
        onPageSelect={handlePageSelect}
        onPerPageSelect={handlePerPageSelect}
      />
      {searchApi.isLoading && <FullLoader />}
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
      {isResults(searchApi.data) && <OrderByGroup onChange={handleOrderBy} />}
      {searchApi.isLoading && <FullLoader />}
    </div>
  );

  return (
    <div className={classes.pageHome}>
      {SearchWrapper}
      <div>
        <div className={classes.stateWrapper}>
          {searchApi.isError && <ErrorInfo error={searchApi.error} />}
        </div>
        {!searchApi.isLoading && !isResults(searchApi.data) && (
          <div className={classes.searchWrapper}>
            （＞人＜；） No results for query: &quot;{search}&quot;
          </div>
        )}
        {PaginatorWrapper}
        {searchApi.data?.Page?.media && (
          <Cards mediaFragments={searchApi.data.Page.media} />
        )}
        {PaginatorWrapper}
      </div>
    </div>
  );
}
