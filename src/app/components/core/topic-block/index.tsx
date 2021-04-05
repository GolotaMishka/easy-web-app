import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Text } from 'ui';
import { knowledgePathDetail } from 'app/constants/url';
import s from './styles.scss';

interface TopicBlockProps {
  title: string;
  topicIndex: string | number;
}

const TopicBlock = ({ title, topicIndex }: TopicBlockProps): ReactElement => {
  return (
    <Link to={knowledgePathDetail(topicIndex)} className={s.block}>
      <Text size={Text.sizes.l} weight={Text.weights.semiBold}>
        {title}
      </Text>
    </Link>
  );
};
export default TopicBlock;
