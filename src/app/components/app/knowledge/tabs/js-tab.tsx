import React, { ReactElement } from 'react';
import TopicBlock from 'app/components/core/topic-block';
import { jsTopics } from 'app/constants/data';

const JSTab = (): ReactElement => {
  return (
    <div>
      {Object.keys(jsTopics).map((topicKey) => (
        <TopicBlock key={topicKey} title={jsTopics[topicKey]?.title} topicId={topicKey} />
      ))}
    </div>
  );
};
export default JSTab;
