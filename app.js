const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res, next) => {
  res.json({
    mesg: "Hello Shiwanf Naidu",
  });
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
