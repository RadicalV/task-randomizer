import axios from "axios";

const API_URL = "http://localhost:5000/users";

const getCurrentUserData = (token?: string) =>
  axios.get(`${API_URL}/me`, { headers: { Authorization: `Bearer ${token}` } });

const getAllUsers = () => axios.get(`${API_URL}`);

const editUser = (id: string, data: {}) => {
  axios.put(`${API_URL}/${id}}`, data);
};

const deleteUser = (id: string) => {
  axios.delete(`${API_URL}/${id}`);
};

const userService = {
  getCurrentUserData,
  getAllUsers,
};

export default userService;
