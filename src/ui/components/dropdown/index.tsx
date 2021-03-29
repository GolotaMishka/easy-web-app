import React, { ReactElement, ReactNode, useState } from 'react';
import AnimatedHeight from 'react-animate-height';
import cx from 'classnames';
import { Text } from '../text';
import { Icon } from '../icon';

import s from './styles.scss';

export interface DropdownProps {
  title: string | ReactElement;
  children: ReactNode;
  className?: any;
}

const Dropdown = ({ className, title, children }: DropdownProps): ReactElement => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpened = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={className}>
      <button type="button" className={s.box} onClick={toggleOpened}>
        <div className={s.boxHeader}>
          <div className={s.boxHeaderLeft}>
            <Text className={s.boxHeaderLeftTitle} size={Text.sizes.l} weight={Text.weights.semiBold}>
              {title}
            </Text>
          </div>
          <Icon
            className={cx(s.boxHeaderButton, isOpen ? s.boxHeaderOpenedBtn : s.boxHeaderClosedBtn)}
            icon={Icon.icons.chevronDown}
          />
        </div>
      </button>
      <AnimatedHeight duration={500} height={isOpen ? 'auto' : 0}>
        <div className={s.boxContent}>{children}</div>
      </AnimatedHeight>
    </div>
  );
};

export { Dropdown };
