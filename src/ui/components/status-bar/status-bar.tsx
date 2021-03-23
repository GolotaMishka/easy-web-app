import React from 'react';
import cx from 'classnames';
import { Text } from '../text';
import { Icon } from '../icon';

import s from './styles.scss';

interface StatusBarProps {
  status: 'Closed' | 'InPreparation' | 'InReview' | 'Purged';
}
const statusItems = [
  { status: 'InPreparation', title: 'In preparation' },
  { status: 'InReview', title: 'In review' },
  { status: 'Closed', title: 'Closed' },
];

export const StatusBar: React.FC<StatusBarProps> = ({ status, ...props }: StatusBarProps) => {
  const activePointIndex = statusItems.findIndex((statusItem) => statusItem.status === status);
  return (
    <div className={s.wizzard} {...props}>
      {statusItems.map((statusItem, index) => {
        const isActive = status === statusItem.status || index < activePointIndex;
        return (
          <div className={cx(s.wizzardStep, index === 0 && s.wizzardStepFirst)} key={statusItem.status}>
            <div className={s.wizzardStepBox}>
              <div className={s.wizzardStepBoxInfo}>
                <Icon
                  className={cx(s.wizzardStepBoxInfoIcon, isActive && s.wizzardStepBoxActive)}
                  icon={Icon.icons.listView}
                />
                <Text
                  className={cx(s.wizzardStepBoxInfoTitle, isActive && s.wizzardStepBoxActive)}
                  size={Text.sizes.m}
                  weight={Text.weights.bold}
                  color={Text.colors.tableborder}
                >
                  {statusItem.title}
                </Text>
              </div>
              <div className={s.wizzardStepBoxFigures}>
                <div className={cx(s.wizzardStepBoxFiguresLine, isActive && s.wizzardStepBoxFiguresLineActive)} />
                <div className={cx(s.wizzardStepBoxFiguresPoint, isActive && s.wizzardStepBoxActivePoint)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
