import axios from "axios";

const API_URL = "http://localhost:5000/auth";

const login = (username: string) =>
  axios.post(`${API_URL}/login`, {
    username,
  });

const authService = {
  login,
};

export default authService;
