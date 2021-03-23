import React from 'react';
import cx from 'classnames';
import s from './styles.scss';

export interface MenuItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: any;
  style?: any;
  href: string;
  target: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  className,
  style,
  children,
  href,
  target,
  ...props
}: MenuItemProps): JSX.Element => (
  <a
    {...props}
    href={href}
    target="_blank"
    rel="noreferrer"
    className={cx(s.footerTopNavMenuItem, className)}
    style={style}
  >
    {children}
  </a>
);

export { MenuItem };
