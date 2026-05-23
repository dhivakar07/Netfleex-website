const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

const email = "dhivakar123@gmail.com";
const pass = 7801;

app.post("/login", function (req, res) {
  if (req.body.email === email && req.body.password == pass) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(3000, function () {
  console.log("Server Started....");
});
