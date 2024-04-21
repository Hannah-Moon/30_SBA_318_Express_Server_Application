const express = require("express");
const PORT = process.env.PORT || "3000";       
const app = express(); 


app.listen(PORT, (req, res) => {
    console.log(`Currently Listening on ${PORT}`);
  });