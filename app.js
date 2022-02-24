const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res, next) => {
  res.json({
    mesg: "~~Hello Shiwang Naidu",
  });
});

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
