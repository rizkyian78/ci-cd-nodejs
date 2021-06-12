const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/kitten", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log("connected database"));

const cat = mongoose.model(
  "Cat",
  {
    name: String,
    age: Number,
    gender: String,
  },
  "Cat"
);

module.exports = {
  cat,
};
