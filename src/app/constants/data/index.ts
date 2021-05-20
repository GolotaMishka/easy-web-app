import { HtmlCssTopics } from './html-css';
import { gitTopics } from './git-data';
import { jsTopics } from './js-data';

export * from './git-data';
export * from './html-css';
export * from './js-data';

export const fullTopics = { ...HtmlCssTopics, ...gitTopics, ...jsTopics };
