const mongoose = require("mongoose");

module.exports = async () => {

  const uri = "mongodb://localhost:27017/contact";

  let db = await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  console.log("mongoDB Connected...");
};
