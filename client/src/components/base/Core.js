// import { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as taskActions from '../../store/task';
// import * as api from '../../lib/api';

// class Core extends Component {
//   initialize = async () => {
//     const { TaskActions } = this.props;
//     try {
//       TaskActions.initializeTask();
//       TaskActions.requestTask();
//       const response = await api.fetchTask();
//       if (response.status === 200) {
//         // passages 제목
//         // response.data.passage_box.view_tree.children.map((item) =>{
//         //   item.children.map((item) => {
//         //     console.log(response.data.chunk_map[item.chunk_id].text_en)
//         //   })
//         // })
        
//         // // passages
//         // response.data.passage_box.passages.map((item) => {
//         //   item.view_tree.children.map((item) => {
//         //     item.children.map((item) => {
//         //       console.log(response.data.chunk_map[item.chunk_id].text_en)
//         //     })
//         //   })
//         // })

//         // // passages 번역
//         // response.data.passage_box.passage_translations.map((item) => {
//         //   item.view_tree.children.map((item) => {
//         //     item.children.map((item) => {
//         //       console.log(response.data.chunk_map[item.chunk_id].text_kr)
//         //     })
//         //   })
//         // })

//         // // questions
//         // response.data.questions.map((item) => {
//         //   // 정답
//         //   console.log(item.correct_answer)
//         //   item.view_tree.children.map((item) => {
//         //     item.children.map((item) => {
//         //       item.children.map((item) => {
//         //         switch(item.name) {
//         //           case 'paragraph': {
//         //             console.log('paragraph : ')
//         //             console.log(response.data.chunk_map[item.children[0].chunk_id])
//         //           }
//         //           case 'segment': {
//         //             console.log('segment : ')
//         //             console.log(item.data)
//         //           }
//         //         }
//         //       })
//         //     })
//         //   })
//         // })
//         TaskActions.setTask(response.data);
//       }
//     } catch (e) {
//       console.log(e)
//     }
//   };

//   componentDidMount() {
//     this.initialize();
//   }

//   render() {
//     return null;
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   TaskActions: bindActionCreators(taskActions, dispatch)
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(Core);