import React, { ReactElement } from 'react';
import s from './styles.scss';

export const jsTopics = {
  resources: {
    title: 'JavaScript resources',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://metanit.com/web/javascript" target="_blank" rel="noreferrer">
              Metanit tutorial
            </a>
          </li>
          <li>
            <a href="https://learn.javascript.ru" target="_blank" rel="noreferrer">
              Modern JavaScript Tutorial
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1X2tQ-Lr2hWNzX4SbA17AW0NDF6gM8KXW/view"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript for children (book)
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1UADi8UrjsMMY0eFNatxpiS_F5ya6i99e/view"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript. The Definitive Guide (book)
            </a>
          </li>
        </ul>
      </div>
    ),
  },
};
