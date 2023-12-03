import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
// import listingRouter from "./routes/listing.route.js";
// import cookieParser from "cookie-parser";
import path from "path";
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

// allow json as input(body.body in json format of request) to the server
app.use(express.json());

app.listen(3000, () => {
  console.log(" - Server is running on port 3000.");
});

//use all routes creted using router
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// if we get any error from backend (like duplicate key error)
// then we have to handele it and show it properly to the user.
// becuase of the we can use  middleware. here "next" is the midelewere
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// some error the we can to throw like - passowd does not mactch etc
// for that we create a utils/error.js
// here both will do same work
// .................case-1............
// try {
//   await newUser.save();
//   res.status(201).json("User created successfully!");
// } catch (error) {
//   next(error);
// }
// .................case-2............
// try {
//   await newUser.save();
//   res.status(201).json("User created successfully!");
// } catch (error) {
//   next(errorHandler(500, 'password doesnot match'));
// }
