import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9001/lab4/api/points/'
});

const entryAPI = {
  async getEntries(token) {
    return axiosInstance.post('get', {
      'token': token,
    });
  },

  async checkEntry(x, y, r, token) {
    return axiosInstance.post('add', {
      'x': x,
      'y': y,
      'r': r,
      'token': token,
    });
  },

  async clearEntries(token) {
    return axiosInstance.post('clear', {
      'token': token,
    });
  }
}

export default entryAPI;
