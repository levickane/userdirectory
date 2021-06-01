import axios from 'axios';

export default {
  getRandomUsers: function () {
    axios.get('https://randomuser.me/api/');
  }
};
