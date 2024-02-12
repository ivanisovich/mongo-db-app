const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const QRCode = require('qrcode');


async function createUser(client, email, password,role) {
  const db = client.db("app");
  const collection = db.collection("users");
  const qrCodeUrl = await generateQR(email);


  const existingUser = await collection.findOne({ email });
  if (existingUser) {
    throw new Error('Пользователь с таким email уже существует');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const emailToken = crypto.randomBytes(20).toString("hex");

  await sendEmail({
    to: email,
    subject: "Подтверждение почты",
    html: `Пожалуйста, перейдите по ссылке для подтверждения почты: <a href="http://localhost:3001/confirm-email/${emailToken}">Подтвердить</a>`,
  });

  const result = await collection.insertOne({
    email,
    password: hashedPassword,
    emailToken,
    emailVerified: false,
    qrCode: qrCodeUrl,
    role:role,
    stickers: 0
  });

  return result;
}

async function findUser(client, email) {
  const db = client.db("app");
  const collection = db.collection("users");
  const user = await collection.findOne({ email });
  return user;
}

async function sendEmail({ to, subject, html }) {
  let transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: "ivanisovich@yandex.ru",
      pass: "Qweqweasdasd123123",
    },
  });

  let mailOptions = {
    from: "ivanisovich@yandex.ru",
    to: to,
    subject: subject,
    html: html,
  };

  await transporter.sendMail(mailOptions);
}

async function generateQR(email) {
  try {
    const qrCodeUrl = await QRCode.toDataURL(email);
    return qrCodeUrl;
  } catch (error) {
    console.error(error);
  }
}


module.exports = { createUser, findUser};
