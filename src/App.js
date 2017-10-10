import React, { component } from 'react';
import { view, text } from 'react-native';
import { provider } from 'react-redux';
import { createstore } from 'redux';
import reducers from './reducers';


class app extends component {
  render() {
    return (
      <provider store={createstore(reducers)} >
        <view>
          <text>
             hello!
          </text>
        </view>
      </provider>
    );
  }
}


export default app;
