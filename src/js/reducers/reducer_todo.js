import React from 'react';
import { ADD_TODO, TOGGLE_TODO } from '../actions/action_index';


const todoReducers = (state = {}, action) => {
  switch(action.type) {
    case ADD_TODO:
    console.log('You added a todo!');
      return (
        Object.assign({},
          state,
          {
            todos: action.payload,
            completed: false
          }
        )
      )
    }
    return state
  }

  export default todoReducers;
