import React from 'react';
import { useSearchQuery } from 'services/anilist-api/anilist-api';
import { useAppSelector } from 'store/hooks';
import { SearchQuery } from 'services/anilist-api/generated/search-query-types';
import classes from './paginator.module.pcss';
import { Results } from './results';
import { Selector } from './selector';

interface PaginatorProps {
  onPageSelect: (page: number) => void;
  onPerPageSelect: (page: number) => void;
}

const selectPageInfo = ({ data }: { data?: SearchQuery }) => ({
  pageInfo: data?.Page?.pageInfo,
});

export const Paginator: React.FC<PaginatorProps> = ({
  onPageSelect,
  onPerPageSelect,
}) => {
  const searchVars = useAppSelector((state) => state.searchVars);
  const { pageInfo } = useSearchQuery(searchVars, {
    selectFromResult: selectPageInfo,
  });

  if (!pageInfo || !pageInfo.total || pageInfo.total === 0) return <></>;

  const handlePageSelect = (page: number) => {
    onPageSelect(page);
  };

  const handlePerPageSelect = (page: number) => {
    onPerPageSelect(page);
  };

  return (
    <div className={classes.paginator}>
      <Selector pageInfo={pageInfo} onSelect={handlePageSelect} />
      <Results pageInfo={pageInfo} onSelect={handlePerPageSelect} />
    </div>
  );
};
