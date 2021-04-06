import React, { ReactElement } from 'react';
import { PrimaryButton, TextInput, Loader, Icon, Text, DatePicker } from 'ui';
import { Form, FormikErrors, FormikValues } from 'formik';
import { Field } from 'app/utils';
import s from './styles.scss';

interface ProfileProps {
  isSubmitting: boolean;
  isValid: boolean;
  errors: FormikErrors<FormikValues>;
  profile: any;
}

const Profile = ({ isSubmitting, isValid, errors, profile }: ProfileProps): ReactElement => {
  return (
    <div className={s.page}>
      {!isSubmitting ? (
        <Form className={s.pageForm}>
          <div className={s.pageFormHeader}>
            <div className={s.pageFormHeaderAvatar}>
              <Icon icon={Icon.icons.userCircle} className={s.pageFormHeaderAvatarIcon} />
            </div>
            <div className={s.pageFormHeaderUser}>
              <Text className={s.pageFormHeaderUserName} size={Text.sizes.l} weight={Text.weights.semiBold}>
                {`${profile.get('firstName')} ${profile.get('lastName')}`}
              </Text>
              <div className={s.pageFormHeaderUserEmail}>
                <Text size={Text.sizes.m} color={Text.colors.placeholder} weight={Text.weights.semiBold}>
                  {profile.get('email')}
                </Text>
              </div>
            </div>
          </div>
          <div className={s.pageFormTitle}>
            <Text size={Text.sizes.l} weight={Text.weights.semiBold}>
              Personal info
            </Text>
          </div>
          <div className={s.pageFormRow}>
            <Field
              className={s.pageFormRowField}
              component={TextInput}
              id="firstName"
              name="firstName"
              placeholder="First name"
            />
            <Field
              className={s.pageFormRowField}
              component={TextInput}
              id="lastName"
              name="lastName"
              placeholder="Last name"
            />
          </div>
          <div className={s.pageFormRow}>
            <div className={s.pageFormRowField}>
              <Field component={DatePicker} id="birthDate" name="birthDate" placeholder="Birthday" />
            </div>

            <Field
              className={s.pageFormRowField}
              component={TextInput}
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone number"
            />
          </div>

          <div className={s.pageFormTitle}>
            <Text size={Text.sizes.l} weight={Text.weights.semiBold}>
              Profiles in social networks
            </Text>
          </div>
          <div className={s.pageFormRow}>
            <Field
              className={s.pageFormRowFieldSocial}
              component={TextInput}
              id="urlToLinkedIn"
              name="urlToLinkedIn"
              placeholder="LinkedIn"
            />
          </div>
          <div className={s.pageFormRow}>
            <Field
              className={s.pageFormRowFieldSocial}
              component={TextInput}
              id="djinni"
              name="djinni"
              placeholder="Djinni"
            />
          </div>
          <div className={s.pageFormRow}>
            <Field
              className={s.pageFormRowFieldSocial}
              component={TextInput}
              id="behance"
              name="behance"
              placeholder="Behance"
            />
          </div>

          {errors.message && (
            <Text className={s.pageFormError} size={Text.sizes.s} color={Text.colors.error}>
              {errors.message}
            </Text>
          )}
          <div className={s.pageFormButton}>
            <PrimaryButton type="submit" disabled={!isValid}>
              Save
            </PrimaryButton>
          </div>
        </Form>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Profile;
