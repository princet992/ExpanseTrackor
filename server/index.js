import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import {
  deleteStudent,
  getStudent,
  student,
  updateStudent,
} from "./controller/StudentController.js";
import { expanseData, getExpanseData } from "./controller/ExpanseController.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//endPoint
app.post("/student", student);
app.put("/student", updateStudent);
app.delete("/student", deleteStudent);
app.get("/student", getStudent);

//expanse endPoint
  app.post("/expanseData", expanseData),
  app.get("/expanseData", getExpanseData),
  
  mongoose
    .connect(process.env.db_url)
    .then(() => {
      console.log("dataBase connected");
      app.listen(process.env.port, () => {
        console.log("server running at port ", +process.env.port);
      });
    })
    .catch((err) => console.log("error", err.message));
