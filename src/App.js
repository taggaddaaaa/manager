// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class app extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAz3RaS1MXR0FfZywMvsW1rMM8A59DU6Bw",
      authDomain: "managemystaff-c0a2b.firebaseapp.com",
      databaseURL: "https://managemystaff-c0a2b.firebaseio.com",
      projectId: "managemystaff-c0a2b",
      storageBucket: "managemystaff-c0a2b.appspot.com",
      messagingSenderId: "904939818513"
    };

    firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}


export default app;
