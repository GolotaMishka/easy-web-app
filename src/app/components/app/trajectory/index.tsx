import React, { ReactElement } from 'react';
import { shortDate, Field } from 'app/utils';
import { Dropdown, Text, TextInput, Icon, SecondaryButton } from 'ui';
import { Form, FormikValues } from 'formik';
import cx from 'classnames';
import s from './styles.scss';

interface TrajectoryProps {
  // updateSeveralAnswers: (values: FormikValues) => boolean;
  updateAnswer: (values: FormikValues) => boolean;
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

const defineWorkDayStatus = (workDay) => {
  if (workDay.tasks.some((task) => task.answers[0]?.status === TaskStatus.progress)) {
    return s.pageHeaderTitlesIconProgress;
  }
  if (
    workDay.tasks.every(
      (task) =>
        task.answers[0]?.status &&
        task.answers[0]?.status !== TaskStatus.progress &&
        task.answers[0]?.status !== TaskStatus.pending &&
        task.answers[0]?.status !== TaskStatus.failed,
    )
  ) {
    return s.pageHeaderTitlesIconSuccess;
  }
  return s.pageHeaderTitlesIconFailed;
};

const Trajectory = ({ values, updateAnswer }: TrajectoryProps): ReactElement => {
  // console.log(updateSeveralAnswers);
  return (
    <Form className={s.page}>
      {values.map((workDay, workDayIndex) => (
        <Dropdown
          key={workDay.date}
          header={
            <div className={s.pageHeader}>
              <div className={s.pageHeaderTitles}>
                <Icon icon={Icon.icons.checked} className={cx(s.pageHeaderTitlesIcon, defineWorkDayStatus(workDay))} />

                <Text
                  className={s.boxHeaderLeftTitle}
                  size={Text.sizes.xl}
                  weight={Text.weights.semiBold}
                  color={Text.colors.light}
                >
                  Lets check your knowledge!
                </Text>
              </div>
              <Text
                className={s.boxHeaderLeftTitle}
                size={Text.sizes.xl}
                weight={Text.weights.semiBold}
                color={Text.colors.light}
              >
                {shortDate(workDay.date)}
              </Text>
            </div>
          }
          className={s.pageDay}
        >
          {workDay.tasks.map((task, taskIndex) => (
            <div className={s.pageDayTask} key={task.id}>
              <div className={s.pageDayTaskDescription}>
                <div className={s.pageDayTaskDescriptionIcon}>
                  <Icon icon={Icon.icons.paper} className={s.pageDayTaskDescriptionIconContent} />
                </div>
                <div
                  className={s.pageDayTaskDescriptionText}
                  dangerouslySetInnerHTML={createMarkup(task.description)}
                />
              </div>

              <div className={s.pageDayTaskDescriptionAnswer}>
                <Field
                  className={cx(s.pageDayTaskDescriptionAnswerField, defineTaskStatus(task.answers[0]?.status))}
                  component={TextInput}
                  id={`[${workDayIndex}].tasks[${taskIndex}].answers[0].link`}
                  name={`[${workDayIndex}].tasks[${taskIndex}].answers[0].link`}
                  placeholder="Paste link to the code"
                  iconBefore={Icon.icons.check}
                  disabled={task.answers[0]?.status === TaskStatus.success}
                />
                <SecondaryButton
                  className={s.pageDayTaskDescriptionAnswerButton}
                  type="button"
                  onClick={() => updateAnswer(task)}
                  disabled={task.answers[0]?.status === TaskStatus.success}
                >
                  Save
                </SecondaryButton>
              </div>
            </div>
          ))}
        </Dropdown>
      ))}
    </Form>
  );
};
export default Trajectory;
