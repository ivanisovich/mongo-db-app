const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://admin:123@cluster0.yuz9r8i.mongodb.net/?retryWrites=true&w=majority";
const jwt = require("jsonwebtoken");
const { createUser, findUser } = require('./methods/userController');

const app = express();
app.use(express.json());

const dbName = "app";

const corsOptions = {
  origin: 'http://localhost:3000', // Замените на домен вашего клиента
  credentials: true, // Это позволит обрабатывать куки
};
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
  },
});

app.use(cors(corsOptions));

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    await client.db(dbName).command({ ping: 1 });
    console.log("Pinged MongoDB successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
}

connectToMongoDB().then(() => {
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
});

app.post("/register", async (req, res) => {
  try {

    const { email, password } = req.body;
    const result = await createUser(client, email, password);
    res
      .status(201)
      .send({ message: "Пользователь создан", userId: result.insertedId });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUser(client, email);

    if (user && (await bcrypt.compare(password, user.password))) {
      // Создание токена JWT
      const token = jwt.sign({ userId: user._id }, "секретный_ключ", {
        expiresIn: "24h",
      });

      res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'None',
        secure: true,
        maxAge: 24 * 60 * 60 * 1000 // 24 часа
      });

      res.send({ email: user.email,qrCode: user.qrCode });
    } else {
      res.status(400).send({ message: "Неверные учетные данные" });
    }
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

app.get('/confirm-email/:token', async (req, res) => {
  try {
    const db = client.db('app');
    const collection = db.collection('users');

    const user = await collection.findOne({ emailToken: req.params.token });

    if (!user) {
      return res.status(400).send('Неверный токен подтверждения.');
    }

    await collection.updateOne({ _id: user._id }, { $set: { emailVerified: true, emailToken: null } });
    res.send('Почта подтверждена.');
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});
