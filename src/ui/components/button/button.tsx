import React from 'react';
import cx from 'classnames';
import { Text } from '../text';
import { Icon } from '../icon';
import s from './styles.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  icon?: any;
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  type = 'button',
  className,
  children,
  disabled,
  icon,
  ...props
}: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={cx(s.button, s.buttonPrimary, className)} disabled={disabled} {...props}>
    {icon && <Icon className={s.buttonPrimaryIcon} icon={icon} />}
    <Text color={Text.colors.white} size={Text.sizes.xl} weight={Text.weights.semiBold}>
      {children}
    </Text>
  </button>
);

export const SecondaryButton: React.FC<ButtonProps> = ({
  type = 'button',
  className,
  children,
  disabled,
  icon,
  ...props
}: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={cx(s.button, s.buttonSecondary, className)} disabled={disabled} {...props}>
    {icon && <Icon className={s.buttonSecondaryIcon} icon={icon} />}
    <Text color={Text.colors.white} size={Text.sizes.xl} weight={Text.weights.semiBold}>
      {children}
    </Text>
  </button>
);

export const UnderlinedButton: React.FC<ButtonProps> = ({
  type = 'button',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={cx(s.button, s.buttonUnderlined, className, disabled && s.buttonUnderlinedDisabled)}
    {...props}
  >
    <Text size={Text.sizes.m} weight={Text.weights.semiBold} color={Text.colors.primary}>
      {children}
    </Text>
  </button>
);

export interface AddButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}
export const AddButton: React.FC<AddButtonProps> = ({
  type = 'button',
  className,
  children,
  disabled,
  ...props
}: AddButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={cx(s.addButton, className, disabled && s.addButtonDisabled)} {...props}>
    <div className={s.addButtonPlus}>
      <Icon className={s.addButtonPlusIcon} icon={Icon.icons.add} />
    </div>
    <div className={s.addButtonContent}>
      <Text size={Text.sizes.m} weight={Text.weights.semiBold} color={Text.colors.white}>
        {children}
      </Text>
    </div>
  </button>
);
