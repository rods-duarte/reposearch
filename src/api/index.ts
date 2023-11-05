import axios from 'axios';

export const baseAPI = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_TOKEN}`,
  },
});
