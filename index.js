const express = require("express");
const marked = require("marked");
const fs = require("fs");
const rateLimit = require("express-rate-limit");
const pharmacies = require("./public/pharmacies.json");

const app = express();
const port = 3000;

app.enable("trust proxy");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.get("/", (req, res, next) => {
  fs.readFile("public/docs.md", "utf8", (error, result) => {
    if (error) {
      next(error);
    } else {
      res.send(marked(result));
    }
  });
});

app.get("/pharmacies", (req, res, next) => {
  res.json(pharmacies);
});

app.listen(port, () => console.log(`Listening at ${port}!`));
