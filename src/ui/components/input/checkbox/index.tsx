import React from 'react';
import cx from 'classnames';
import { Text } from 'ui/components/text';
import { Icon } from 'ui/components/icon';
import s from './styles.scss';

export interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
}

export const Checkbox: React.FC<CheckboxInputProps> = ({
  label,
  checked,
  name,
  id,
  className,
  disabled,
  value,
  ...props
}: CheckboxInputProps) => (
  <label htmlFor={id} className={cx(s.checkbox, className)}>
    <input
      className={cx(s.checkboxInput, className)}
      type="checkbox"
      name={name}
      id={id}
      disabled={disabled}
      checked={checked}
      value={value}
      {...props}
    />
    <div className={s.checkboxInputTick}>
      <Icon icon={Icon.icons.check} className={s.checkboxInputTickIcon} />
    </div>
    {label && (
      <Text className={s.checkboxTitle} size={Text.sizes.m}>
        {label}
      </Text>
    )}
  </label>
);
