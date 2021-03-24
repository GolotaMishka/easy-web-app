import React from 'react';
import { Formik } from 'formik';
import SignIn from 'app/components/public/sign-in';
import { validationSchemas } from 'data';
// export interface SignInContainerProps {
//   close: () => void;
//   create: (clientId: string, values: FormikValues, formikActions: FormikHelpers<FormikValues>) => boolean;
//   clientId: string;
// }

const SignInContainer: React.FC = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Formik validationSchema={validationSchemas.SignIn} initialValues={{}} onSubmit={onSubmit}>
      {(formikProps) => <SignIn {...formikProps} />}
    </Formik>
  );
};

export default SignInContainer;
