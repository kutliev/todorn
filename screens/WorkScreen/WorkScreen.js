import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { withTheme, Text } from 'react-native-elements';

import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

class WorkScreen extends Component {
  state = {
    content: '',
  }

  render() {
    return (
      <>
        <View style={styles.workWrapper}>
          <Text h3>To Do List</Text>
        </View>
        <View>
          <TodoList />
        </View>
        <View>
          <TodoForm />
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  workWrapper: {
    marginBottom: 10,
  }
})

export default withTheme(WorkScreen);
