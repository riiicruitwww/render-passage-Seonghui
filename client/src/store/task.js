import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';

const SET_TASK = 'task/SET_TASK';
const REQUEST_TASK = 'task/REQUEST_TASK';
const INITIALIZE = 'task/INITIALIZE';

const SET_ANSWERS = 'task/SET_ANSWERS';
const SET_USER_ANSWERS = 'task/SET_USER_ANSWERS';
const SET_RESULT = 'task/SET_RESULT';

export const setTask = createAction(SET_TASK, data => data);
export const requestTask = createAction(REQUEST_TASK);
export const initializeTask = createAction(INITIALIZE);

export const setAnswers = createAction(SET_ANSWERS, data => data);
export const setUserAnswers = createAction(SET_USER_ANSWERS, data => data);

export const setResult = createAction(SET_RESULT);

export const fetchTask = () => dispatch => {
  axios.get('/api/task').then(
    (res) => {
      dispatch({ type: "task/INITIALIZE" })
      dispatch({ type: "task/REQUEST_TASK" })
      dispatch({ type: "task/SET_TASK", payload: res.data })
    }
  ).catch(e => {
    console.log(e)
  })
}

const initialState = {
  isLoading: true,
  data: {},
  answers: {},
  userAnswers: {},
  showResult: false
};

export default handleActions(
  {
    [SET_TASK]: (state, action) => ({
      ...state,
      isLoading: false,
      data: action.payload
    }),
    [REQUEST_TASK]: (state, action) => ({
      ...state,
      isLoading: true
    }),
    [INITIALIZE]: (state, action) => (
      initialState
    ),
    [SET_ANSWERS]: (state, action) => (
      {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.id]: action.payload.answer
        }
      }
    ),
    [SET_USER_ANSWERS]: (state, action) => (
      {
        ...state,
        userAnswers: {
          ...state.userAnswers,
          [action.payload.id]: action.payload.answer
        }
      }
    ),
    [SET_RESULT]: (state, action) => ({
      ...state,
      showResult: true
    }),
  },
  initialState
);