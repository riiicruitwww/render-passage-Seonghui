import React from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../store/task';
import { bindActionCreators } from 'redux';


const PassageContainer = ({ taskData, isLoading, type}) => {

  const renderPassage = (type) => {
    switch (type) {
      case 'vocabularies':
        const list = taskData.passage_box.vocabularies.map((item, index) => {
          return (
            <li key={index}>
              {`${item.word}: ${item.meaning}`}
            </li>
          )
        })
        return <ul>{list}</ul>
      case 'title':
        return taskData.passage_box.view_tree.children.map((item) =>{
          return item.children.map((item) => {
            return <p class="strong">{taskData.chunk_map[item.chunk_id].text_en}</p>
          })
        })
      default:
        return null
    }
  }
  
  return (
    <div className={type}>
      {!isLoading && (
        renderPassage(type)
      )}
    </div>
  );
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
)(PassageContainer);