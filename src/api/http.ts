import axios from 'axios';
import { apiUrl } from './host';

export const http = axios.create({
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' },
});
