import React, { ReactElement } from 'react';
import s from './styles.scss';

export const webTopics = {
  webResources: {
    title: 'Basics',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=3J4sYivzBRs&list=PLKhF725nEal06dYfL7DgRyr1WXAqJPwAS"
              target="_blank"
              rel="noreferrer"
            >
              Web basics. Video tutorial
            </a>
          </li>
          <li>
            <a
              href="https://vc.ru/selectel/76371-chto-proishodit-kogda-polzovatel-nabiraet-v-brauzere-adres-sayta"
              target="_blank"
              rel="noreferrer"
            >
              What Happens When You Type in a URL
            </a>
          </li>
        </ul>
      </div>
    ),
  },
};
