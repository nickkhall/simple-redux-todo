import React from 'react';
import { ADD_TODO, TOGGLE_TODO } from '../actions/action_index';


const todoReducers = (state = {}, action) => {
  switch(action.type) {
    case ADD_TODO:
      return (
        Object.assign({},
          ...state,
          { item: action.payload }
        )
      )
    }
    return state
  }

  export default todoReducers;
