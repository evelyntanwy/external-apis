const path = require("path");
const express = require("express");

const welcome = require("./routes/welcome");
const nasa = require("./routes/nasa");
const recipes = require("./routes/recipes");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));

server.use("/api/v1/welcome", welcome);
server.use("/api/v1/nasa", nasa);
server.use("/api/v1/recipes", recipes);

module.exports = server;
