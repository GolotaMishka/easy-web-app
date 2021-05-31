import React, { ReactElement } from 'react';
import s from './styles.scss';

export const jsTopics = {
  if_else: {
    title: 'If,else',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/ifelse" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - If,else
            </a>
          </li>
          <li>
            <a href="https://learn.javascript.ru/logical-operators" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Logical operators
            </a>
          </li>
          <li>
            Logical operators(short video)
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/_0OzJN1saf0"
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
              src="https://www.youtube.com/embed/-LIAJizb9AA"
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
  types: {
    title: 'Types',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/types" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Types
            </a>
          </li>
          <li>
            <a href="https://puzzleweb.ru/javascript/5_types.php" target="_blank" rel="noreferrer">
              puzzleweb.ru - Types
            </a>
          </li>
          <li>
            <a href="https://learn.javascript.ru/operators" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Operators
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/KwcSqsNChF0"
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
  variables: {
    title: 'Variables',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/variables" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Variables
            </a>
          </li>
          <li>
            <a href="https://schoolsw3.com/js/js_variables.php" target="_blank" rel="noreferrer">
              Schoolsw3 - Variables
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/3U_eeskwgII"
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
  practice: {
    title: 'Practice',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            JS calculator
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/BYUKpMjE7Hs"
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
