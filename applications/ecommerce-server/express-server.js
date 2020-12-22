const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { verifyToken } = require("./firebase.js");

const data = require("./data.json");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/items", (req, res) => {
  const content = data.items;
  res.json(content);
});
app.post("/items", (req, res) => {
  const body = req.body;
  console.log(body);
  res.json(body);
});
app.get("/itemCategories", (req, res) => {
  const content = data.itemCategories;
  res.json(content);
});
app.post("/verify", async (req, res) => {
  const { token } = req.body;
  const uid = await verifyToken(token);
  if (uid) {
    res.json({ uid });
  } else {
    res.status(413).json({ message: "Invalid user token" });
  }
});
app.post("/cart", async (req, res) => {
  console.log("Adding item to cart");
  const { userId, itemId, token } = req.body;
  const uid = await verifyToken(token);
  console.log(uid);
  if (uid === userId) {
    res.json({ message: "Success", uid });
  } else {
    res.status(413).json({ message: "Invalid user token" });
  }
});
app.get("/", (req, res) => {
  const content = { message: "Resource not found" };
  res.status(404).json(content);
});

app.listen(4000, () => console.log("Starting express server on port 4000"));
