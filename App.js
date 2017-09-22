import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './src/components/PageOne';
import PageTwo from './src/components/PageTwo';
export default class App extends Component{
  constructor() {
    super();
    this.state = {
      appIsReady: false
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
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
        <Router hideNavBar= "true">
          <Scene key="root">
            <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
            <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
          </Scene>
        </Router>
    );
  }
}
