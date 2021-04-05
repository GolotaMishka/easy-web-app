import React, { ReactElement } from 'react';
// import KnowledgeComponent from 'app/components/app/knowledge';
import { useParams } from 'react-router-dom';

const TopicContainer = (): ReactElement => {
  const { topicIndex } = useParams();
  return <div>detail {topicIndex}</div>;
};

export default TopicContainer;
