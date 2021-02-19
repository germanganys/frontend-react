import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://134.0.115.32:8080/lab4/api/points/'
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
