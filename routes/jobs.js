import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

/**
 * POST /api/jobs
 * Create a new job submission
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, description, timeline, budget } = req.body;

    // Basic validation
    if (!name || !email || !description || !timeline || !budget) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const job = new Job({
      name,
      email,
      description,
      timeline,
      budget,
    });

    await job.save();

    res.status(201).json({
      message: "Job submitted successfully",
    });
  } catch (error) {
    console.error("Job submission error:", error);
    res.status(500).json({
      message: "Server error submitting job",
    });
  }
});

export default router;
