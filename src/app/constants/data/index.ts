import { HtmlCssTopics } from './html-css';
import { gitTopics } from './git-data';

export * from './git-data';
export * from './html-css';

export const fullTopics = { ...HtmlCssTopics, ...gitTopics };
