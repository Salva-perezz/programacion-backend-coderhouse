import { createTransport } from "nodemailer";

const TEST_MAIL = "jalyn46@ethereal.email";
const subject = process.argv[2] || "No subject";
const message = process.argv[3] || "No message";

const transporter = createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: "S2Vv8anWHHJuzwrdvc",
  },
});

const mailOptions = {
  from: "Servidor Node.js",
  to: TEST_MAIL,
  subject,
  html: message,
};

try {
  const info = await transporter.sendMail(mailOptions);
  console.log(info);
} catch (err) {
  console.log(err);
}
