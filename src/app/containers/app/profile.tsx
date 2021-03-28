import React, { ReactElement } from 'react';
import { Formik, FormikValues, FormikHelpers } from 'formik';
import Profile from 'app/components/app/profile';
import { validationSchemas, selectors, actions } from 'data';
import { connect } from 'react-redux';
import { Loader } from 'ui';

export interface PublicRouteProps {
  isLoggedIn: boolean;
  isProfileLoaded: boolean;
  isProfileLoading: boolean;
  isProfileUpdating: boolean;
  profile: any;
  fetchProfile: () => boolean;
  clear: () => void;
  updateProfile: (values: FormikValues, formikActions: FormikHelpers<FormikValues>) => boolean;
}

const mapStateToProps = (state) => ({
  profile: selectors.users.getItem(state),
  isProfileLoaded: selectors.users.getEntityLoaded(state),
  isProfileLoading: selectors.users.getEntityLoading(state),
  isProfileUpdating: selectors.users.getEntityUpdating(state),
});

const mapDispatchToProps = {
  fetchProfile: actions.users.fetchProfile,
  updateProfile: actions.users.updateProfile,
  clear: actions.users.clear,
};

const ProfileContainer = ({
  fetchProfile,
  updateProfile,
  profile,
  isProfileLoading,
  isProfileLoaded,
  isProfileUpdating,
}: PublicRouteProps): ReactElement => {
  const initialValues = React.useMemo(() => ({ ...profile?.toJS() }), [profile]);

  React.useEffect(() => {
    if (!isProfileLoaded && !isProfileLoading) {
      fetchProfile();
    }
  }, [isProfileLoaded, isProfileLoading]);
  const onSubmit = async (values, formikActions) => {
    updateProfile(values, formikActions);
  };

  if (!isProfileLoaded || isProfileLoading || isProfileUpdating) return <Loader />;
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchemas.Profile}>
      {(formikProps) => <Profile profile={profile} {...formikProps} />}
    </Formik>
  );
};

export default connect<any>(mapStateToProps, mapDispatchToProps)(ProfileContainer);
