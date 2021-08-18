import { Maybe } from './maybe';

const TITLE = 'React Routing';
const TITLE_SPLITTER = ' | ';

export const updateTitle = (title?: Maybe<string>) => {
  document.title = title ? `${TITLE}${TITLE_SPLITTER}${title}` : TITLE;
};
