import { Maybe } from './maybe';
import { TITLE } from 'env';

const TITLE_SPLITTER = ' | ';

export const updateTitle = (title?: Maybe<string>) => {
  document.title = title ? `${TITLE}${TITLE_SPLITTER}${title}` : TITLE;
};
