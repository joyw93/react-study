const express = require("express");
const cors = require("cors");
const app = express();

app.use(
    cors({
      origin: ["http://127.0.0.1:800"],
      credentials: true,
    })
  );

app.get("/", (req, res) => {
  res.send("main");
});

app.get("/signup", (req, res) => {
  res.send("회원가입");
});

app.get("/login", (req, res) => {
  res.send("로그인");
});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
