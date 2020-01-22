import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getTodos } from '../../store/selectors';
import TodoRow from '../TodoRow/TodoRow';

const TodoList = ({ todos }) =>
  todos.map(todo => <TodoRow todo={todo} key={todo.id} />);

const mapStateToProps = state => {
  const todos = getTodos(state);
  return { todos };
}

export default connect(mapStateToProps)(TodoList);
