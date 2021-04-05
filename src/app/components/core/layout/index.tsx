import React, { ReactElement } from 'react';
import { useOutsideClicker } from 'app/utils';
import Logo from 'public/logo.svg';
import { Icon, Text } from 'ui';
import cx from 'classnames';
import {
  knowledgePath,
  // interviewPath,
  // vacanciesPath,
  // resumePath,
  trajectoryPath,
  profilePath,
  appBasePath,
} from 'app/constants/url';
import { Link } from 'react-router-dom';
import { IToken } from 'data';
import s from './styles.scss';
import NavLinkComponent from './navlink';

interface LayoutProps {
  children: React.ReactNode;
  userDetails: IToken;
}

const Layout = ({ children, userDetails }: LayoutProps): ReactElement => {
  const menuRef = React.useRef(null);
  const toggleRef = React.useRef(null);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const closeMenu = () => setMenuOpen(false);
  useOutsideClicker(menuRef, toggleRef, closeMenu);

  return (
    <div className={s.layout}>
      <header className={s.layoutHeader}>
        <Link to={appBasePath}>
          <img className={s.layoutHeaderLogo} src={Logo} alt="Logo easy web" />
        </Link>
        <button type="button" className={s.layoutHeaderMenu} onClick={toggleMenu} ref={toggleRef}>
          <div className={s.layoutHeaderMenuIcon}>
            <Icon icon={Icon.icons.userCircle} />
          </div>
          <Text>{`${userDetails.firstName} ${userDetails.lastName}`}</Text>
          <Icon
            icon={Icon.icons.chevronDown}
            className={cx(s.layoutHeaderMenuArrow, isMenuOpen && s.layoutHeaderMenuArrowOpen)}
          />
        </button>
        {isMenuOpen && (
          <div className={s.layoutHeaderMenuContent} ref={menuRef}>
            <Link to={profilePath} className={s.layoutHeaderMenuContentItem}>
              <Icon className={s.layoutHeaderMenuContentItemIcon} icon={Icon.icons.user} />
              <Text>Profile</Text>
            </Link>
            <button
              type="button"
              onClick={() => {
                window.localStorage.clear();
                window.location.reload();
              }}
              className={s.layoutHeaderMenuContentItem}
            >
              <Icon
                className={cx(s.layoutHeaderMenuContentItemIcon, s.layoutHeaderMenuContentItemIconLogout)}
                icon={Icon.icons.power}
              />
              <Text>Log out</Text>
            </button>
          </div>
        )}
      </header>
      <div className={s.layoutMain}>
        <aside className={s.layoutMainSidebar}>
          <NavLinkComponent icon={Icon.icons.book} title="Knowledge" path={knowledgePath} />
          <NavLinkComponent icon={Icon.icons.chart} title="Trajectory" path={trajectoryPath} />
          {/* <NavLinkComponent icon={Icon.icons.mic} title="Interview" path={interviewPath} />
          <NavLinkComponent icon={Icon.icons.work} title="Vacancies" path={vacanciesPath} />
          <NavLinkComponent icon={Icon.icons.file} title="Resume" path={resumePath} /> */}
        </aside>
        <div className={s.layoutMainContent}>{children}</div>
      </div>
    </div>
  );
};
export default Layout;
