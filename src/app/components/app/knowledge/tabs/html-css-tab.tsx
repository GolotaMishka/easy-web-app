import React, { ReactElement } from 'react';
import TopicBlock from 'app/components/core/topic-block';
import { HtmlCssTopics } from 'app/constants/data';

const HTMLAndCssTab = (): ReactElement => {
  return (
    <div>
      {Object.keys(HtmlCssTopics).map((topicKey) => (
        <TopicBlock key={topicKey} title={HtmlCssTopics[topicKey]?.title} topicId={topicKey} />
      ))}
    </div>
  );
};
export default HTMLAndCssTab;
