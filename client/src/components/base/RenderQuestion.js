import React from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../../store/task';
import { bindActionCreators } from 'redux';
import { Passage, Choice, Question } from '../task'

const Blank = ({ item, type, id }) => {
  const list = item.children.map((chunkRef) => {
    return chunkRef.children.map((segment, index) => {
      return <Passage
        key={index}
        id={id}
        chunk={chunkRef.chunk_id}
        segment={segment.data}
        type={type}
      />
    })
  })
  return <p>{list}</p>
};

const QuestionArea = ({ item }) => {
  const list = item.children.map((item) => {
    return item.children.map((item, index) => {
      return <Question key={index} chunk={item.chunk_id} />
    })
  })
  return <div>{list}</div>
};

const ChoiceArea = ({ item, id, TaskActions }) => {
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
  return <ol type="a">{list}</ol>
};

const RenderQuestion = ({ data, type, id, taskData, TaskActions }) => {

  return (
    <>
      {data.view_tree.children.map((item, index) => {
        switch (item.name) {
          case 'blank': {
            return (type === 'passage' || type === 'passage_kr') &&
              <Blank
                key={index}
                id={id}
                item={item}
                taskData={taskData}
                type={type}
              />
          }
          case 'question_area': {
            return type === 'question' &&
              <QuestionArea
                key={index}
                item={item}
                taskData={taskData}
              />
          }
          case 'choice_area': {
            return type === 'choice' &&
              <ChoiceArea
                key={index}
                item={item}
                taskData={taskData}
                id={data.id}
                TaskActions={TaskActions}
              />
          }
          default:
            return null;
        }
      })
      }
    </>
  )
}

const mapStateToProps = state => ({
  taskData: state.task.data,
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