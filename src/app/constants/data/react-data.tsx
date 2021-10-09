import React, { ReactElement } from 'react';
import s from './styles.scss';

export const reactTopics = {
  jsxTopic: {
    title: 'JSX',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank" rel="noreferrer">
              JSX
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/5KdepLTSQec"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </li>
        </ul>
      </div>
    ),
  },
  createReactApp: {
    title: 'create-react-app',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank" rel="noreferrer">
              create-react-app
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/oZydXNsX-Ew"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </li>
        </ul>
      </div>
    ),
  },
};
