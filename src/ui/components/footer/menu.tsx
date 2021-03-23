import React from 'react';
import cx from 'classnames';
import s from './styles.scss';

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: any;
  style?: any;
}

const Menu: React.FC<MenuProps> = ({ className, style, children, ...props }: MenuProps): JSX.Element => (
  <div {...props} className={cx(s.footerTopNavMenu, className)} style={style}>
    {children}
  </div>
);

export { Menu };
