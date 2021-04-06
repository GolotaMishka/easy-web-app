import React, { ReactElement } from 'react';
import s from './styles.scss';

export const gitTopics = {
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
