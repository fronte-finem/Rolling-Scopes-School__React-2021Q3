import React from 'react';
import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { Paginator } from 'components/page-home/paginator/paginator';
import { ErrorInfo } from 'components/shared/error-info/error-info';
import { Cards } from 'components/page-home/cards/cards';
import { SearchBar } from 'components/page-home/search-bar/search-bar';
import { OrderByGroup } from 'components/page-home/order-by/order-by-group';
import { FullLoader } from 'components/shared/loader/full-loader';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  setPage,
  setPerPage,
  setSearch,
  setSort,
} from 'store/slices/search-vars';
import { useSearchQuery } from 'services/anilist-api/anilist-api';
import classes from './page-home.module.pcss';

export const PageHome = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const searchVars = useAppSelector((state) => state.searchVars);
  const { isLoading, isError, error } = useSearchQuery(searchVars);

  const handlePageSelect = (num: number) => {
    dispatch(setPage(num));
  };

  const handlePerPageSelect = (num: number) => {
    dispatch(setPerPage(num));
  };

  const handleSubmit = (str: string) => {
    dispatch(setSearch(str || undefined));
  };

  const handleOrderBy = (mediaSort?: MediaSort) => {
    dispatch(setSort(mediaSort));
  };

  const PaginatorWrapper = (
    <div className={classes.paginatorWrapper}>
      <Paginator
        onPageSelect={handlePageSelect}
        onPerPageSelect={handlePerPageSelect}
      />
      {isLoading && <FullLoader />}
    </div>
  );

  const SearchWrapper = (
    <div className={classes.searchWrapper}>
      <SearchBar onSubmit={handleSubmit} />
      <OrderByGroup onChange={handleOrderBy} />
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
        {PaginatorWrapper}
        <Cards />
        {PaginatorWrapper}
      </div>
    </div>
  );
};
