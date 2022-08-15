import { taskService } from "@services/task.service";
import { NextFunction, Request, Response } from "express";

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await taskService.getTasks();
    res.status(200).send(tasks);
  } catch (error) {
    next(error);
  }
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await taskService.getTask(req.params.id);
    res.status(200).send(task);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(200).send(task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    res.status(200).send(task);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await taskService.deleteTask(req.params.id);
    res.status(200).send(task);
  } catch (error) {
    next(error);
  }
};
