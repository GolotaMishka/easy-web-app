import React, { ReactElement } from 'react';
import TrajectoryComponent from 'app/components/app/trajectory';
import { selectors, actions } from 'data';
import { connect } from 'react-redux';
import { Loader } from 'ui';

export interface TrajectoryContainerProps {
  isListLoaded: boolean;
  isListLoading: boolean;
  list: any;
  clear: () => void;
  fetchList: () => boolean;
}

const mapStateToProps = (state) => ({
  list: selectors.workDays.getItemsList(state),
  isListLoaded: selectors.workDays.getItemsListLoaded(state),
  isListLoading: selectors.workDays.getItemsListLoading(state),
});

const mapDispatchToProps = {
  fetchList: actions.workDays.fetchList,
  clear: actions.workDays.clear,
};

const TrajectoryContainer = ({
  fetchList,
  list,
  isListLoading,
  isListLoaded,
}: TrajectoryContainerProps): ReactElement => {
  React.useEffect(() => {
    if (!isListLoaded && !isListLoading) {
      fetchList();
    }
  }, [isListLoaded, isListLoading]);

  if (!isListLoaded || isListLoading) return <Loader />;
  return <TrajectoryComponent workDays={list} />;
};

export default connect<any>(mapStateToProps, mapDispatchToProps)(TrajectoryContainer);
