import GitTab from './git-tab';
import HTMLCssTab from './html-css-tab';

export const KnowledgeTabs = [
  {
    title: 'HTML + CSS',
    id: 'HTMLCssTab',
    component: HTMLCssTab,
  },
  {
    title: 'Git',
    id: 'GitTab',
    component: GitTab,
  },
];
