import express from "express";
import Job from "../models/Job.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, description, timeline, budget } = req.body;

    if (!name || !email || !description || !timeline || !budget) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const job = new Job({
      name,
      email,
      description,
      timeline,
      budget,
    });

    await job.save();

    // 🔥 Send email notification
    await sendEmail(job);

    res.status(201).json({ message: "Job submitted successfully" });
  } catch (error) {
    console.error("Job submission error:", error);
    res.status(500).json({ message: "Server error submitting job" });
  }
});

export default router;
