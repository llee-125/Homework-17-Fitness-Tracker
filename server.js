const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tracker_db", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const apiRoutes = require("./routes/api-Routes.js");
const userRoutes = require("./routes/user-Routes.js");
app.use(apiRoutes, userRoutes);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
