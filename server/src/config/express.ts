import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import { Router } from "express";
import { CREDENTIALS, ORIGIN } from "../constants";
import errorMiddleware from "../middlewares/errorMiddleware";

const expressConfig = (routes: Router[]) => {
  const app = express();

  app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  routes.forEach((route) => {
    app.use("/", route);
  });

  app.use(errorMiddleware);

  return app;
};

export default expressConfig;
