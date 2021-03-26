import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Text } from '../text';
import { Icon } from '../icon';
import s from './styles.scss';

interface LinkProps extends React.AllHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  to: string;
  icon?: any;
}

export const PrimaryButtonLink: React.FC<LinkProps> = ({
  className,
  children,
  disabled = false,
  icon,
  ...props
}: LinkProps) => (
  <Link className={cx(s.button, s.buttonPrimary, disabled && s.buttonDisabled, className)} {...props}>
    {icon && <Icon className={s.buttonPrimaryIcon} icon={icon} />}
    <Text size={Text.sizes.m} color={Text.colors.light} weight={Text.weights.semiBold}>
      {children}
    </Text>
  </Link>
);
PrimaryButtonLink.defaultProps = {
  icon: null,
};

export const SecondaryButtonLink: React.FC<LinkProps> = ({
  className,
  children,
  disabled = false,
  icon = null,
  ...props
}: LinkProps) => (
  <Link className={cx(s.button, s.buttonSecondary, disabled && s.buttonDisabled, className)} {...props}>
    {icon && <Icon className={s.buttonPrimaryIcon} icon={icon} />}
    <Text color={Text.colors.light} size={Text.sizes.xl} weight={Text.weights.semiBold}>
      {children}
    </Text>
  </Link>
);
SecondaryButtonLink.defaultProps = {
  icon: null,
};

export const UnderlinedButtonLink: React.FC<LinkProps> = ({
  className,
  children,
  disabled = false,
  icon = null,
  ...props
}: LinkProps) => (
  <Link className={cx(s.button, s.buttonUnderlined, disabled && s.buttonDisabled, className)} {...props}>
    {icon && <Icon className={s.buttonPrimaryIcon} icon={icon} />}
    <Text size={Text.sizes.m} color={Text.colors.primary} weight={Text.weights.semiBold}>
      {children}
    </Text>
  </Link>
);

UnderlinedButtonLink.defaultProps = {
  icon: null,
};

interface BackLinkProps extends React.AllHTMLAttributes<HTMLElement> {
  to: string;
}
export const BackLink: React.FC<BackLinkProps> = ({ className, ...props }: BackLinkProps) => (
  <Link className={cx(s.backLink, className)} {...props}>
    <Icon className={s.backLinkIcon} icon={Icon.icons.chevronLeft} />
  </Link>
);
