import { ITask, Task } from "../models/task";
import { HttpException } from "../utils/httpException";

const getTasks = async () => {
  let tasks = await Task.find();

  if (!tasks) throw new HttpException(400, "Failed to retrieve teams");

  return tasks;
};

const getTask = async (id: string) => {
  let task = await Task.findById(id);

  if (!task) throw new HttpException(400, "Failed to retrieve teams");

  return task;
};

const createTask = async (data: {}) => {
  let task = await Task.create(data);

  if (!task) throw new HttpException(400, "Failed to create a team");

  return task;
};

const updateTask = async (id: string, data: ITask) => {
  let task = await Task.findByIdAndUpdate(id, data);

  if (!task) throw new HttpException(400, "Failed to retrieve team");

  return task;
};

const deleteTask = async (id: string) => {
  let task = await Task.findByIdAndDelete(id);

  if (!task) throw new HttpException(400, "Failed to remove team");

  return task;
};

export const taskService = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
