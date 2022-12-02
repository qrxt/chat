import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRouteHandler from "./routes/auth";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.port || 5000;

app.use("/", authRouteHandler);

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(process.env.MONGODB_URI!)
  .then((connection) => {
    console.log("Successfully connected to database");

    return connection;
  })
  .then(() => {
    app.listen(port, () => console.log(`Running on port ${port}`));
  })
  .catch((e) => console.error(`Failed to connect to database: ${e}`));
