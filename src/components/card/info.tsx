import React from 'react';
import { withSprite } from 'components/svg/svg';
import iconsSprite from 'assets/sprites/icons.svg';
import classes from './info.module.pcss';

const Icons = withSprite(iconsSprite);

interface InfoProps {
  info: number | string;
  icon: string;
}

export const Info: React.FC<InfoProps> = ({ info, icon }) => {
  const text = typeof info === 'number' ? Number(info).toLocaleString() : info;
  return (
    <div className={classes.info}>
      <div className={classes.icon}>
        <Icons name={icon} />
      </div>
      <div>{text}</div>
    </div>
  );
};
