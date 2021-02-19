import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://134.0.115.32:8080/lab4/lk/'
});

const authAPI = {
  async login(username, password) {
    return axiosInstance.post('login', { 'username': username, 'password': password });
  },

  async register(username, password) {
    return axiosInstance.post('register', { 'username': username, 'password': password });
  },
  async logout(token) {
    return axiosInstance.post('logout', { 'token': token });
  },
}

export default authAPI;
