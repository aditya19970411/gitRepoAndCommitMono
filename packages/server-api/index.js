const express = require("express");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is the backend!!!");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`ERROR: ${err.message}`);
  } else {
    console.log(`Listening on Port: ${port}`);
  }
});
