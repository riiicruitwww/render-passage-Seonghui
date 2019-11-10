import React from 'react';
import { connect } from 'react-redux';

const Passage = ({ chunk, segment, taskData, key, index }) => {

  const blankPassage = () => {
    console.log(key)
    const text = taskData.chunk_map[chunk].text_en;
    const blackText = text.substr(0, segment.begin) + `------` + text.substr(segment.begin + segment.offset, text.length);

    return blackText;
  }
  
  return (
    <>
      {blankPassage()}
      <p>{taskData.chunk_map[chunk].text_kr}</p>
    </>
  )
}

const mapStateToProps = state => ({
  taskData: state.task.data,
});

export default connect(
  mapStateToProps
)(Passage);