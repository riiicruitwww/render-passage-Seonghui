import { createAction, handleActions } from 'redux-actions';

const SET_TASK = 'task/SET_TASK';
const REQUEST_TASK = 'task/REQUEST_TASK';
const INITIALIZE = 'task/INITIALIZE'

export const setTask = createAction(SET_TASK, data => data);
export const requestTask = createAction(REQUEST_TASK);
export const initializeTask = createAction(INITIALIZE);

const initialState = {
  isLoading: false,
  task: {}
};

export default handleActions(
  {
    [SET_TASK]: (state, action) => ({
      ...state,
      isLoading: false,
      task: action.payload
    }),
    [REQUEST_TASK]: (state, action) => ({
      ...state,
      isLoading: true
    }),
    [INITIALIZE]: (state, action) => (
      initialState
    )
  },
  initialState
);