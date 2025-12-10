const cron = require("node-cron");
const emailReminderJob = require("./notification");

cron.schedule("* * * * *", emailReminderJob);

