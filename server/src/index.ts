import expressConfig from "@config/express";
import mongooseConfig from "@config/mongoose";
import { NODE_ENV, PORT } from "@constants";
import { authRoute } from "@routes";
import * as http from "http";

process.on("uncaughtException", (err) => {
  console.error(err);
  process.exit(1);
});

const startServer = async () => {
  await mongooseConfig().then(() => {
    console.log("MongoDB connected");
  });
  //   await redisConfig().then(() => {
  //     console.log('Redis connected');
  //   });

  const app = expressConfig([authRoute.router]);
  const httpServ = http.createServer(app);

  httpServ.listen(PORT, () => {
    console.log(`ENV: ${NODE_ENV}`);
    console.log(`PORT: ${PORT}`);
  });
};

startServer();