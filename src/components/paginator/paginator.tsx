import React from 'react';
import classes from './paginator.module.pcss';
import { Results } from './results';
import { Selector } from './selector';
import { PageInfoProps } from './types';

interface PaginatorProps extends PageInfoProps {
  onPageSelect: (page: number) => void;
  onPerPageSelect: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({
  pageInfo,
  onPageSelect,
  onPerPageSelect,
}) => {
  if (!pageInfo.total || pageInfo.total === 0) return <></>;

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
