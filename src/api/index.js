import axios from 'axios';

const API_BASE_URL = 'http://192.168.1.189:3001';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function fetchTasks() {
  return client.get('/tasks');
}

export function createTask(params) {
  return client.post('/tasks', params);
}