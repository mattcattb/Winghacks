// src/api/axiosClient.js (or src/utils/axios.js, or similar)
import axios from 'axios';

const PORT = 3000
const url = `http://localhost:${PORT}/`

const axiosClient = axios.create({
  baseURL: url + 'api/', // Your API base URL
  // You can add other defaults here, like headers:
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  withCredentials: true // If you need to send cookies with requests
});



export default axiosClient;