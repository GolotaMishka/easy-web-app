import GitTab from './git-tab';
import HTMLCssTab from './html-css-tab';
import JavaScriptTab from './js-tab';
import WebTab from './web-tab';
import ReactTab from './react-tab';

export const KnowledgeTabs = [
  {
    title: 'HTML + CSS',
    id: 'HTMLCssTab',
    component: HTMLCssTab,
  },
  {
    title: 'JavaScript',
    id: 'JavaScriptTab',
    component: JavaScriptTab,
  },
  {
    title: 'React',
    id: 'ReactTab',
    component: ReactTab,
  },
  {
    title: 'Git',
    id: 'GitTab',
    component: GitTab,
  },
  {
    title: 'Web',
    id: 'WebTab',
    component: WebTab,
  },
];
