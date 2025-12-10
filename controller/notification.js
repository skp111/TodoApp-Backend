const Todo = require("../model/todoModel");
const sendEmail = require("./sendEmail");

async function emailReminderJob() {
  const now = new Date();
  console.log("⏰ Running email reminder job at", now.toISOString());

  const dueTodos = await Todo.find({
    deadline: { $lte: now },
    status: false,
    emailSent: false,
  }).populate("createdBy");

  console.log(`✅ Found ${dueTodos.length} due todos`);

  for (const todo of dueTodos) {
    if (todo.retryCount >= 3) {
      console.log("❌ Max retries reached for:", todo._id);
      continue;
    }

    try {
      console.log("📧 Sending email to:", todo.createdBy.email);

      await sendEmail({
        to: todo.createdBy.email,
        subject: `Task ${todo.task} is overdue`,
        html: `Your task ${todo.description} was due at ${todo.deadline}`,
      });

      todo.emailSent = true;
      console.log("✅ Email sent to:", todo.createdBy.email);

    } catch (err) {
      todo.retryCount += 1;
      console.error("❌ Email failed:", err.message);
    }

    await todo.save();
  }
}

module.exports = emailReminderJob;
