import React from 'react';
import { PrimaryButtonLink } from 'ui';
import { signInPath, signUpPath } from 'app/constants/url';
import s from './styles.scss';

const Home = () => {
  return (
    <div className={s.page}>
      <PrimaryButtonLink to={signUpPath}>Sign up</PrimaryButtonLink>
      <PrimaryButtonLink to={signInPath}>Sign in</PrimaryButtonLink>
    </div>
  );
};
export default Home;
