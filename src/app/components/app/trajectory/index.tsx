import React, { ReactElement } from 'react';
import { shortDate } from 'app/utils';
import { Dropdown } from 'ui';
import s from './styles.scss';

interface TrajectoryProps {
  workDays: any;
}

const Trajectory = ({ workDays }: TrajectoryProps): ReactElement => {
  return (
    <div className={s.page}>
      {workDays.map((workDay) => (
        <Dropdown key={workDay.get('id')} title={shortDate(workDay.get('date'))} className={s.pageDay}>
          content
        </Dropdown>
      ))}
    </div>
  );
};
export default Trajectory;
