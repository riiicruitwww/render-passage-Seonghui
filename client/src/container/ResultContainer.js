import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../store/task';
import { bindActionCreators } from 'redux';
import { RenderQuestion } from '../components/base'


class ResultContainer extends Component {
  render() {
    const { taskData, isLoading, TaskActions, type } = this.props;
    return (
      <div className={type}>
        {!isLoading && (
          taskData.passage_box.vocabularies.map((item, index) => {
            return (
              <div key={index}>
                {item.word}
                {item.meaning}
              </div>
            )
          })
        )}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  taskData: state.task.data,
  isLoading: state.task.isLoading
});

const mapDispatchToProps = dispatch => ({
  TaskActions: bindActionCreators(taskActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultContainer);