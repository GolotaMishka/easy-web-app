import React, { ReactElement } from 'react';
import { Icon, Text } from 'ui';
import { NavLink } from 'react-router-dom';
import s from './styles.scss';

interface NavLinkComponentProps {
  path: string;
  title: string;
  icon: any;
}

const NavLinkComponent = ({ path, title, icon }: NavLinkComponentProps): ReactElement => {
  return (
    <NavLink to={path} className={s.item} activeClassName={s.itemActive}>
      <Icon className={s.itemIcon} icon={icon} />
      <Text size={Text.sizes.s} color={Text.colors.placeholder}>
        {title}
      </Text>
    </NavLink>
  );
};
export default NavLinkComponent;
