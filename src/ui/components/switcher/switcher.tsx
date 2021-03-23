import React from 'react';
import cx from 'classnames';
import { Text } from '../text';
import s from './styles.scss';

export interface SwitcherProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked?: boolean;
  className?: string;
}

export const Switcher: React.FC<SwitcherProps> = ({ id, checked, className, ...props }: SwitcherProps) => (
  <label className={cx(s.switch, className)} htmlFor={id}>
    <input id={id} type="checkbox" checked={checked} {...props} />
    <span className={cx(s.slider, s.round)} />
    <Text
      className={cx(s.switchTitle, checked && s.switchTitleChecked)}
      size={Text.sizes.s}
      color={Text.colors.white}
      weight={Text.weights.semiBold}
    >
      {checked ? 'Yes' : 'No'}
    </Text>
  </label>
);
