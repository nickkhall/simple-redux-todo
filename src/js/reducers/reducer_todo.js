import React from 'react';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/action_index';


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
        if(item.id === action.payload) item.completed = !item.completed;
      });
      break;
  }
  return Object.assign({}, state);
}

export default todoReducers;
