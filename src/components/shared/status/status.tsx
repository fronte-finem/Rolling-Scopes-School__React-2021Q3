import React, { CSSProperties } from 'react';
import { MediaStatus } from 'services/anilist-api/generated/schema-types';
import { mapGetter, Maybe } from 'shared/maybe';
import classes from './status.module.pcss';

const StatusMap: Map<MediaStatus, { text: string; color: string }> = new Map([
  [MediaStatus.NotYetReleased, { text: 'Announced', color: '#ff0' }],
  [MediaStatus.Releasing, { text: 'Ongoing', color: '#f80' }],
  [MediaStatus.Hiatus, { text: 'Paused', color: '#888' }],
  [MediaStatus.Cancelled, { text: 'Cancelled', color: '#333' }],
  [MediaStatus.Finished, { text: 'Completed', color: '#08f' }],
]);
const getStatus = mapGetter(StatusMap);
export const Status: React.FC<{ mediaStatus?: Maybe<MediaStatus> }> = ({
  mediaStatus,
}) => {
  const status = getStatus(mediaStatus);
  if (!status) return null;
  return (
    <div
      className={classes.status}
      style={{ '--color': status.color } as CSSProperties}>
      {status.text}
    </div>
  );
};
