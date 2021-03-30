import React, { ReactElement } from 'react';
import TrajectoryComponent from 'app/components/app/trajectory';
import { selectors, actions } from 'data';
import { connect } from 'react-redux';
import { Loader } from 'ui';
import { Formik, FormikValues } from 'formik';

export interface TrajectoryContainerProps {
  isListLoaded: boolean;
  isListLoading: boolean;
  areTasksUpdating: boolean;
  list: any;
  clear: () => void;
  fetchList: () => boolean;
  updateSeveralTasks: (values: FormikValues) => boolean;
}

const mapStateToProps = (state) => ({
  list: selectors.workDays.getItemsList(state),
  isListLoaded: selectors.workDays.getItemsListLoaded(state),
  isListLoading: selectors.workDays.getItemsListLoading(state),
  areTasksUpdating: selectors.workDays.getSeveralTasksUpdating(state),
});
const mapDispatchToProps = {
  fetchList: actions.workDays.fetchList,
  clear: actions.workDays.clear,
  updateSeveralTasks: actions.workDays.updateSeveralTasks,
};

const TrajectoryContainer = ({
  fetchList,
  list,
  isListLoading,
  isListLoaded,
  updateSeveralTasks,
  areTasksUpdating,
}: TrajectoryContainerProps): ReactElement => {
  const initialValues = React.useMemo(() => (list?.size ? { ...list?.toJS() } : {}), [list]);

  React.useEffect(() => {
    if (!isListLoaded && !isListLoading) {
      fetchList();
    }
  }, [isListLoaded, isListLoading]);

  if (!isListLoaded || isListLoading || areTasksUpdating) return <Loader />;
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {(formikProps) => (
        <TrajectoryComponent workDays={list} updateSeveralTasks={updateSeveralTasks} {...formikProps} />
      )}
    </Formik>
  );
};

export default connect<any>(mapStateToProps, mapDispatchToProps)(TrajectoryContainer);
