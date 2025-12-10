const express = require("express");
const emailReminderJob = require("../controller/notification");
const cronRouter = express.Router();

cronRouter.get("/internal/send-email-cron", async (req, res) => {
  const cronKey = req.headers["x-cron-key"];

  if (!cronKey || cronKey !== process.env.CRON_KEY) {
    return res.status(403).json({ message: "Forbidden" });
  }
  try {
    await emailReminderJob();
    res.json({ message: "✅ Email cron executed" });
  } catch (err) {
    console.error("❌ Cron failed:", err);
    res.status(500).json({ message: "Cron job failed" });
  }
});

module.exports = cronRouter;
