import {
  SET_USER,
  REMOVE_USER,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} from './actionTypes';

export const setUser = ({ name }) => ({
  type: SET_USER,
  payload: {
    userName: name,
  }
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const addTodo = ({ content }) => ({
  type: ADD_TODO,
  payload: {
    content,
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  }
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id
  }
});
