import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

const getAllTasks = () => axios.get(`${API_URL}`);

const getTask = (id: string) => axios.get(`${API_URL}/${id}`);

const editTask = (id: string, data: {}) => {
  axios.put(`${API_URL}/${id}`, data);
};

const deleteTask = (id: string) => {
  axios.delete(`${API_URL}/${id}`);
};

const addTask = (data: {}) => {
  axios.post(`${API_URL}`, data);
};

const taskService = {
  getTask,
  getAllTasks,
  editTask,
  deleteTask,
  addTask,
};

export default taskService;
