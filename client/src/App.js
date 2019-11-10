import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { PassagesContainer, QuestionContainer } from './container'
import * as taskActions from './store/task';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    const { TaskActions } = this.props;
    TaskActions.fetchTask();
  }
  render() {
    const { TaskActions } = this.props;
    return (
      <div className="App">
        <QuestionContainer />
        <button onClick={TaskActions.setResult}>결과 확인하기</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taskData: state.task.data,
  answers: state.task.answers,
  userAnswers: state.task.userAnswers,
});

const mapDispatchToProps = dispatch => ({
  TaskActions: bindActionCreators(taskActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);