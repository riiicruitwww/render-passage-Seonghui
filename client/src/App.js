import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { PassagesContainer, QuestionContainer, ResultContainer } from './container'
import * as taskActions from './store/task';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    const { TaskActions } = this.props;
    TaskActions.fetchTask();
  }
  render() {
    const { TaskActions, showResult, userAnswers } = this.props;
    return (
      <div className="App">
        <div className="container">
          <div className="wrapper question-wrapper">
            <h2>Question</h2>
            <QuestionContainer type="passage" />
            <QuestionContainer type="choice" />
          </div>


          <div className="wrapper result-wrapper">
            <h2>Answer</h2>
            {!showResult && (
              <button
                onClick={TaskActions.setResult}
                disabled={Object.keys(userAnswers).length < 4}
              >
                  결과 확인하기
                </button>
            )}
            {showResult && (
              <>
                <QuestionContainer type="passage_kr" />
                <ResultContainer type="vocabularies" />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taskData: state.task.data,
  answers: state.task.answers,
  userAnswers: state.task.userAnswers,
  showResult: state.task.showResult,
});

const mapDispatchToProps = dispatch => ({
  TaskActions: bindActionCreators(taskActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);