const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");

async function createItem(client, data) {
  const db = client.db("app");
  const collection = db.collection("menu");

  const result = await collection.insertOne(data);

  return result;
}

async function getMenuItems() {
  const database = client.db("app");
  const menu = database.collection("menu");
  const menusList = await menu.find({}).toArray();

  return menusList;
}

module.exports = { createItem,getMenuItems };
