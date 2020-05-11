const express = require("express");
const router = express.Router();
import { secretKey } from "../config";

const endpoint = "https://edamam-recipe-search.p.rapidapi.com/search";


router.get("/test", (req, res) => {
  res.send("Testing");
})