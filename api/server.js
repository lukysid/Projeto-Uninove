const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3000, (err) => {
  if (err) {
    console.log("Deu erro!");
    return;
  }
  console.log("Subiu o server!!!");
});
