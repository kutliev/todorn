import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withTheme, ListItem, Icon, CheckBox, Text } from 'react-native-elements';

import { toggleTodo, removeTodo } from '../../store/actions';

const TodoRow = ({ todo, toggleTodo, removeTodo }) => (
  <ListItem
    key={todo.id}
    title={
      <Text
        style={todo.completed && styles.completed}
        onPress={() => toggleTodo(todo.id)}
      >
        {todo.content}
      </Text>
    }
    containerStyle={styles.row}
    leftIcon={
      <CheckBox
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={todo.completed}
        onPress={() => toggleTodo(todo.id)}
        containerStyle={styles.checkbox}
      />
    }
    rightIcon={
      <Icon
        name='delete'
        color='#ccc'
        onPress={() => removeTodo(todo.id)}
      />
    }
    bottomDivider
  />
);

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fffffa',
    paddingLeft: 5,
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid', 
    color: '#ccc',
  },
  checkbox: {
    marginLeft: 0,
    marginRight: 0,
    padding: 0,
  }
});

export default connect(null, { toggleTodo, removeTodo })(withTheme(TodoRow));
