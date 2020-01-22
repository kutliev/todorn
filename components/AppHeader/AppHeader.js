import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme, Header, Icon } from 'react-native-elements';

const AppHeader = ({ isLoggedIn, userName, onLogoutClick }) => (
  <Header
    leftComponent={{ text: 'TodoRN', style: styles.white }}
    centerComponent={
      isLoggedIn && { text: userName, style: styles.white }
    }
    rightComponent={
      isLoggedIn && (
        <Icon
          name='exit-to-app'
          color='#fff'
          onPress={() => onLogoutClick()}
        />
      )
    }
  />
);

const styles = StyleSheet.create({
  white: {
    color: '#fff',
  }
})

export default withTheme(AppHeader);
