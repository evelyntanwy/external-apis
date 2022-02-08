const express = require("express");
const request = require("superagent");

const router = express.Router();

// GET /api/v1/nasa/

// API key is kept secret in .env file
// check index.js for configuration

router.get("/", (req, res) => {
  return request
    .get(
      // `https://api.edamam.com/api/recipes/v2?api_id=${process.env.API_ID}&api_key=${process.env.API_KEY}&q=pizza&type=public`
      `https://api.edamam.com/api/recipes/v2?app_id=ccec1d0d&app_key=2d0793fa483cb29f43947eb7866626f9&q=chicken&type=public`
    ) // anything that needs to parse through env needs to have a process
    .then((response) => {
      //   console.log("routeTest", response.body);
      res.json(response.body);
      return null;
    })
    .catch((err) => {
      console.log("error", err.message);
    });
});

module.exports = router;
