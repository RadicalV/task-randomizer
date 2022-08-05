import { ITeam, Team } from "../models/team";
import { HttpException } from "../utils/httpException";

const getTeams = async () => {
  let teams = await Team.find();

  if (!teams) throw new HttpException(400, "Failed to retrieve teams");

  return teams;
};

const createTeam = async (data: {}) => {
  let team = await Team.create(data);

  if (!team) throw new HttpException(400, "Failed to create a team");

  return team;
};

const updateTeam = async (id: string, data: ITeam) => {
  //Add check if less 2 in array do this
  //Else change user id based on given id
  //Also add checks so color ant name can't be ""

  let team = await Team.updateOne(
    {
      _id: id,
    },
    {
      $addToSet: { users: data.users },
      $set: { name: data.name, color: data.color },
    }
  );

  if (!team) throw new HttpException(400, "Failed to retrieve team");

  return team;
};

const deleteTeam = async (id: string) => {
  let team = await Team.findByIdAndDelete(id);

  if (!team) throw new HttpException(400, "Failed to remove team");

  return team;
};

export const teamService = { getTeams, createTeam, updateTeam, deleteTeam };
