import { authService } from "@services/auth.service";
import { NextFunction, Request, Response } from "express";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: { username: string } = req.body;
    const token = await authService.login(data.username);

    res.status(200).send({ token });
  } catch (error) {
    next(error);
  }
};
