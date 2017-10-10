import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


class app extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)} >
        <View>
          <Text>
             hello!
          </Text>
        </View>
      </Provider>
    );
  }
}


export default app;
