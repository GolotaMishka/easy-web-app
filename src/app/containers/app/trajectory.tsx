import React, { ReactElement } from 'react';
import TrajectoryComponent from 'app/components/app/trajectory';
import { selectors, actions } from 'data';
import { connect } from 'react-redux';
import { Loader } from 'ui';
import { Formik, FormikValues } from 'formik';

export interface TrajectoryContainerProps {
  isListLoaded: boolean;
  isListLoading: boolean;
  isTaskUpdating: boolean;
  list: any;
  clear: () => void;
  fetchList: () => boolean;
  updateTask: (values: FormikValues) => boolean;
}

const mapStateToProps = (state) => ({
  list: selectors.workDays.getItemsList(state),
  isListLoaded: selectors.workDays.getItemsListLoaded(state),
  isListLoading: selectors.workDays.getItemsListLoading(state),
  isTaskUpdating: selectors.workDays.getTaskUpdating(state),
});
const mapDispatchToProps = {
  fetchList: actions.workDays.fetchList,
  clear: actions.workDays.clear,
  updateTask: actions.workDays.updateTask,
};

const TrajectoryContainer = ({
  fetchList,
  list,
  isListLoading,
  isListLoaded,
  updateTask,
  isTaskUpdating,
}: TrajectoryContainerProps): ReactElement => {
  const initialValues = React.useMemo(() => (list?.size ? { ...list?.toJS() } : {}), [list]);

  React.useEffect(() => {
    if (!isListLoaded && !isListLoading) {
      fetchList();
    }
  }, [isListLoaded, isListLoading]);

  if (!isListLoaded || isListLoading || isTaskUpdating) return <Loader />;
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {(formikProps) => <TrajectoryComponent workDays={list} updateTask={updateTask} {...formikProps} />}
    </Formik>
  );
};

export default connect<any>(mapStateToProps, mapDispatchToProps)(TrajectoryContainer);
