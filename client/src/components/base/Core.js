import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as taskActions from '../../store/task';
import * as api from '../../lib/api';

class Core extends Component {
  initialize = async () => {
    const { TaskActions } = this.props;
    try {
      TaskActions.initializeTask();
      TaskActions.requestTask();
      const response = await api.fetchTask();
      if (response.status === 200) {
        TaskActions.setTask(response.data);
      }
    } catch (e) {
      console.log(e)
    }
  };

  componentDidMount() {
    this.initialize();
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  TaskActions: bindActionCreators(taskActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(Core);