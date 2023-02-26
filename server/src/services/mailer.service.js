const nodemailer = require("nodemailer");
const { env } = require("process");
const sendEmail = async (from, to) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.APP_MAIN_EMAIL,
    to: to,
    subject: "New Invitation",
    text: `${from} - Wants to connect with you.`,
  };

  try {
    const response = await transporter.sendMail(mailOptions);

    return { error: false, data: response };
  } catch (error) {
    return { error: true, message: error };
  }
};

module.exports = { sendEmail };
