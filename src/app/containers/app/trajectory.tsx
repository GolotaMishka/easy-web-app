import React, { ReactElement } from 'react';
import TrajectoryComponent from 'app/components/app/trajectory';
import { selectors, actions } from 'data';
import { connect } from 'react-redux';
import { Loader } from 'ui';
import { Formik, FormikValues } from 'formik';
import { groupByDate } from 'app/utils';

export interface TrajectoryContainerProps {
  isListLoaded: boolean;
  isListLoading: boolean;
  areTasksUpdating: boolean;
  isTaskUpdating: boolean;
  list: any;
  clear: () => void;
  fetchList: () => boolean;
  updateSeveralAnswers: (values: FormikValues) => boolean;
  updateAnswer: (values: FormikValues) => boolean;
}

const mapStateToProps = (state) => ({
  list: selectors.tasks.getItemsList(state),
  isListLoaded: selectors.tasks.getItemsListLoaded(state),
  isListLoading: selectors.tasks.getItemsListLoading(state),
  areTasksUpdating: selectors.tasks.getSeveralTasksUpdating(state),
  isTaskUpdating: selectors.tasks.getTaskUpdating(state),
});
const mapDispatchToProps = {
  fetchList: actions.tasks.fetchList,
  clear: actions.tasks.clear,
  updateSeveralAnswers: actions.tasks.updateSeveralAnswers,
  updateAnswer: actions.tasks.updateAnswer,
};

const TrajectoryContainer = ({
  isListLoaded,
  isListLoading,
  fetchList,
  list,
  // updateSeveralAnswers,
  areTasksUpdating,
  updateAnswer,
  isTaskUpdating,
}: TrajectoryContainerProps): ReactElement => {
  const initialValues = React.useMemo(() => (list?.size ? groupByDate(list) : []), [list]);

  React.useEffect(() => {
    if (!isListLoaded && !isListLoading) {
      fetchList();
    }
  }, [isListLoaded, isListLoading]);

  if (!isListLoaded || isListLoading || areTasksUpdating || isTaskUpdating) return <Loader />;

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {(formikProps) => <TrajectoryComponent updateAnswer={updateAnswer} {...formikProps} />}
    </Formik>
  );
};

export default connect<any>(mapStateToProps, mapDispatchToProps)(TrajectoryContainer);
