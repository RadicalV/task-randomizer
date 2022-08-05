import axios from "axios";

const API_URL = "http://localhost:5000/users";

const getCurrentUserData = (token?: string) =>
  axios.get(`${API_URL}/me`, { headers: { Authorization: `Bearer ${token}` } });

const getAllUsers = (token: string) =>
  axios.get(`${API_URL}`, { headers: { Authorization: `Bearer ${token}` } });

const userService = {
  getCurrentUserData,
  getAllUsers,
};

export default userService;
