import React from 'react';
import { connect } from 'react-redux';

const Choice = ({ chunk, answers, userAnswers, segment, taskData, number, id, UserAnswer, onClickUserAnswer }) => {
  const _onClick = (id, number) => {
    onClickUserAnswer(id, number)
  }
  return (
    <p onClick={() => _onClick(id, number)}>
      {number === answers[id] ? '정답' : '낫 정답'}
      {taskData.chunk_map[chunk].text_en}
    </p>
  )
}

const mapStateToProps = state => ({
  taskData: state.task.data,
  answers: state.task.answers,
  userAnswers: state.task.userAnswers,
});

export default connect(
  mapStateToProps
)(Choice);