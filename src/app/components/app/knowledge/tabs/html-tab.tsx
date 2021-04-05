import React, { ReactElement } from 'react';
import TopicBlock from 'app/components/core/topic-block';

import s from './styles.scss';

const HTMLTab = (): ReactElement => {
  return (
    <div className={s.tab}>
      <TopicBlock title="Responsiveness basics" topicIndex={1} />
    </div>
  );
};
export default HTMLTab;
