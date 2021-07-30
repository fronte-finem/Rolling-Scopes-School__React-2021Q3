import React from 'react';
import { css } from '@linaria/core';
import { RSSTask } from 'services/data/data-scheme';

export const Title: React.FC<{ text: string; url?: string }> = ({
  text,
  url,
}) => {
  return (
    <div
      className={css`
        width: 100%;
        background: #fff8;
        text-align: center;
      `}>
      {url ? <a href={url}>{text}</a> : <span>{text}</span>}
    </div>
  );
};

export const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  return (
    <div
      className={css`
        padding: 2px 10px;
        background: #f80;
        color: #fff;
        font-family: monospace;
        border-radius: 20px;
      `}>
      {tag}
    </div>
  );
};

export const TagList: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
      `}>
      {tags.map((tag) => (
        <Tag tag={tag} />
      ))}
    </div>
  );
};

export const Card: React.FC<{ data: RSSTask }> = ({ data }) => {
  return (
    <div
      className={css`
        max-width: 300px;
        width: 100%;
        aspect-ratio: 2 / 3;
        background: #08f;
        border-radius: 5px;
        transition: all 200ms;
      `}>
      <Title text={data.name} url={data.descriptionUrl} />
      {data.description && <div>{data.description}</div>}
      {data.tags.length > 0 && <TagList tags={data.tags} />}
    </div>
  );
};
