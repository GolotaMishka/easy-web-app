import React, { ReactElement } from 'react';
import s from './styles.scss';

export const HtmlCssTopics = {
  pseudoClasses: {
    title: 'Pseudo-classes',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noreferrer">
              General article from mozilla
            </a>
          </li>
          <li>
            <a href="https://webref.ru/course/css-advanced/pseudo-classes" target="_blank" rel="noreferrer">
              Simple article in Russian
            </a>
          </li>
          <li>
            En example with hover effects
            <iframe
              height="440"
              style={{ width: '100%', marginTop: '15px' }}
              scrolling="no"
              title="CSS Buttons hover effects"
              src="https://codepen.io/Mishka_Golota/embed/MWJvvKW?height=440&theme-id=dark&default-tab=css,result"
              frameBorder="no"
              loading="lazy"
              // allowtransparency
              allowFullScreen
            >
              See the Pen <a href="https://codepen.io/Mishka_Golota/pen/MWJvvKW">CSS Buttons hover effects</a> by Mishka
              Golota (<a href="https://codepen.io/Mishka_Golota">@Mishka_Golota</a>) on{' '}
              <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </li>
        </ul>
      </div>
    ),
  },
};
