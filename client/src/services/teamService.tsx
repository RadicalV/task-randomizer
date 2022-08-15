import axios from "axios";

const API_URL = "http://localhost:5000/teams";

const getAllTeams = () => axios.get(`${API_URL}`);

const getTeam = (id: string) => axios.get(`${API_URL}/${id}`);

const editTeam = (id: string, data: {}) => {
  axios.put(`${API_URL}/${id}`, data);
};

const deleteTeam = (id: string) => {
  axios.delete(`${API_URL}/${id}`);
};

const teamService = {
  getAllTeams,
  editTeam,
  deleteTeam,
  getTeam,
};

export default teamService;
