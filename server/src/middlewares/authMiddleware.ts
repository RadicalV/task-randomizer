import { NextFunction, Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Bearer")) {
    res.status(401).send("Unauthorized");
    return;
  }

  try {
    const token = auth.slice(7);
    const decoded = authService.verifyToken(token);

    if (!decoded) {
      res.status(401).send("Unauthorized");
      return;
    }

    req.tokenData = decoded.id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
};
