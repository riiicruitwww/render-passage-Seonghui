import React from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../../store/task';
import { bindActionCreators } from 'redux';
import { Passage, Choice, Question } from '../task'

const Blank = ({ item, taskData }) => {
  const list = item.children.map((chunkRef) => {
    return chunkRef.children.map((segment, index) => {
      return <Passage
        key={index}
        index={index}
        chunk={chunkRef.chunk_id}
        segment={segment.data}
      />
    })
  })
  return <div>{list}</div>
};

const QuestionArea = ({ item, taskData }) => {
  const list = item.children.map((item) => {
    return item.children.map((item, index) => {
      return <Question key={index} chunk={item.chunk_id} />
    })
  })
  return <div>{list}</div>
};

const ChoiceArea = ({ item, taskData, id, TaskActions }) => {
  const answers = ['a', 'b', 'c', 'd']
  const handleClickUserAnswer = (id, number) => {
    TaskActions.setUserAnswers({
      id: id,
      answer: number
    })
  }
  const list = item.children.map((type) => {
    return type.children.map((item) => {
      return item.children.map((item, index) => {
        return <Choice
          key={index}
          id={id}
          number={answers[type.number]}
          chunk={item.chunk_id}
          onClickUserAnswer={handleClickUserAnswer}
        />
      })
    })
  })
  return <ul>{list}</ul>
};

const RenderQuestion = ({ data, choice, number, taskData, TaskActions, answers, userAnswers }) => {

  return (
    <ul>
      {userAnswers[data.id] === answers[data.id] ? '맞았습니다' : '틀렸습니다'}
      {data.view_tree.children.map((item, index) => {
        switch (item.name) {
          case 'blank': {
            return <Blank
              key={index}
              item={item}
              taskData={taskData}
            />
          }
          case 'question_area': {
            return <QuestionArea
              key={index}
              item={item}
              taskData={taskData}
            />
          }
          case 'choice_area': {
            return <ChoiceArea
              key={index}
              item={item}
              taskData={taskData}
              id={data.id}
              TaskActions={TaskActions}
            />
          }
        }
      })
      }
    </ul>
  )
}

const mapStateToProps = state => ({
  taskData: state.task.data,
  isLoading: state.task.isLoading,
  answers: state.task.answers,
  userAnswers: state.task.userAnswers
});

const mapDispatchToProps = dispatch => ({
  TaskActions: bindActionCreators(taskActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderQuestion);