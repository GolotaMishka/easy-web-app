import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Text } from 'ui';
import { knowledgePathDetail } from 'app/constants/url';
import s from './styles.scss';

interface TopicBlockProps {
  title: string;
  topicId: string | number;
}

const TopicBlock = ({ title, topicId }: TopicBlockProps): ReactElement => {
  return (
    <Link to={knowledgePathDetail(topicId)} className={s.block}>
      <Text size={Text.sizes.l} weight={Text.weights.semiBold}>
        {title}
      </Text>
    </Link>
  );
};
export default TopicBlock;
