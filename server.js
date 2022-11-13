const express = require("express");
const app = express();
const PORT = process.env.PORT || 6500;
const apiRoutes = require("./routes/apiRoutes.js")
const htmlRoutes = require("./routes/htmlRoutes.js")
app.use(express.json());
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)




app.listen(PORT, () => {
  console.log(`The Port being used ${PORT}!`);
});
