import React from 'react';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const _id = () => Math.random().toString(34).slice(2);

export function addTodo(item) {
  return {
    type: ADD_TODO,
    payload: {
      id: _id(),
      completed: false,
      text: item
    }
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}
