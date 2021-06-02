import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';
import API from '../utils/API';

class EmployeeList extends Component {
  state = {
    randomEmployees: [],
    filteredEmployees: []
  };

  componentDidMount() {
    API.getRandomUsers().then((res) => {
      this.setState({ randomEmployees: res.data.results });
      this.setState({ filteredEmployees: res.data.results });
    });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    if (value) {
      const newlist = this.state.randomEmployees.filter((employee) => {
        return employee.name.first.includes(value);
      });
      this.setState({ filteredEmployees: newlist });
    } else {
      this.setState({ filteredEmployees: this.state.randomEmployees });
    }
  };

  handleSort = (event) => {
    const target = event.target.innerHTML;
    console.log(target);
    switch (target) {
      case 'Name':
        console.log('hooray');
        this.setState({
          filteredEmployees: this.state.filteredEmployees.sort((a, b) => {
            if (a.name.first < b.name.first) {
              return -1;
            } else if (a.name.first > b.name.first) {
              return 1;
            }
            return 0;
          })
        });
        break;
      case 'Location':
        console.log('supG!');
        this.setState({
          filteredEmployees: this.state.filteredEmployees.sort((a, b) => {
            if (a.location.country < b.location.country) {
              return -1;
            } else if (a.location.country > b.location.country) {
              return 1;
            }
            return 0;
          })
        });
        break;
      case 'Phone':
        console.log('thephone!');
        this.setState({
          filteredEmployees: this.state.filteredEmployees.sort((a, b) => {
            if (a.phone < b.phone) {
              return -1;
            } else if (a.phone > b.phone) {
              return 1;
            }
            return 0;
          })
        });
        break;
      default:
        break;
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
              <th onClick={this.handleSort} scope="col">
                Name
              </th>
              <th onClick={this.handleSort} scope="col">
                Location
              </th>
              <th onClick={this.handleSort} scope="col">
                Phone
              </th>
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
