import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// can not use env variable directly to backend, need dotenv packge
dotenv.config();

// connect to mongodb database
mongoose
  .connect(process.env.MONGO)
  .then((data) => {
    console.log(` - Mongodb connected with server.`);
  })
  .catch((err) => {
    console.log(err);
  });

// creating express server
const app = express();
app.listen(3000, () => {
  console.log(" - Server is running on port 3000.");
});
