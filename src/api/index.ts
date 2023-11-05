import axios from 'axios';
import { API_URL, API_TOKEN } from '@env';

export const baseAPI = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
