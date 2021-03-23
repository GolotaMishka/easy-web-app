import { Icon } from 'ui';
import PropTypes from 'prop-types';
import React from 'react';

import s from './styles.scss';

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FooterComponent: React.FC<FooterProps> = ({ children }: FooterProps): JSX.Element => (
  <footer className={s.footer}>
    <div className={s.footerWrapper}>{children}</div>
    <div className={s.footerDisclaimerWrapper}>
      <p className={s.footerDisclaimer}>
        <Icon className={s.footerDisclaimerIcon} icon={Icon.icons.copyright} /> 2021 PwC. All rights reserved. PwC
        refers to the PwC network and/or one or more of its member firms, each of which is a separate legal entity.
        Please see www.pwc.com/structure for further details.
      </p>
    </div>
  </footer>
);

FooterComponent.propTypes = {
  children: PropTypes.node,
};

FooterComponent.defaultProps = {
  children: null,
};

export { FooterComponent };
