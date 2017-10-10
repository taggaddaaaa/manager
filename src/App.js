import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


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
    return (
      <Provider store={createStore(reducers)} >
        <LoginForm />
      </Provider>
    );
  }
}


export default app;
