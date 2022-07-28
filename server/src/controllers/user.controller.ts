import { userService } from "@services/user.service";
import { NextFunction, Request, Response } from "express";

export const getCurrentUserData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.getData(req.tokenData);

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userService.getUsersData();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updated = await userService.updateUser(req.params.id, req.body);
    res.status(200).send(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    res.status(200).send(deletedUser);
  } catch (error) {
    next(error);
  }
};
