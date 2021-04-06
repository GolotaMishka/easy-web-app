import React, { ReactElement } from 'react';
import TopicComponent from 'app/components/app/knowledge/topic';
import { useParams } from 'react-router-dom';
import { fullTopics } from 'app/constants/data';

const TopicContainer = (): ReactElement => {
  const { topicId } = useParams();
  console.log(fullTopics[topicId], ' topic');
  return <TopicComponent topic={fullTopics[topicId]} />;
};

export default TopicContainer;
