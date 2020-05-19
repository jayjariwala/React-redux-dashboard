const express = require("express");
const app = express();
const cors = require("cors");
const transaction = require("./transactions");
const rewards = require("./rewards");

app.use(cors());

app.get("/user/transactions", (req, res) => {
  res.json(transaction);
});

app.get("/user/rewards", (req, res) => {
  res.json(rewards);
});

const server = app.listen(8000, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log("The server is runing on 8000 port");
});
