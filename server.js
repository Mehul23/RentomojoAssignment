const express = require("express"),
  bodyParser = require("body-parser"),
  DB = require("./db");
  contact = require("./routes/contact");
  app = express();

DB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/contact", contact);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send("Error");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
