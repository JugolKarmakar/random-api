const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Random User Api");
});

app.listen(port, () => {
  console.log(`Random User Data listening on port ${port}`);
});