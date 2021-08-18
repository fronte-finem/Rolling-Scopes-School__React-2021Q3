import React from 'react';
import { useParams } from 'react-router-dom';
import { useAnilistApi } from 'services/anilist-api/use-anilist-api';
import detailsQuery from 'services/anilist-api/queries/details-query.graphql';
import {
  DetailsQuery,
  DetailsQueryVariables,
} from 'services/anilist-api/generated/details-query-types';
import { FullLoader } from 'components/loader/full-loader';
import { ErrorInfo } from 'components/error-info/error-info';
import { Media } from 'components/media/media';
import { updateTitle } from 'shared/update-title';
import classes from './page-details.module.pcss';

export function PageDetails() {
  const { id } = useParams<{ id: string }>();
  const vars = React.useRef<DetailsQueryVariables>({ id: +id });

  const api = useAnilistApi<DetailsQuery, DetailsQueryVariables>(
    detailsQuery,
    vars.current
  );

  React.useEffect(() => {
    if (api.isLoading || api.isError) return;
    if (api.data?.Media?.title?.romaji)
      updateTitle(api.data.Media.title.romaji);
  }, [api.isLoading]);

  return (
    <div className={classes.pageDetails}>
      {api.isLoading && <FullLoader />}
      {api.isError && (
        <div className={classes.errorWrapper}>
          <ErrorInfo error={api.error} />
        </div>
      )}
      {!api.isLoading && !api.data && (
        <div className={classes.messageWrapper}>
          （＞人＜；） No results for ID: &quot;{id}&quot;
        </div>
      )}
      {api.data?.Media && <Media media={api.data.Media} />}
    </div>
  );
}
