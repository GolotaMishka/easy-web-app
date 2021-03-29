import React, { ReactElement } from 'react';
import { shortDate, Field } from 'app/utils';
import { Dropdown, Text, TextInput, Icon, SecondaryButton } from 'ui';
import { Form, FormikValues } from 'formik';
import s from './styles.scss';

interface TrajectoryProps {
  workDays: any;
  updateTask: (id: string, values: FormikValues) => boolean;
  values: any;
}

enum TaskStatus {
  pending = 'pending',
  progress = 'progress',
  success = 'success',
  failed = 'failed',
}
const defineTaskStatus = (status) => {
  switch (status) {
    case TaskStatus.success:
      return s.pageDayTaskDescriptionStatusSuccess;
    case TaskStatus.progress:
      return s.pageDayTaskDescriptionStatusProgress;
    case TaskStatus.failed:
      return s.pageDayTaskDescriptionStatusFailed;
    default:
      return s.pageDayTaskDescriptionStatusPending;
  }
};

const Trajectory = ({ workDays, values, updateTask }: TrajectoryProps): ReactElement => {
  return (
    <Form className={s.page}>
      {workDays.map((workDay, workDayIndex) => (
        <Dropdown key={workDay.get('id')} title={shortDate(workDay.get('date'))} className={s.pageDay}>
          {workDay.get('tasks').map((task, index) => (
            <div key={task.get('id')} className={s.pageDayTask}>
              <div className={s.pageDayTaskDescription}>
                <div className={s.pageDayTaskDescriptionTitle}>
                  <Text>{`${index + 1}. `}</Text>
                  <Icon icon={Icon.icons.check} className={defineTaskStatus(task.get('status'))} />
                </div>
                <Text>{task.get('description')}</Text>
              </div>

              <div className={s.pageDayTaskDescriptionAnswer}>
                <Field
                  className={s.pageDayTaskDescriptionAnswer}
                  component={TextInput}
                  id={`[${workDayIndex}].tasks[${index}.answer]`}
                  name={`[${workDayIndex}].tasks[${index}.answer]`}
                  placeholder="Paste link to the code"
                />
              </div>
              <SecondaryButton
                type="button"
                onClick={() => updateTask(workDay.get('id'), values[workDayIndex].tasks[index])}
              >
                Save
              </SecondaryButton>
            </div>
          ))}
        </Dropdown>
      ))}
    </Form>
  );
};
export default Trajectory;
