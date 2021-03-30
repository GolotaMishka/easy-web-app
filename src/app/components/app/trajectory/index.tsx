import React, { ReactElement } from 'react';
import { shortDate, Field } from 'app/utils';
import { Dropdown, Text, TextInput, Icon, SecondaryButton } from 'ui';
import { Form, FormikValues } from 'formik';
import cx from 'classnames';
import s from './styles.scss';

interface TrajectoryProps {
  workDays: any;
  updateSeveralTasks: (values: FormikValues) => boolean;
  values: any;
}

enum TaskStatus {
  pending = 'pending',
  progress = 'progress',
  success = 'success',
  failed = 'failed',
}
const createMarkup = (content) => {
  return { __html: content };
};

const defineTaskStatus = (status) => {
  switch (status) {
    case TaskStatus.success:
      return s.pageDayTaskDescriptionAnswerStatusSuccess;
    case TaskStatus.progress:
      return s.pageDayTaskDescriptionAnswerStatusProgress;
    case TaskStatus.failed:
      return s.pageDayTaskDescriptionAnswerStatusFailed;
    default:
      return s.pageDayTaskDescriptionAnswerStatusPending;
  }
};

const Trajectory = ({ workDays, values, updateSeveralTasks }: TrajectoryProps): ReactElement => {
  return (
    <Form className={s.page}>
      {workDays.map((workDay, workDayIndex) => (
        <Dropdown
          key={workDay.get('id')}
          header={
            <div className={s.pageHeader}>
              <div className={s.pageHeaderTitles}>
                <Icon icon={Icon.icons.checked} className={cx(s.pageHeaderTitlesIcon)} />

                <Text
                  className={s.boxHeaderLeftTitle}
                  size={Text.sizes.xl}
                  weight={Text.weights.semiBold}
                  color={Text.colors.dark}
                >
                  Lets check your knowledge !
                </Text>
              </div>
              <Text
                className={s.boxHeaderLeftTitle}
                size={Text.sizes.xl}
                weight={Text.weights.semiBold}
                color={Text.colors.dark}
              >
                {shortDate(workDay.get('date'))}
              </Text>
            </div>
          }
          className={s.pageDay}
        >
          {workDay.get('tasks').map((task, index) => (
            <div className={s.pageDayTask} key={task.get('id')}>
              <div className={s.pageDayTaskDescription}>
                <div className={s.pageDayTaskDescriptionIcon}>
                  <Icon icon={Icon.icons.paper} className={s.pageDayTaskDescriptionIconContent} />
                </div>
                <div
                  className={s.pageDayTaskDescriptionText}
                  dangerouslySetInnerHTML={createMarkup(task.get('description'))}
                />
              </div>

              <div className={s.pageDayTaskDescriptionAnswer}>
                <Field
                  className={cx(s.pageDayTaskDescriptionAnswer, defineTaskStatus(task.get('status')))}
                  component={TextInput}
                  id={`[${workDayIndex}].tasks[${index}.answer]`}
                  name={`[${workDayIndex}].tasks[${index}.answer]`}
                  placeholder="Paste link to the code"
                  iconBefore={Icon.icons.check}
                />
              </div>
            </div>
          ))}
          <div className={s.pageDayButtons}>
            <SecondaryButton type="button" onClick={() => updateSeveralTasks(values[workDayIndex])}>
              Save
            </SecondaryButton>
          </div>
        </Dropdown>
      ))}
    </Form>
  );
};
export default Trajectory;
