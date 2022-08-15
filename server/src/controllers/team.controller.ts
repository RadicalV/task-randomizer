import { teamService } from "@services/team.service";
import { NextFunction, Request, Response } from "express";

export const getTeams = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const teams = await teamService.getTeams();
    res.status(200).send(teams);
  } catch (error) {
    next(error);
  }
};

export const getTeam = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const team = await teamService.getTeam(req.params.id);
    res.status(200).send(team);
  } catch (error) {
    next(error);
  }
};

export const createTeam = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const team = await teamService.createTeam(req.body);
    res.status(200).send(team);
  } catch (error) {
    next(error);
  }
};

export const updateTeam = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const team = await teamService.updateTeam(req.params.id, req.body);
    res.status(200).send(team);
  } catch (error) {
    next(error);
  }
};

export const deleteTeam = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const team = await teamService.deleteTeam(req.params.id);
    res.status(200).send(team);
  } catch (error) {
    next(error);
  }
};
