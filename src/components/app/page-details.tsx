import React from 'react';
import { useParams } from 'react-router-dom';
import { FullLoader } from 'components/loader/full-loader';
import { ErrorInfo } from 'components/error-info/error-info';
import { Media } from 'components/media/media';
import { updateTitle } from 'shared/update-title';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { detailsFetch, reset, setId } from 'store/slices/detailsSlice';
import classes from './page-details.module.pcss';

export function PageDetails() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const details = useAppSelector((state) => state.details);

  React.useEffect(() => {
    if (+id === details.id && details.data) return () => {};
    if (+id !== details.id) dispatch(reset());

    const promise = dispatch(detailsFetch({ id: +id }));

    return () => {
      if (details.isLoading) promise.abort();
      dispatch(setId(+id));
    };
  }, []);

  React.useEffect(() => {
    if (details.isLoading || details.isError) return;
    if (details.data?.Media?.title?.romaji)
      updateTitle(details.data.Media.title.romaji);
  }, [details]);

  return (
    <div className={classes.pageDetails}>
      {details.isLoading && <FullLoader />}
      {details.isError && (
        <div className={classes.errorWrapper}>
          <ErrorInfo error={details.error} />
        </div>
      )}
      {!details.isLoading && !details.data && (
        <div className={classes.messageWrapper}>
          （＞人＜；） No results for ID: &quot;{id}&quot;
        </div>
      )}
      {details.data?.Media && <Media media={details.data.Media} />}
    </div>
  );
}
