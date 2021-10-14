import React, { ReactElement } from 'react';
import s from './styles.scss';

export const reactTopics = {
  componentsState: {
    title: 'State',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://www.w3schools.com/react/react_state.asp" target="_blank" rel="noreferrer">
              State
            </a>
          </li>
          <li>
            React State - это просто!
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/qqeKBHnRR6A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/6hAUJMIkMes"
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
  componentsProps: {
    title: 'Components, props',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://reactjs.org/docs/components-and-props.html" target="_blank" rel="noreferrer">
              Components, props
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/Yo-jXEBN20k"
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
