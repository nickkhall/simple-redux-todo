import { combineReducers } from 'redux';
import todos from './reducer_todo';

const todoApp = combineReducers({
  todos
});

export default todoApp;
