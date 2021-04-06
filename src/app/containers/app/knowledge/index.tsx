import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { knowledgePath, knowledgePathDetail } from 'app/constants/url';

import KnowledgeContainer from './list';
import TopicContainer from './topic';

const KnowledgeRoute = (): ReactElement => {
  return (
    <Switch>
      <Route exact path={knowledgePath} component={KnowledgeContainer} />
      <Route path={knowledgePathDetail(':topicId')} component={TopicContainer} />
    </Switch>
  );
};

export default KnowledgeRoute;
