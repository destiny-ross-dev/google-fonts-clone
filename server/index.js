require("dotenv").config();
const express = require("express");
const config = require("./config");
const {
  globalMiddleware
  //connect
} = require("./middleware");

// Initializes express server
const app = express();

// Global middleware
globalMiddleware(app);

app.use("*", (req, res, next) => {
  console.log("hit");
  res.status(200).json({ msg: "Fonts are Coming" });
});

const start = async () => {
  console.log(config);
  try {
    // await connect(app);
    app.listen(config.port, () => {
      console.log(`Rest api on http://localhost:${config.port}/`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
