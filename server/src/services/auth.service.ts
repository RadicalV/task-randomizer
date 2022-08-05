import { HttpException } from "@utils/httpException";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants";
import { User } from "@models/user";

const login = async (data: string) => {
  let user = await User.findOne({ username: data });

  if (!user) {
    user = await User.create({ username: data });
  }

  const isUsernameMatching = data === user.username;
  if (!isUsernameMatching) throw new HttpException(400, "Failed to login");

  const token = await signToken(user._id);

  return token;
};

const signToken = (id: string) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ id }, JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
      if (err) reject(new HttpException(500, "Internal server error"));

      resolve(token);
    });
  });
};

const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    return decoded;
  } catch (err) {
    throw new HttpException(401, "Unauthorized");
  }
};

export const authService = { login, verifyToken };
