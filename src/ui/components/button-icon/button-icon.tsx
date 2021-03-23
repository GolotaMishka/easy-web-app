import React from 'react';

import cx from 'classnames';
import { Icon } from '../icon';
import s from './styles.scss';

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: HTMLObjectElement;
  iconClassName?: string;
  className?: string;
  disabled?: boolean;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  type = 'button',
  className,
  iconClassName,
  disabled,
  ...props
}: ButtonIconProps) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={cx(s.button, className)} disabled={disabled} {...props}>
    <Icon icon={icon} className={cx(s.buttonIcon, iconClassName)} />
  </button>
);
