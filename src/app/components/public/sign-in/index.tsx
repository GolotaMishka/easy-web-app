import React from 'react';
import { PrimaryButton, TextInput, Loader, Icon, Text, SecondaryButtonLink } from 'ui';
import { Form, FormikErrors, FormikValues } from 'formik';
import { Field } from 'app/utils';
import Logo from 'public/logo.svg';
import { signUpPath, appBasePath } from 'app/constants/url';
import { Link } from 'react-router-dom';
import s from './styles.scss';

interface SignInProps {
  isSubmitting: boolean;
  isValid: boolean;
  errors: FormikErrors<FormikValues>;
}

const SignIn: React.FC<SignInProps> = ({ isSubmitting, isValid, errors }: SignInProps) => {
  return (
    <div className={s.page}>
      <div className={s.pageLeft}>
        <Link to={appBasePath}>
          <img className={s.pageLeftLogo} src={Logo} alt="Logo easy web" />
        </Link>
        <div className={s.pageLeftContent}>
          <Text
            className={s.pageLeftContentTitle}
            size={Text.sizes.xxxxl}
            weight={Text.weights.semiBold}
            color={Text.colors.light}
          >
            Welcome Back!
          </Text>
          <div className={s.pageLeftContentDescription}>
            <Text size={Text.sizes.xl} color={Text.colors.light}>
              Still not with us? Create an <br /> account and start to learn{' '}
            </Text>
          </div>
          <div className={s.pageLeftContentButton}>
            <SecondaryButtonLink to={signUpPath}>Sign up</SecondaryButtonLink>
          </div>
        </div>
      </div>
      <div className={s.pageRight}>
        {!isSubmitting ? (
          <Form className={s.pageRightForm}>
            <Text className={s.pageRightFormTitle} size={Text.sizes.xxxxl} weight={Text.weights.semiBold}>
              Sign in
            </Text>
            <Field
              className={s.pageRightFormField}
              component={TextInput}
              id="email"
              name="email"
              placeholder="Email"
              iconBefore={Icon.icons.mail}
            />
            <Field
              className={s.pageRightFormField}
              component={TextInput}
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              iconBefore={Icon.icons.lock}
            />
            {errors.message && (
              <Text className={s.pageRightFormError} size={Text.sizes.s} color={Text.colors.error}>
                {errors.message}
              </Text>
            )}
            <div className={s.pageRightFormButton}>
              <PrimaryButton type="submit" disabled={!isValid}>
                Sign in
              </PrimaryButton>
            </div>
          </Form>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
export default SignIn;
