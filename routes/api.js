const axios = require("axios");
const config = require("../config");
const express = require("express");
const router = express.Router();
const R = require('ramda');

const endpoint = "https://api.edamam.com/search";

router.get("/search", async (req, res) => {
  await axios.get(endpoint, {
    params: {
      q: req.query.search,
      app_id: config.id,
      app_key: config.secretKey,
      from: req.query.from,
      to: req.query.to
    }
  }).then(response => {
    res.json(R.omit(["more", "q"],response.data));
  }).catch(err => {
    console.log("🔥", err);
    res.status(500).json({status:500,error: err});
  });
});

module.exports = router;