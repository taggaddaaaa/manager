import React from 'react';
import { Scene, Actions, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';



const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene onRight={() => Actions.employeeCreate()}
                 rightTitle="Add"
                 key="EmployeeList"
                 component={EmployeeList}
                 title="Employees"
                 initial
          />
          <Scene key="employeeCreate"
                 component={EmployeeCreate}
                 title="Create Employee"
          />
        </Scene>
        <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
      </Scene>
    </Router>
  );
};


export default RouterComponent;
