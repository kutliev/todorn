import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Alert,
} from 'react-native';

import { withTheme, Button, Text, Input, Icon } from 'react-native-elements';
import { setUser } from '../../store/actions';

class LoginScreen extends Component {
  state = {
    userName: '',
    password: '',
    userNameError: false,
    passwordError: false,
    isLoading: false,
    showPassword: false,
  }

  onTextChanged = (field) => (value) => {
    this.setState({
      [field]: value,
      [field + 'Error']: false,
    });
  }

  onLogInClicked = () => {
    this.setLoading();
    if (!this.validateFields()) {
      this.setLoading(false);
      this.showAlert('Please enter the credentials');
      return;
    }

    this.logIn();
  }

  setLoading = (isLoading = true) => {
    this.setState({ isLoading });
  }

  validateFields = () => {
    const {
      userName,
      password,
    } = this.state;

    const isUserNameValid = userName.length;
    const isPasswordValid = password.length;

    this.setState({
      userNameError: !isUserNameValid,
      passwordError: !isPasswordValid,
    })

    return isUserNameValid && isPasswordValid;
  }

  showAlert = (message) => {
    Alert.alert(
      'Error',
      message,
      { cancelable: true }
    );
  }

  toggleVisibility = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    })
  }

  logIn = () => {
    setTimeout(() => {
      const { userName } = this.state;
      this.setLoading(false);
      this.props.setUser({ name: userName });
    }, 500);
  }

  render() {
    const {
      userName,
      password,
      userNameError,
      passwordError,
      isLoading,
      showPassword,
    } = this.state;

    return (
      <View style={{ justifyContent: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Text h2>Log in</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            placeholder='Username'
            value={userName}
            onChangeText={this.onTextChanged('userName')}
            errorStyle={{ color: 'red' }}
            errorMessage={ userNameError ? 'Enter the user name' : null }
            leftIcon={
              <Icon
                name='perm-identity'
                size={24}
                color='#ccc'
              />
            }
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            placeholder='Password'
            textContentType='password'
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={this.onTextChanged('password')}
            errorStyle={{ color: 'red' }}
            errorMessage={ passwordError ? 'Enter the password' : null }
            leftIcon={
              <Icon
                name='https'
                size={24}
                color='#ccc'
              />
            }
            rightIcon={
              <Icon
                name={showPassword ? 'visibility-off' : 'visibility'}
                size={24}
                color='#ccc'
                onPress={this.toggleVisibility}
              />
            }
          />
        </View>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Button
            title="Log in"
            onPress={this.onLogInClicked}
            style={{ width: 100 }}
            loading={isLoading}
          />
        </View>
      </View>
    )
  }
}

export default connect(null, { setUser })(withTheme(LoginScreen));
