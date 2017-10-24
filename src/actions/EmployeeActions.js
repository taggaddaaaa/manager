import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';


export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};


export const employeeCreate = ({ name, phone, shift }) => {
  /*console.log('name : ', name);
  console.log('phone : ', phone);
  console.log('shift : ', shift);*/
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    // "/users/12345/employees"
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' })
      });
  };
};
