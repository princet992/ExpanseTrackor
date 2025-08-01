import { studentModal } from "../model/StudentModel.js";
import jwttoken from "jsonwebtoken";
export const student = async (req, res) => {
  try {
    const data = await studentModal.create({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    });
    if (data) res.status(200).send({ message: "student added successfully" });
    else res.status(400).send({ message: "Failed to create" });
  } catch (error) {
    console.log("error", error);
  }
};

export const updateStudent = async (req, res) => {
  try {
    const data = await studentModal.updateOne({
      id: req.body._id,
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    });
    if (data) res.status(200).send({ message: "student updated successfully" });
    else res.status(400).send({ message: "Failed to update" });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const data = await studentModal.deleteOne({
      _id: req.body._id,
    });
    if (data.deletedCount === 1)
      res.status(200).send({ message: "student deleted successfully" });
    else res.status(400).send({ message: "Failed to delete" });
  } catch (error) {
    console.log("error", error);
  }
};

export const getStudent = async (req, res) => {
  try {
    const data = await studentModal.find({});
    res.status(200).send(data);
  } catch (error) {
    console.log("error", error);
  }
};
