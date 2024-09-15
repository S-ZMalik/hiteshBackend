import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 9000, () => {
      console.log(`server is running on Port: ${process.env.PORT || 9000}`);
    });
  })
  .catch((error) => {
    console.log("MONGO db connection failed !!! ", err);
  });
