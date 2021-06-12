const express = require("express");
const app = express();
const { cat } = require("./cat");

app.get("/", (req, res) => {
  res.send("Okeeee");
});
app.get("/youtube", (req, res) => {
  res.send("Okesss");
});

// app.get("/cat", async (req, res) => {
//   try {
//     const kitten = await cat.find({});
//     console.log(kitten);
//     res.status(200).send(kitten);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.post("/cat", (req, res) => {
//   const payload = req.body;
//   const kitten = new cat(payload);
//   kitten.save().then(() => {
//     console.log("asdas");
//     res.status(200).send("Njeng kitten added 🐈");
//   });
// });

module.exports = app;
