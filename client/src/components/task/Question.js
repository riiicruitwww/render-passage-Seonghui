import React from 'react';
import { connect } from 'react-redux';

const Question = ({ chunk, segment, taskData }) => {
  return (
    <p>{taskData.chunk_map[chunk].text_en}</p>
  )
}

const mapStateToProps = state => ({
  taskData: state.task.data,
});

export default connect(
  mapStateToProps
)(Question);