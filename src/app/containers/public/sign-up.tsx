import React from 'react';
import { Formik } from 'formik';
import SignUp from 'app/components/public/sign-up';
import { validationSchemas } from 'data';
// export interface SignInContainerProps {
//   close: () => void;
//   create: (clientId: string, values: FormikValues, formikActions: FormikHelpers<FormikValues>) => boolean;
//   clientId: string;
// }

const SignUpContainer: React.FC = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Formik validationSchema={validationSchemas.SignUp} initialValues={{}} onSubmit={onSubmit}>
      {(formikProps) => <SignUp {...formikProps} />}
    </Formik>
  );
};

export default SignUpContainer;
