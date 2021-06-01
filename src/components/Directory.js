import React, { Component } from 'react';
import EmployeeList from './EmployeeList';
import Title from './Title';

class Directory extends Component {
  render() {
    return (
      <div>
        <Title />
        <EmployeeList />
      </div>
    );
  }
}
export default Directory;
