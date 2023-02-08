require("dotenv").config();

const express = require("express");
const { title } = require("process");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World! Hello");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
