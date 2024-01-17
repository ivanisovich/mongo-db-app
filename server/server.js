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
app.use(cors());
const dbName = "app";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
  },
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    // Optionally ping the database
    await client.db(dbName).command({ ping: 1 });
    console.log("Pinged MongoDB successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
}

connectToMongoDB().then(() => {
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await createUser(client, username, password);
    res
      .status(201)
      .send({ message: "Пользователь создан", userId: result.insertedId });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await findUser(client, username);

    if (user && (await bcrypt.compare(password, user.password))) {
      // Создание токена JWT
      const token = jwt.sign({ userId: user._id }, "секретный_ключ", {
        expiresIn: "24h",
      });
      res.send({ message: "Логин успешен", token });
    } else {
      res.status(400).send({ message: "Неверные учетные данные" });
    }
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
});
