import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../store/task';
import { bindActionCreators } from 'redux';
import { Passage } from '../components/task'


class PassagesContainer extends Component {
  render() {
    const { taskData, isLoading } = this.props;
    return (
      <div>
        {!isLoading && (
          taskData.passage_box.passages.map((item) => {
            return item.view_tree.children.map((item) => {
              return item.children.map((item) => {
                return null;
                // return <Passage data={taskData.chunk_map[item.chunk_id].text_en} />
              })
            })
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

export default connect(
  mapStateToProps
)(PassagesContainer);