import React from 'react';
import {
  ADD_TODO,
  TOGGLE_TODO,
  TOGGLE_IN_PROGRESS,
  DELETE_TODO,
  SORT_COMPLETED_TODOS,
  SORT_IN_PROGRESS_TODOS,
  SORT_NOT_STARTED_TODOS
} from '../actions/action_index';


const todoReducers = (state = { items: [] }, action) => {
  switch(action.type) {
    case ADD_TODO:
      state.items.push(action.payload);
      break;

    case DELETE_TODO:
      state.items.forEach((item, index) => {
        if(item.id === action.payload) state.items.splice(index, 1);
      });
      break;

    case TOGGLE_TODO:
      state.items.forEach((item, index) => {
        if(item.id === action.payload.id) {
          item.completed = !item.completed;
          if(item.order === 1) item.order += 2;
          else item.order -= 2;
        }
      });
      break;

    case SORT_COMPLETED_TODOS:
      const sortOrders = (a,b) => a.order - b.order;

      state.items.sort(sortOrders);
      break;

    case TOGGLE_IN_PROGRESS:
      console.log('this is a toggle item: ', action.payload);

      break;
  }
  return Object.assign({}, state);
}

export default todoReducers;
