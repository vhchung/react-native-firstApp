import React, { Component } from 'react';
import { Spinner } from 'native-base';
import { Font, AppLoading } from 'expo';
import thunk from 'redux-thunk';
import allReducers from './src/reducers/index.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import AppWrapper from './src/AppWrapper';
const store = createStore(allReducers, applyMiddleware(thunk));

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      appIsReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({appIsReady: true});
  }
  render(){
    if (!this.state.appIsReady) {
      return <AppLoading />;
    }
    return(
      <Provider store= {store}>
        <AppWrapper />
      </Provider>
    );
  }
}
