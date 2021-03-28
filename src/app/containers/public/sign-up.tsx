import React, { ReactElement } from 'react';
import { Formik, FormikValues, FormikHelpers } from 'formik';
import SignUp from 'app/components/public/sign-up';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { appBasePath } from 'app/constants/url';
import { validationSchemas, actions } from 'data';

const mapDispatchToProps = {
  signUp: actions.auth.signUp,
};

export interface SignUpProps {
  signUp: (values: FormikValues, formikActions: FormikHelpers<FormikValues>) => boolean;
}

const SignUpContainer = ({ signUp }: SignUpProps): ReactElement => {
  const history = useHistory();

  const onSubmit = async (values, formikActions) => {
    if (await signUp(values, formikActions)) {
      history.push(appBasePath);
    }
  };
  return (
    <Formik validationSchema={validationSchemas.SignUp} initialValues={{}} onSubmit={onSubmit}>
      {(formikProps) => <SignUp {...formikProps} />}
    </Formik>
  );
};

export default connect<SignUpProps>(null, mapDispatchToProps)(SignUpContainer);
