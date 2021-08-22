import React from 'react';
import DOMPurify from 'dompurify';
import { Maybe } from 'shared/maybe';
import classes from './description.module.pcss';

type NoDOM = { RETURN_DOM_FRAGMENT?: false; RETURN_DOM?: false };

const PURIFY_CONFIG: DOMPurify.Config & NoDOM = {
  ALLOWED_TAGS: ['br', 'b', 'i'],
};

interface DescriptionProps {
  text: Maybe<string>;
}

export const Description: React.FC<DescriptionProps> = ({ text }) => {
  if (!text) return <></>;
  return (
    <div className={classes.description}>
      <p
        className={classes.text}
        /* eslint-disable-next-line react/no-danger */
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(text, PURIFY_CONFIG),
        }}
      />
    </div>
  );
};
