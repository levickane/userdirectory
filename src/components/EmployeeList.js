import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';
import API from '../utils/API';

class EmployeeList extends Component {
  state = {
    randomEmployees: [],
    searchEmployee: '',
    filteredEmployees: []
  };

  componentDidMount() {
    API.getRandomUsers().then((res) => {
      console.log('setting state', res);
      this.setState({ randomEmployees: res.data.results });
      this.setState({ filteredEmployees: res.data.results });
    });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    console.log(value);
    if (value) {
      const newlist = this.state.randomEmployees.filter((employee) => {
        console.log('this the employee', employee);
        return employee.name.first.includes(value);
      });
      console.log('newlist here', newlist);
      this.setState({ filteredEmployees: newlist });
    } else {
      this.setState({ filteredEmployees: this.state.randomEmployees });
    }
  };

  render() {
    return (
      <div>
        <label>Search Here</label>
        <input onChange={this.handleInputChange} placeholder="start typing" />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Location</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredEmployees.map((employee) => (
              <EmployeeCard
                key={employee.login.uuid}
                firstName={employee.name.first}
                lastName={employee.name.last}
                location={
                  (employee.location.city,
                  employee.location.state,
                  employee.location.country)
                }
                phone={employee.phone}
                picture={employee.picture.thumbnail}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;
