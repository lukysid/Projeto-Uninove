const express = require("express");
const app = express();
const port = 3000;

app.listen(3000, (err) => {
  if (err) {
    console.log("Deu erro!");
    return;
  }
  console.log("Subiu o server!!!");
});
