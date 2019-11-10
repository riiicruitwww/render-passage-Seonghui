import React from 'react';
import { connect } from 'react-redux';

const Passage = ({ chunk, segment, taskData, key, type, id }) => {

  const blankPassage = () => {
    const text = taskData.chunk_map[chunk].text_en;
    const blackText = text.substr(0, segment.begin) + `---${id + 1}---` + text.substr(segment.begin + segment.offset, text.length);

    return blackText;
  }

  return (
    <>
      {type === 'passage' && blankPassage()}
      {type === 'passage_kr' && taskData.chunk_map[chunk].text_kr}
    </>
  )
}

const mapStateToProps = state => ({
  taskData: state.task.data,
});

export default connect(
  mapStateToProps
)(Passage);