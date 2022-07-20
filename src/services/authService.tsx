import axios from "axios";

const API_URL = "http://localhost:8080/api/v1}/auth";

const login = (username: string) =>
  axios.post(`${API_URL}/login`, {
    username,
  });

const authService = {
  login,
};

export default authService;
