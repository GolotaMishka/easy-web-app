import React, { ReactElement } from 'react';
import SignIn from 'app/components/public/sign-in';
import { validationSchemas, actions } from 'data';
import { connect } from 'react-redux';
import { Formik, FormikValues, FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';
import { appBasePath } from 'app/constants/url';

const mapDispatchToProps = {
  signIn: actions.auth.signIn,
};

export interface SignInProps {
  signIn: (values: FormikValues, formikActions: FormikHelpers<FormikValues>) => boolean;
}

const SignInContainer = ({ signIn }: SignInProps): ReactElement => {
  const history = useHistory();

  const onSubmit = async (values, formikActions) => {
    if (await signIn(values, formikActions)) {
      history.push(appBasePath);
    }
  };
  return (
    <Formik validationSchema={validationSchemas.SignIn} initialValues={{}} onSubmit={onSubmit}>
      {(formikProps) => <SignIn {...formikProps} />}
    </Formik>
  );
};

export default connect<SignInProps>(null, mapDispatchToProps)(SignInContainer);
