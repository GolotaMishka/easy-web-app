import React, { ReactElement } from 'react';
import TopicBlock from 'app/components/core/topic-block';
import { reactTopics } from 'app/constants/data';

const ReactTab = (): ReactElement => {
  return (
    <div>
      {Object.keys(reactTopics).map((topicKey) => (
        <TopicBlock key={topicKey} title={reactTopics[topicKey]?.title} topicId={topicKey} />
      ))}
    </div>
  );
};
export default ReactTab;
