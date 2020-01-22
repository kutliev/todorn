import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from 'react-native-elements';
import LoginScreen from './screens/LoginScreen';
import WorkScreen from './screens/WorkScreen';
import AppHeader from './components/AppHeader';
import { isLoggedIn, getUserName } from './store/selectors';
import { removeUser } from './store/actions';

const App = (props) => {
  const { accountActive, userName } = props;
  const onLogoutClick = () => {
    props.removeUser();
  }

  return (
    <ThemeProvider>
      <View style={styles.wrapper}>
        <AppHeader
          userName={userName}
          isLoggedIn={accountActive}
          onLogoutClick={onLogoutClick}
        />
        <SafeAreaView style={styles.safeAreaView}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              {
                accountActive
                  ? <WorkScreen />
                  : <LoginScreen />
              }
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fffffa'
  },
  safeAreaView: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fffffa',
  },
  body: {
    padding: 10,
    flex: 1,
  },
});

const mapStateToProps = state => {
  const accountActive = isLoggedIn(state);
  const userName = accountActive
    ? getUserName(state)
    : '';

  return { accountActive, userName };
}

export default connect(mapStateToProps, { removeUser })(App);
