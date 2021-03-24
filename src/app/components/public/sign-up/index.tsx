import React from 'react';
import { PrimaryButton, TextInput, Loader, Icon, Text } from 'ui';
import { Form, FormikErrors, FormikValues } from 'formik';
import { Field } from 'app/utils';
import s from './styles.scss';

interface SignUpProps {
  isSubmitting: boolean;
  isValid: boolean;
  errors: FormikErrors<FormikValues>;
}

const SignUp: React.FC<SignUpProps> = ({ isSubmitting, isValid, errors }: SignUpProps) => {
  return (
    <div className={s.page}>
      <div className={s.pageLeft} />
      <div className={s.pageRight}>
        {!isSubmitting ? (
          <Form className={s.pageRightForm}>
            <Field
              className={s.pageRightFormField}
              component={TextInput}
              id="email"
              name="email"
              placeholder="Email"
              title="Email"
            />
            <Field
              className={s.pageRightFormField}
              component={TextInput}
              id="password"
              name="password"
              placeholder="Password"
              title="Password"
              type="password"
            />
            <Field
              className={s.pageRightFormField}
              component={TextInput}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              title="Confirm password"
              type="password"
            />
            {errors.message && (
              <Text className={s.pageRightFormError} size={Text.sizes.s} color={Text.colors.error}>
                {errors.message}
              </Text>
            )}

            <PrimaryButton className={s.pageRightFormButton} icon={Icon.icons.check} type="submit" disabled={!isValid}>
              Sign Up
            </PrimaryButton>
          </Form>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
export default SignUp;
