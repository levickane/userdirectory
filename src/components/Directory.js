import React, { Component } from 'react';
import API from '../utils/API';

class Directory extends Component {
  state = {
    randomUsers: []
  };

  componentDidMount() {
    API.getRandomUsers().then((res) => {
      console.log('setting state', res);
      this.setState({ randomUsers: res.data.results });
    });
    console.log('the state is set', this.randomUsers);
  }

  render() {
    return <h1>This is the Directory</h1>;
  }
}
export default Directory;
