import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import { basePath } from 'app/constants/url/user';
import { actions, selectors } from 'data';
import { connect } from 'react-redux';
import { Loader } from 'ui';
import UserPage from 'app/components';

const mapStateToProps = (state) => ({
  list: selectors.values.getItemsList(state),
  listLoaded: selectors.values.getListLoaded(state),
  isListLoading: selectors.values.getListLoading(state),
});

const mapDispatchToProps = {
  fetchList: actions.values.fetchList,
  clear: actions.values.clear,
};

interface RootProps {
  fetchList: () => void;
  clear: () => void;
  listLoaded: boolean;
  isListLoading: boolean;
  list: any;
}

class EasyWeb extends React.Component<RootProps> {
  componentDidMount() {
    const { fetchList, listLoaded } = this.props;
    if (!listLoaded) {
      fetchList();
    }
  }

  // componentWillUnmount

  render() {
    const { isListLoading, listLoaded } = this.props;
    if (isListLoading || !listLoaded) {
      return <Loader />;
    }
    return (
      <Switch>
        <Route path={basePath} component={UserPage} />
        <Redirect to={basePath} />
      </Switch>
    );
  }
}
export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(EasyWeb));
