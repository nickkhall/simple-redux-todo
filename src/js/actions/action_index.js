import React from 'react';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_IN_PROGRESS = 'TOGGLE_IN_PROGRESS';
export const DELETE_TODO = 'DELETE_TODO';
export const SORT_COMPLETED_TODOS = 'SORT_COMPLETED_TODOS';
export const SORT_IN_PROGRESS_TODOS = 'SORT_IN_PROGRESS_TODOS';
export const SORT_NOT_STARTED_TODOS = 'SORT_NOT_STARTED_TODOS';

const _id = () => Math.random().toString(34).slice(2);

export function addTodo(item) {
  return {
    type: ADD_TODO,
    payload: {
      id: _id(),
      completed: false,
      text: item,
      order: 3
    }
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    }
  }
}

export function toggleInProgressTodo(id) {
  return {
    type: TOGGLE_IN_PROGRESS,
    payload: id
  }
}
