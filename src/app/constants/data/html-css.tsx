import React, { ReactElement } from 'react';
import s from './styles.scss';

export const HtmlCssTopics = {
  selectors: {
    title: 'Selectors',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank" rel="noreferrer">
              Cheatsheet
            </a>
          </li>
          <li>
            <a href="http://htmlbook.ru/index.php/css/selector" target="_blank" rel="noreferrer">
              Article
            </a>
          </li>
          <li>
            <a href="https://frontend30.com/css-selectors-cheatsheet" target="_blank" rel="noreferrer">
              Exercise
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  animationTransformation: {
    title: 'Animation, transformation',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/uk/docs/Web/CSS/CSS_Animations/Using_CSS_animations"
              target="_blank"
              rel="noreferrer"
            >
              CSS Animations
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/the-dirty-coder/how-to-use-the-css-transform-property-b3b31f31316f"
              target="_blank"
              rel="noreferrer"
            >
              CSS transform property
            </a>
          </li>
          <li>
            Transform example
            <iframe
              height="440"
              style={{ width: '100%', marginTop: '15px' }}
              scrolling="no"
              title="CSS Transform Example"
              src="https://codepen.io/konamax123/embed/aGZGVG?height=265&theme-id=dark&default-tab=css,result"
              frameBorder="no"
              loading="lazy"
              // allowtransparency="true"
              allowFullScreen
            >
              See the Pen <a href="https://codepen.io/konamax123/pen/aGZGVG">CSS Transform Example</a> by Brittan
              McGinnis (<a href="https://codepen.io/konamax123">@konamax123</a>) on{' '}
              <a href="https://codepen.io">CodePen</a>.
            </iframe>
          </li>

          <li>
            Recorded lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/AmbpwAJ0syk"
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
