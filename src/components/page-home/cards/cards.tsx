import React from 'react';
import { Card } from 'components/page-home/card/card';
import { SearchQuery } from 'services/anilist-api/generated/search-query-types';
import { useAppSelector } from 'store/hooks';
import { useSearchQuery } from 'services/anilist-api/anilist-api';
import classes from './cards.module.pcss';

type StateSelector = {
  data?: SearchQuery;
  isLoading: boolean;
};

const selectMedia = ({ data, isLoading }: StateSelector) => ({
  mediaFragments: data?.Page?.media,
  isLoading,
});

export const Cards: React.FC = () => {
  const searchVars = useAppSelector((state) => state.searchVars);
  const { mediaFragments, isLoading } = useSearchQuery(searchVars, {
    selectFromResult: selectMedia,
  });

  if (!mediaFragments || mediaFragments.length === 0) {
    return isLoading ? null : (
      <div data-testid="cards-empty">
        （＞人＜；） No results for query: &quot;{searchVars.search}
        &quot;
      </div>
    );
  }

  return (
    <ul className={classes.cards} data-testid="cards">
      {mediaFragments.map(
        (fragment) =>
          fragment && (
            <li key={fragment?.id}>
              <Card media={fragment} />
            </li>
          )
      )}
    </ul>
  );
};
