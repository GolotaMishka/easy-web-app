import React, { ReactElement } from 'react';
import s from './styles.scss';

export const gitTopics = {
  gitFlowWithReact: {
    title: 'Basic git flow for react projects',
    content: (): ReactElement => (
      <div className={s.content}>
        <a
          href="https://docs.google.com/document/d/1GxGJt9yVENWTF3SnOucZaV7dYMp5YOFkVTrgL8pYeWA/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Git flow with React
        </a>
      </div>
    ),
  },
  basicGitFlow: {
    title: 'Basic git flow for your projects',
    content: (): ReactElement => (
      <div className={s.content}>
        <a
          href="https://docs.google.com/document/d/146fZrPBqw_ORfp68dqQowVdCT6voou0ZfTxCMc0XeWg/edit"
          target="_blank"
          rel="noreferrer"
        >
          Simple guide
        </a>
      </div>
    ),
  },
};
