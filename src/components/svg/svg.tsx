import React from 'react';
import classes from './svg.module.pcss';

interface SvgPropsBase {
  name: string;
  fill?: string;
}

interface SvgProps extends SvgPropsBase {
  src: string;
  prefix?: string;
}

export const Svg: React.FC<SvgProps> = ({ src, name, prefix = '', fill }) => {
  return (
    <svg className={classes.svg} style={{ fill }}>
      <use href={`${src}#${prefix}${name}`} />
    </svg>
  );
};

export const withSprite: (
  src: string,
  prefix?: string
) => React.FC<SvgPropsBase> = (src, prefix) => {
  return ({ name, fill }) => (
    <Svg src={src} name={name} prefix={prefix} fill={fill} />
  );
};
