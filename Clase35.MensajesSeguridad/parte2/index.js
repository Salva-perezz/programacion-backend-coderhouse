import dotenv from "dotenv";
import { createTransport } from "nodemailer";
dotenv.config();

const subject = process.argv[2] || "No subject";
const message = process.argv[3] || "No message";
const toAccount = process.argv[4];
const file = process.argv[5];

const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "salvaxelement@gmail.com",
    pass: process.env.PASS,
  },
});

const mailOptions = {
  from: "Servidor Node.js",
  to: toAccount,
  subject,
  html: message,
};

if (file) {
  mailOptions.attachments = [
    {
      path: new URL(`./${file}`, import.meta.url).pathname,
    },
  ];
}

try {
  const info = await transporter.sendMail(mailOptions);
  console.log(info);
} catch (err) {
  console.log(err);
}
