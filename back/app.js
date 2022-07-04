const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:800"],
  })
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/signup", (req, res) => {

});

app.post("/login", (req, res) => {

});

app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});
