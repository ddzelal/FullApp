const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("CAO ");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
