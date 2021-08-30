import React from 'react';
import { useParams } from 'react-router-dom';
import { FullLoader } from 'components/shared/loader/full-loader';
import { ErrorInfo } from 'components/shared/error-info/error-info';
import { Media } from 'components/page-details/media';
import { updateTitle } from 'shared/dom-utils';
import { useDetailsQuery } from 'services/anilist-api/anilist-api';
import { TitleFragment } from 'services/anilist-api/generated/details-query-types';
import classes from './page-details.module.pcss';

export const getTitle = ({ english, romaji, native }: TitleFragment) =>
  english || romaji || native || '';

export function PageDetails() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data, isError, error } = useDetailsQuery({ id: +id });

  React.useEffect(() => {
    if (isLoading || isError) return;
    if (data?.Media?.title) updateTitle(getTitle(data.Media.title));
  }, [isLoading, isError, data]);

  return (
    <div className={classes.pageDetails}>
      {isLoading && <FullLoader />}
      {isError && (
        <div className={classes.errorWrapper}>
          <ErrorInfo error={error} />
        </div>
      )}
      {!isLoading && !data && (
        <div className={classes.messageWrapper}>
          （＞人＜；） No results for ID: &quot;{id}&quot;
        </div>
      )}
      {data?.Media && <Media media={data.Media} />}
    </div>
  );
}
