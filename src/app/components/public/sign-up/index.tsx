import React from 'react';
import { PrimaryButton, TextInput, Loader, Icon, Text, SecondaryButtonLink } from 'ui';
import { Form, FormikErrors, FormikValues } from 'formik';
import { Field } from 'app/utils';
import Logo from 'public/logo.svg';
import { signInPath } from 'app/constants/url';
import s from './styles.scss';

interface SignUpProps {
  isSubmitting: boolean;
  isValid: boolean;
  errors: FormikErrors<FormikValues>;
}

const SignUp: React.FC<SignUpProps> = ({ isSubmitting, isValid, errors }: SignUpProps) => {
  return (
    <div className={s.page}>
      <div className={s.pageLeft}>
        <img className={s.pageLeftLogo} src={Logo} alt="Logo easy web" />
        <div className={s.pageLeftContent}>
          <Text
            className={s.pageLeftContentTitle}
            size={Text.sizes.xxxxl}
            weight={Text.weights.semiBold}
            color={Text.colors.white}
          >
            Welcome!
          </Text>
          <div className={s.pageLeftContentDescription}>
            <Text size={Text.sizes.xl} color={Text.colors.white}>
              To keep connected with us please <br /> login with your personal info{' '}
            </Text>
          </div>
          <div className={s.pageLeftContentButton}>
            <SecondaryButtonLink to={signInPath}>Sign in</SecondaryButtonLink>
          </div>
        </div>
      </div>
      <div className={s.pageRight}>
        {!isSubmitting ? (
          <Form className={s.pageRightForm}>
            <Text className={s.pageRightFormTitle} size={Text.sizes.xxxxl} weight={Text.weights.semiBold}>
              Create an account
            </Text>
            <div className={s.pageRightFormName}>
              <Field
                className={s.pageRightFormNameInput}
                component={TextInput}
                id="firstName"
                name="firstName"
                placeholder="First name"
                iconBefore={Icon.icons.user}
              />
              <Field
                className={s.pageRightFormNameInput}
                component={TextInput}
                id="lastName"
                name="lastName"
                placeholder="Last name"
                iconBefore={Icon.icons.user}
              />
            </div>
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
            <Field
              className={s.pageRightFormField}
              component={TextInput}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
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
                Sign up
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
export default SignUp;
