const MONGO_URI = "mongodb://localhost:27017/test";
const JWT_SECRET = process.env.JWT_SECRET || "changeme";
const NODE_ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 5000;
const CREDENTIALS = process.env.CREDENTIALS === "true";
const ORIGIN = process.env.ORIGIN || "*";

export { MONGO_URI, JWT_SECRET, NODE_ENV, PORT, CREDENTIALS, ORIGIN };
