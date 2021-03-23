import React from 'react';
import cx from 'classnames';
import { Text } from '../text';
import { Icon } from '../icon';

import s from './styles.scss';

export interface StampProps {
  status: 'Closed' | 'InPreparation' | 'InReview' | 'Purged';
}

const statusActions = {
  inReview: 'InReview',
  inPreparation: 'InPreparation',
  closed: 'Closed',
  purged: 'Purged',
};

export const Stamp: React.FC<StampProps> = ({ status }: StampProps) => {
  switch (status) {
    case statusActions.inPreparation: {
      return (
        <div className={s.stamp}>
          <Icon className={s.stampIcon} icon={Icon.icons.listView} />
          <Text size={Text.sizes.m} color={Text.colors.lightgrey}>
            In preparation
          </Text>
        </div>
      );
    }

    case statusActions.inReview: {
      return (
        <div className={s.stamp}>
          <Icon className={s.stampIcon} icon={Icon.icons.transform} />
          <Text size={Text.sizes.m} color={Text.colors.lightgrey}>
            In review
          </Text>
        </div>
      );
    }
    case statusActions.purged: {
      return (
        <div className={s.stamp}>
          <Icon className={s.stampIcon} icon={Icon.icons.transform} />
          <Text size={Text.sizes.m} color={Text.colors.lightgrey}>
            Purged
          </Text>
        </div>
      );
    }
    default: {
      return (
        <div className={s.stamp}>
          <Icon className={cx(s.stampIcon, s.stampIconSuccess)} icon={Icon.icons.check} />
          <Text size={Text.sizes.m} color={Text.colors.success}>
            Closed
          </Text>
        </div>
      );
    }
  }
};
