require("dotenv").config();
const server = require("./server");
const PORT = process.env.PORT || 4000;
const express = require("express");

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => {
  console.log(`This app running on http://localhost:${PORT}`);
});
