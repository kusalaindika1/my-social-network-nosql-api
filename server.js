const mongoose = require("mongoose");
const express = require("express");
const apiRoutes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4000;
const dbUrl = "mongodb://localhost:27017/social-network-api";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  })
  .catch((err) => console.log(err));

mongoose.set("debug", true);
