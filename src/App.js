import react, { component } from 'react';
import { view, text } from 'react-native';
import { provider } from 'react-redux';
import { createstore } from 'redux';


class app extends component {
  render() {
    return (
      <provider store={createstore()} >
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
