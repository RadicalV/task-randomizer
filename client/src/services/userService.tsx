import axios from "axios";

const API_URL = "http://localhost:5000/users";

const getCurrentUserData = (token?: string) =>
  axios.get(`${API_URL}/me`, { headers: { Authorization: `Bearer ${token}` } });

const userService = {
  getCurrentUserData,
};

export default userService;
