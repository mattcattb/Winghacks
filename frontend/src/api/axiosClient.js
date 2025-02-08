// src/api/axiosClient.js (or src/utils/axios.js, or similar)
import axios from 'axios';

const PORT = 3000
const url = `http://localhost:${PORT}`

const axiosClient = axios.create({
  baseURL: url + '/api', // Your API base URL
  // You can add other defaults here, like headers:
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  withCredentials: true // If you need to send cookies with requests
});

// Add interceptors for handling responses globally (optional but very useful)
axiosClient.interceptors.response.use(
  (response) => {
    // Any successful response handling
    return response.data; // Return the data from the response
  },
  (error) => {
    // Any error handling
    console.error("Axios error:", error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
      console.error("Request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    return Promise.reject(error); // Re-reject the promise so the calling function can handle it
  }
);


export default axiosClient;