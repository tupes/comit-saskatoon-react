const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { verifyToken, getUserByUid } = require("./firebase.js");

const data = require("./data.json");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/user", async (req, res) => {
  console.log("Verifying user token");
  const { token } = req.body;
  const uid = await verifyToken(token);
  res.json(uid);
});
app.get("/user", async (req, res) => {
  const content = await getUserByUid("KbY5HCC1pdSvnY5sEBBBUBbiqrm1");
  res.json(content);
});
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
app.get("/", (req, res) => {
  const content = { message: "Resource not found" };
  res.status(404).json(content);
});

app.listen(4000, () => console.log("Starting express server on port 4000"));
