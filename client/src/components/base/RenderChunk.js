import React from 'react';
import { connect } from 'react-redux';

const RenderChunk = (chunkId, taskData) => {
  return taskData.chunk_map[chunkId]
}

const mapStateToProps = state => ({
  taskData: state.task.data,
});

export default connect(
  mapStateToProps
)(RenderChunk);