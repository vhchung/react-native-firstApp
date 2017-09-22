import React, { Component } from 'react';
import { Spinner } from 'native-base';
import { Font } from 'expo';
import allReducers from './src/reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './src/components/counter.js';
const store = createStore(allReducers);
export default class App extends Component{
  state = {
    appIsReady: false,
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
      return <Spinner color='red' />;
    }
    return(
      <Provider store= {store}>
        <Counter />
      </Provider>
    );
  }
}
