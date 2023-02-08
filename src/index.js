require("dotenv").config();

const express = require("express");
const { title } = require("process");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send([{"id":1,"title":"Book 1","author":"Author 1"},
  {"id":2,"title":"Book 2","author":"Author 2"},
  {"id":3,"title":"Book 3","author":"Author 3"}]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
