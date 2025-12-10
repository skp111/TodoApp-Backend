const SibApiV3Sdk = require("sib-api-v3-sdk");
const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

async function sendEmail({ to, subject, html }) {
  try {
    await apiInstance.sendTransacEmail({
      to: [{ email: to }],
      subject,
      htmlContent: html,
      sender: {
        email: "sameerkumarpadhi97@gmail.com", 
        name: "Todo App",
      },
    });
    console.log("✅ Email sent to:", to);
  } catch (err) {
    console.error("❌ Email failed", err.response?.body || err.message);
    throw err;
  }
}

module.exports = sendEmail;
