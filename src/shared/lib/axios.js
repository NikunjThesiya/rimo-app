import axios from 'axios';

// Made Axios Instance With Default Settings and Base URL For Making API Requests Simpler and More Managable.
const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
