import React, { ReactElement } from 'react';
import TopicBlock from 'app/components/core/topic-block';
import { webTopics } from 'app/constants/data';

const WebTab = (): ReactElement => {
  return (
    <div>
      {Object.keys(webTopics).map((topicKey) => (
        <TopicBlock key={topicKey} title={webTopics[topicKey]?.title} topicId={topicKey} />
      ))}
    </div>
  );
};
export default WebTab;
