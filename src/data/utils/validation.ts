import * as Yup from 'yup';

export const SignIn = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').max(16).required('Required'),
});

export const SignUp = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short')
    .max(16, 'Too Long')
    .matches(/^(?=.*[A-Z])(?=.*\d)[!@#$%^&*a-zA-Z\d]{8,}$/, 'Min. 8 char, at least 1 capital letter and 1 digit')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .min(8, 'Too Short')
    .max(16, 'Too Long')
    .required('Required'),
});
