import mongoose from "mongoose";

const expanseSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    types: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const ExpanseModal = new mongoose.model("expanseTrack", expanseSchema);
