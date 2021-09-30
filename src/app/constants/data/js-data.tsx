import React, { ReactElement } from 'react';
import s from './styles.scss';

export const jsTopics = {
  promise: {
    title: 'Promise',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise"
              target="_blank"
              rel="noreferrer"
            >
              Promise
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/sET3F5HQlTI"
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
  eventLoop: {
    title: 'Event loop',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="http://latentflip.com/loupe" target="_blank" rel="noreferrer">
              Try it out
            </a>
          </li>
          <li>
            What the heck is the event loop anyway?
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/8aGhZQkoFbQ"
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
              src="https://www.youtube.com/embed/FDdE1ttq1FE"
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
  classes: {
    title: 'Classes',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes"
              target="_blank"
              rel="noreferrer"
            >
              Classes
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/fNINYGolfuc"
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
  oop: {
    title: 'OOP',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://tproger.ru/experts/oop-in-simple-words/" target="_blank" rel="noreferrer">
              OOP in simple words
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/Mw8-n1YWYeE"
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
  webpack: {
    title: 'Webpack',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://webpack.js.org/guides/getting-started" target="_blank" rel="noreferrer">
              Getting started
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/KJl9B8MXArg"
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
  npm: {
    title: 'npm',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://www.hostinger.ru/rukovodstva/chto-takoe-npm" target="_blank" rel="noreferrer">
              npm
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/wDxOnBSB13Q"
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
  moduleJs: {
    title: 'Modules',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://habr.com/ru/company/domclick/blog/532084/" target="_blank" rel="noreferrer">
              Modules in JS (read first half)
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/myP3yO2rbR0"
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
  flow: {
    title: 'Development flow',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/574UHs23GOE"
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
  fetchAPI: {
    title: 'Fetch, API call',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/fetch" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Fetch
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" target="_blank" rel="noreferrer">
              Http methods
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/ru/docs/Web/HTTP/Status" target="_blank" rel="noreferrer">
              Http status
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/2bLfp4okCpo"
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
  context: {
    title: 'This',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this"
              target="_blank"
              rel="noreferrer"
            >
              MDN - This
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/D_hMwbTtlnc"
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
  tryCatch: {
    title: 'try...catch',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/exception" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - try...catch
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  closure: {
    title: 'Closure',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/closure" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Closure
            </a>
          </li>

          <li>
            Short explanation
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/RPuFz93Gvpk"
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
              src="https://www.youtube.com/embed/xIC-KVbys9Y"
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
  intervals: {
    title: 'setTimeout/setInterval',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/settimeout-setinterval" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - setTimeout, setInterval
            </a>
          </li>

          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/HDv2nDpFRig"
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
  date: {
    title: 'Date',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/datetime" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Date
            </a>
          </li>

          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/O8bPkXGhg8w"
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
            <a href="https://learn.javascript.ru/forms-controls" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Forms
            </a>
          </li>

          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/aIpQ4JLbLqE"
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
  events: {
    title: 'Events',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/introduction-browser-events" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Events
            </a>
          </li>

          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/saZ1E_JtWPI"
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
  dom: {
    title: 'DOM',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/dom-nodes" target="_blank" rel="noreferrer">
              DOM tree
            </a>
          </li>
          <li>
            <a href="https://learn.javascript.ru/basic-dom-node-properties" target="_blank" rel="noreferrer">
              Basic DOM node properties
            </a>
          </li>
          <li>
            <a href="https://www.javascripttutorial.net/javascript-dom/" target="_blank" rel="noreferrer">
              Tutorial
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/P-_0QIvpa58"
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
  pageRendering: {
    title: 'Page rendering',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://webdevblog.ru/kak-brauzer-renderit-veb-stranicu/" target="_blank" rel="noreferrer">
              Article
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/7pjOttZGp0c"
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
  functionsDeeper: {
    title: 'Function (arguments, recursion)',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/rest-parameters-spread-operator" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Arguments
            </a>
          </li>
          <li>
            <a
              href="https://senior.ua/articles/rekursiya-dlya-nachinayuschih-v-javascript-s-8-primerami"
              target="_blank"
              rel="noreferrer"
            >
              Recursion
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/B3TTu1hXbFc"
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
  regularExpressions: {
    title: 'Regular expressions',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/regexp-introduction" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Regular expressions
            </a>
          </li>
          <li>
            <a href="https://professorweb.ru/my/javascript/js_theory/level1/1_11.php" target="_blank" rel="noreferrer">
              Deeper understanding
            </a>
          </li>
          <li>
            <a href="https://regex101.com/" target="_blank" rel="noreferrer">
              Practice online
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/qPRrlbVzuCk"
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
  practice1: {
    title: 'Practice',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            Practice (short video)
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/4Ol0_s5GcwU"
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
  sortReduce: {
    title: 'Sort, reduce',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a
              href="https://medium.com/@stasonmars/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-reduce-%D0%B2-javascript-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%B5%D0%B3%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%8F%D1%82%D1%8C-%D0%B8-%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B2%D0%B5%D1%89%D0%B8-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D1%81-%D0%BD%D0%B8%D0%BC-b650c397bee6"
              target="_blank"
              rel="noreferrer"
            >
              Reduce
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@stasonmars/%D0%BA%D0%B0%D0%BA-%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D1%83-%D0%B2-javascript-%D0%BF%D1%80%D0%B8-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8-sort-d492c97ccfdf"
              target="_blank"
              rel="noreferrer"
            >
              Sort
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/7tw8gJNBZtk"
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
  arrayIteration: {
    title: 'Array iteration',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/array-iteration" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Array iteration
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/sdv2BFimScU"
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
  arrayMethods: {
    title: 'Array methods',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/array-methods" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Array methods
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/qJm9YmyT80I"
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
  string: {
    title: 'String',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/string" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - String
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/FNz0Y03bEyQ"
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
  numbers: {
    title: 'Number',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/number" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Number
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/UmwnQR8xiXo"
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
  objectsMethods: {
    title: 'Methods',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/object-methods" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Object methods
            </a>
          </li>
          <li>
            <a href="https://learn.javascript.ru/primitives-methods" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Primitives methods
            </a>
          </li>
          <li>
            Object methods
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/3d4AgrppqDc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </li>
          <li>
            Methods(examples)
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/G3dQ8ub6VZ4"
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
  copyObjects: {
    title: 'Object copy, methods',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/object-copy" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Object copy
            </a>
          </li>
          <li>
            <a href="https://learn.javascript.ru/keys-values-entries" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Object methods
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/v8rAxiHLetM"
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
  objectTopic: {
    title: 'Object',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/object" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Object
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/VLup-ocVEC4"
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
  switchCase: {
    title: 'Switch',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/switch" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Switch
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/8koHXY-dhcE"
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
  functions: {
    title: 'Functions',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/function-basics" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Functions
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/mC0m61JUiDw"
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
  loops: {
    title: 'Loops',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/while-for" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Loops
            </a>
          </li>
          <li>
            Short video
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/QjDzp-yM_To"
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
              src="https://www.youtube.com/embed/6ytV8Mg2Sd8"
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
  arrays: {
    title: 'Arrays (basic)',
    content: (): ReactElement => (
      <div className={s.content}>
        <ul>
          <li>
            <a href="https://learn.javascript.ru/array" target="_blank" rel="noreferrer">
              LearnJavaScript.ru - Array
            </a>
          </li>
          <li>
            <a href="https://www.cs.usfca.edu/~galles/visualization/StackArray.html" target="_blank" rel="noreferrer">
              Array visualization
            </a>
          </li>
          <li>
            Lesson
            <iframe
              style={{ width: '100%', marginTop: '15px' }}
              height="440"
              src="https://www.youtube.com/embed/7KoL_7sjg84"
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
