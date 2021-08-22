import React from 'react';
import { useParams } from 'react-router-dom';
import { FullLoader } from 'components/shared/loader/full-loader';
import { ErrorInfo } from 'components/shared/error-info/error-info';
import { Media } from 'components/page-details/media';
import { updateTitle } from 'shared/update-title';
import { useDetailsQuery } from 'services/anilist-api/anilist-api';
import classes from './page-details.module.pcss';

export function PageDetails() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data, isError, error } = useDetailsQuery({ id: +id });

  React.useEffect(() => {
    if (isLoading || isError) return;
    if (data?.Media?.title?.romaji) updateTitle(data.Media.title.romaji);
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
