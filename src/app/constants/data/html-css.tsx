import React, { ReactElement } from 'react';
import s from './styles.scss';

export const HtmlCssTopics = {
  svg: {
    title: 'SVG basics',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://www.digitalocean.com/community/tutorials/svg-svg-viewbox" target="_blank" rel="noreferrer">
              Understand the SVG Viewbox
            </a>
          </li>
          <li>
            Recorded lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/DJnTkwhWWYk"
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
  forms: {
    title: 'Forms',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://www.tutorialrepublic.com/html-tutorial/html-forms.php" target="_blank" rel="noreferrer">
              HTML Forms
            </a>
          </li>
          <li>
            Recorded lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/QoZvnYEd6wY"
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
  reviews: {
    title: 'Reviews',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            Review 22/04/2021
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/ZdanWZiBh6Y"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </li>
          <li>
            Review 20/04/2021
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/KkiKNHwToc4"
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

  boxSizing: {
    title: 'box-sizing',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing" target="_blank" rel="noreferrer">
              Mozilla article
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/design-code-repository/cutup-7-box-sizing-61ed487b65f1"
              target="_blank"
              rel="noreferrer"
            >
              Medium article
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  inlineBlock: {
    title: 'The display Property',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://www.w3schools.com/css/css_inline-block.asp" target="_blank" rel="noreferrer">
              Article
            </a>
          </li>
          <li>
            <a
              href="https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1"
              target="_blank"
              rel="noreferrer"
            >
              Try page
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  preprocessors: {
    title: 'Sass',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://sass-scss.ru/guide/" target="_blank" rel="noreferrer">
              Sass Basics
            </a>
          </li>

          <li>
            Recorded lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/UlEKQXylZnw"
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
  responsiveDesign: {
    title: 'Responsive design',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://kinsta.com/blog/responsive-web-design/" target="_blank" rel="noreferrer">
              Responsive web design
            </a>
          </li>

          <li>
            Recorded lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/o2uOqyKjU4M"
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
