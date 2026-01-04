import nodemailer from "nodemailer";

const sendEmail = async (job) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // 🔥 IMPORTANT: must be false for port 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Bridgeway" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Job Submission — Bridgeway",
    html: `
      <h2>New Job Submitted</h2>
      <p><strong>Name:</strong> ${job.name}</p>
      <p><strong>Email:</strong> ${job.email}</p>
      <p><strong>Description:</strong><br/>${job.description}</p>
      <p><strong>Timeline:</strong> ${job.timeline}</p>
      <p><strong>Budget:</strong> ${job.budget}</p>
      <hr/>
      <p>Bridgeway Admin</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
