import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Sesuaikan dengan port Express
});

export default api;