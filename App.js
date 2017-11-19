/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { appReducer } from './app/reducers/reducers';
import { AppRoutes } from './app/config/Routes';
import * as actionCreators from './app/actions/actions';

class NavigatorApp extends Component {
  render() {
    return (
      <AppRoutes
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export const AppWithNavigationState = connect(mapStateToProps)(NavigatorApp);

export const store = createStore(appReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
