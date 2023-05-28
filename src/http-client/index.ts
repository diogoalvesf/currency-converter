import axios from 'axios';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER,
});

export default httpClient;
