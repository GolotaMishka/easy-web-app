import React from 'react';
import { PrimaryButtonLink, Text } from 'ui';
import { signInPath, signUpPath } from 'app/constants/url';
import s from './styles.scss';

const Home = () => {
  console.log(Text, ' Text.colors.white');
  return (
    <div className={s.page}>
      <PrimaryButtonLink to={signUpPath}>Sign up</PrimaryButtonLink>
      <PrimaryButtonLink to={signInPath}>Sign in</PrimaryButtonLink>
      <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
        <Text color={Text.colors.light}>aefsgrtbg</Text>
      </div>
    </div>
  );
};
export default Home;
