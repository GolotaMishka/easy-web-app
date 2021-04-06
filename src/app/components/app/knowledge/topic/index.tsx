import React, { ReactElement } from 'react';
import { Text } from 'ui';
import s from './styles.scss';

interface TopicProps {
  topic: any;
}

const Topic = ({ topic }: TopicProps): ReactElement => {
  return (
    <div className={s.page}>
      <div className={s.pageHeader}>
        <Text size={Text.sizes.xxl} weight={Text.weights.semiBold}>
          {topic.title}
        </Text>
      </div>

      {topic?.content()}

      <Text />
    </div>
  );
};
export default Topic;
