import React from 'react';
import { PrimaryButtonLink } from 'ui';
import { signInPath, signUpPath, appBasePath } from 'app/constants/url';
import s from './styles.scss';

const Home = () => {
  return (
    <div className={s.page}>
      <div className={s.pageButtons}>
        <PrimaryButtonLink to={signUpPath}>Sign up</PrimaryButtonLink>
        <PrimaryButtonLink to={signInPath}>Sign in</PrimaryButtonLink>
        <PrimaryButtonLink to={appBasePath}>App</PrimaryButtonLink>
      </div>
    </div>
  );
};
export default Home;
