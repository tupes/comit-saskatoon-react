require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { getItems, getItem, getItemCategories } = require("./api");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/items", getItems);
app.get("/items/:id", getItem);
app.get("/itemCategories", getItemCategories);

app.get("/", (req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

app.listen(5000, () => console.log("Starting express server on port 5000"));
