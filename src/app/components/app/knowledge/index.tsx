import React, { ReactElement } from 'react';
import { Text } from 'ui';
import cx from 'classnames';
import s from './styles.scss';
import { KnowledgeTabs } from './tabs';

const Knowledge = (): ReactElement => {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const ActiveTab = React.useMemo(() => KnowledgeTabs[activeTabIndex].component, [activeTabIndex]);

  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <Text size={Text.sizes.xxl} className={s.pageHeaderTitle} weight={Text.weights.semiBold}>
          Knowledge
        </Text>
        <div className={s.pageHeaderTabs}>
          {KnowledgeTabs.map((tab, tabIndex) => (
            <button
              className={cx(s.pageHeaderTabsTab, activeTabIndex === tabIndex && s.pageHeaderTabsTabActive)}
              key={tab.id}
              type="button"
              onClick={() => setActiveTabIndex(tabIndex)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className={s.pageContent}>
        <ActiveTab />
      </div>
    </div>
  );
};
export default Knowledge;
