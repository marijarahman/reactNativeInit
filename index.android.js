import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';

import {Gradient} from './src/Gradient';
import { Dashboard } from './src/Dashboard';

export default class reactNativeInit extends Component {
  render() {
    return (
        <Gradient
            colors={['#1D6273', '#143D4D', '#181A20']}
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            style={styles.linearGradient}
        >
          <Dashboard/>
        </Gradient>
    );
  }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    }
});

AppRegistry.registerComponent('reactNativeInit', () => reactNativeInit);
