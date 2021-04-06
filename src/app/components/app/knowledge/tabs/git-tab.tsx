import React, { ReactElement } from 'react';
import TopicBlock from 'app/components/core/topic-block';
import { gitTopics } from 'app/constants/data';

const GitTab = (): ReactElement => {
  return (
    <div>
      {Object.keys(gitTopics).map((topicKey) => (
        <TopicBlock key={topicKey} title={gitTopics[topicKey]?.title} topicId={topicKey} />
      ))}
    </div>
  );
};
export default GitTab;
