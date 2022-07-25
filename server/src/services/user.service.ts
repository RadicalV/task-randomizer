import { HttpException } from "@utils/httpException";
import { User } from "../models/user";

const getData = async (id: string) => {
  let user = await User.findOne({ id });

  if (!user) throw new HttpException(400, "Failed to retrieve user");

  return user;
};

const getUsersData = async () => {
  let users = await User.find();

  if (!users) throw new HttpException(400, "Failed to retrieve user list");

  return users;
};

const updateUser = async (id: string, data: {}) => {
  const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

  if (!updatedUser) throw new HttpException(400, "Failed to retrieve user");

  return updatedUser;
};

const deleteUser = async (id: string) => {
  const userDeleted = await User.findByIdAndDelete(id);

  if (!userDeleted) throw new HttpException(400, "Failed to retrieve user");

  return userDeleted;
};

export const userService = { getData, getUsersData, updateUser, deleteUser };
