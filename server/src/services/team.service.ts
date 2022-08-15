import { ITeam, Team } from "../models/team";
import { HttpException } from "../utils/httpException";

const getTeams = async () => {
  let teams = await Team.find();

  if (!teams) throw new HttpException(400, "Failed to retrieve teams");

  return teams;
};

const getTeam = async (id: string) => {
  let team = await Team.findById(id);

  if (!team) throw new HttpException(400, "Failed to retrieve teams");

  return team;
};

const createTeam = async (data: {}) => {
  let team = await Team.create(data);

  if (!team) throw new HttpException(400, "Failed to create a team");

  return team;
};

const updateTeam = async (id: string, data: ITeam) => {
  let team = await Team.findByIdAndUpdate(id, data);

  if (!team) throw new HttpException(400, "Failed to retrieve team");

  return team;
};

const deleteTeam = async (id: string) => {
  let team = await Team.findByIdAndDelete(id);

  if (!team) throw new HttpException(400, "Failed to remove team");

  return team;
};

export const teamService = {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
};
