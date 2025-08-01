import { ExpanseModal } from "../model/ExpanseModal.js";

export const expanseData = async (req, res) => {
  try {
    const data = await ExpanseModal.create({
      description: req.body.description,
      amount: req.body.amount,
      types: req.body.types,
    });
    if (data)
      res.status(200).send({ message: "Transaction added successfully" });
    else res.status(400).send({ message: "Failed to add transaction" });
  } catch (error) {
    console.log("error", error.message);
  }
};

export const updateExpanseData = async (req, res) => {
  try {
    const data = await ExpanseModal.updateOne({
      id: req.body._id,
      description: req.body.description,
      amount: req.body.amount,
      types: req.body.types,
    });
    if (data)
      res.status(200).send({ message: "Transaction updated successfully" });
    else res.status(400).send({ message: "Failed to update transactions" });
  } catch (error) {
    console.log("error", error.message);
  }
};

export const getExpanseData = async (req, res) => {
  try {
    const data = await ExpanseModal.find({});
    res.status(200).send(data);
  } catch (error) {
    console.log("error", error.message);
  }
};
