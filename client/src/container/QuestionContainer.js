import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../store/task';
import { bindActionCreators } from 'redux';
import { RenderQuestion } from '../components/base'


class QuestionContainer extends Component {
  render() {
    const { taskData, isLoading, TaskActions } = this.props;
    return (
      <div>
        {!isLoading && (
          taskData.questions.map((item, index) => {
            // 정답
            TaskActions.setAnswers({
              id: item.id,
              answer: item.correct_answer
            })
            return <RenderQuestion key={index} data={item} />
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
)(QuestionContainer);