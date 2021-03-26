import React from 'react';
import { Formik } from 'formik';
import Profile from 'app/components/app/profile';
import { validationSchemas } from 'data';
// export interface SignInContainerProps {
//   close: () => void;
//   create: (clientId: string, values: FormikValues, formikActions: FormikHelpers<FormikValues>) => boolean;
//   clientId: string;
// }

const ProfileContainer: React.FC = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Formik validationSchema={validationSchemas.SignIn} initialValues={{}} onSubmit={onSubmit}>
      {(formikProps) => <Profile {...formikProps} />}
    </Formik>
  );
};

export default ProfileContainer;
