import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    timeline: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
