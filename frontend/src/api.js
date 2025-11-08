import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getTasks = async () => {
  return axios.get(`${API_URL}/tasks`);
};

export const createTask = async (title) => {
  return axios.post(`${API_URL}/tasks?title=${title}`);
};
