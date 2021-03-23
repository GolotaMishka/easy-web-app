import React from 'react';
import cx from 'classnames';
import { Text } from '../text';
import { ButtonIcon } from '../button-icon';
import { Icon } from '../icon';

import s from './styles.scss';

export interface PopupProps {
  handleClick: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const PopUp: React.FC<PopupProps> = ({ handleClick, title = 'Title', children, className }: PopupProps) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className={s.popUpBox}>
      <div className={cx(s.popUpBoxWrapper, className)} ref={wrapperRef}>
        <div className={s.popUpBoxWrapperHeader}>
          {title && (
            <Text
              className={s.popUpBoxWrapperHeaderTitle}
              color={Text.colors.text}
              size={Text.sizes.xxxl}
              weight={Text.weights.semiBold}
            >
              {title}
            </Text>
          )}
          <ButtonIcon icon={Icon.icons.close} className={s.popUpBoxWrapperHeaderClose} onClick={handleClick} />
        </div>

        {children}
      </div>
    </div>
  );
};
