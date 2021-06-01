import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';
import API from '../utils/API';

class EmployeeList extends Component {
  state = {
    randomEmployees: [],
    searchEmployee: ''
  };

  componentDidMount() {
    API.getRandomUsers().then((res) => {
      console.log('setting state', res);
      this.setState({ randomEmployees: res.data.results });
    });
    console.log('the state is set', this.randomEmployees);
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({ searchEmployee: value });
  };

  render() {
    return (
      <div>
        <label>Search Here</label>
        <input onChange={this.handleInputChange} placeholder="start typing" />
        <ul>
          {this.state.randomEmployees.map((employee) => (
            <EmployeeCard />
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
