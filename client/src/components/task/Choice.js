import React from 'react';
import { connect } from 'react-redux';

const Choice = ({ chunk, answers, userAnswers, showResult, segment, taskData, number, id, UserAnswer, onClickUserAnswer }) => {
  const _onClick = (id, number) => {
    onClickUserAnswer(id, number)
  }
  const setClass = (currentNumber) => {
    const classList = []
    const selected = userAnswers[id] === currentNumber ? 'selected' : ''
    if (showResult) {
      const correction = userAnswers[id] === answers[id] ? 'correct' : 'incorrect'
      const answer = number === answers[id] ? 'answer' : 'not-answer'
      classList.push(correction)
      classList.push(answer)
      classList.push(selected)
      return classList.join(' ')
    }
    classList.push(selected)
    return classList.join(' ')
  }
  return (
    <li
      onClick={() => _onClick(id, number)}
      className={setClass(number)}
    >
      {taskData.chunk_map[chunk].text_en}
    </li>
  )
}

const mapStateToProps = state => ({
  taskData: state.task.data,
  answers: state.task.answers,
  userAnswers: state.task.userAnswers,
  showResult: state.task.showResult,
});

export default connect(
  mapStateToProps
)(Choice);