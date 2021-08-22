import React from 'react';
import { Icon } from 'components/shared/svg/sprites';
import classes from './info.module.pcss';

interface InfoProps {
  info: number | string;
  icon: string;
}

export const Info: React.FC<InfoProps> = ({ info, icon }) => {
  const text = typeof info === 'number' ? Number(info).toLocaleString() : info;
  return (
    <div className={classes.info}>
      <div className={classes.icon}>
        <Icon name={icon} />
      </div>
      <div>{text}</div>
    </div>
  );
};
