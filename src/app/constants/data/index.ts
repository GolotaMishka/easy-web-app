import { HtmlCssTopics } from './html-css';
import { gitTopics } from './git-data';
import { jsTopics } from './js-data';
import { webTopics } from './web-data';
import { reactTopics } from './react-data';

export * from './git-data';
export * from './html-css';
export * from './js-data';
export * from './web-data';
export * from './react-data';

export const fullTopics = { ...HtmlCssTopics, ...gitTopics, ...jsTopics, ...reactTopics, ...webTopics };
