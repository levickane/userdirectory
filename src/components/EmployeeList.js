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
  handleSearchFilter = () => {
    // this.randomEmployees.filter((input) => {
    //   this.state.randomEmployees.forEach((employee) => {
    //     //if employee.name contains whatevers in searchEmployee
    //     //then this.setState({randomEmployees: employee})
    //   });
    // });
    //  ;
    console.log(this.state.randomEmployees);
    const filteredEmployees = this.state.randomEmployees.filter((employee) => {
      console.log(employee);
      employee.name.first.includes(this.searchEmployee);
    });
    this.setState({ randomEmployees: filteredEmployees });
  };

  render() {
    return (
      <div>
        <label>Search Here</label>
        <input
          onChange={(this.handleInputChange, this.handleSearchFilter)}
          placeholder="start typing"
        />
        <ul>
          {this.state.randomEmployees.map((employee) => (
            <EmployeeCard
              key={employee.login.uuid}
              name={(employee.name.first, employee.name.last)}
              location={
                (employee.location.city,
                employee.location.state,
                employee.location.country)
              }
              phone={employee.phone}
              picture={employee.picture.thumbnail}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;
