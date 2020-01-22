import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { withTheme, Button, Input } from 'react-native-elements';
import { connect } from 'react-redux';

import { addTodo } from '../../store/actions';

class TodoForm extends Component {
  state = {
    content: '',
  }

  onContentChanged = (content) => this.setState({ content });

  saveTodo = () => {
    const { content } = this.state;
    const { addTodo } = this.props;
    if (content.length) {
      addTodo({ content });
    }

    this.setState({ content: '' });
  }

  render() {
    const { content } = this.state;

    return (
      <View style={styles.formWrapper}>
        <Input
          placeholder='What to do?'
          value={content}
          onChangeText={this.onContentChanged}
          onBlur={this.saveTodo}
          multiline
        />
        <Button
          icon={{ name: 'done' }}
          onPress={this.saveTodo}
          disabled={!content.length}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formWrapper: {
    flexDirection: 'row',
    paddingRight: 50,
    paddingTop: 20,
    alignItems: 'flex-end',
  }
});

export default connect(null, { addTodo })(withTheme(TodoForm));
