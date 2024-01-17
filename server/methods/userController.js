const bcrypt = require('bcrypt');

async function createUser(client, username, password) {
  const db = client.db('app');
  const collection = db.collection('users');

  // Хеширование пароля
  const hashedPassword = await bcrypt.hash(password, 10);

  // Сохранение пользователя
  const result = await collection.insertOne({
    username,
    password: hashedPassword,
  });
  return result;
}

async function findUser(client, username) {
  const db = client.db('app');
  const collection = db.collection('users');
  const user = await collection.findOne({ username });
  return user;
}

module.exports = { createUser, findUser };
