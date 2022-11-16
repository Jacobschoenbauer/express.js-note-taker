// calls express
const express = require("express");
// links to api and html in routes file
const apiRoutes = require("./routes/apiRoutes.js")
const htmlRoutes = require("./routes/htmlRoutes.js")
const app = express();
// sets port 
const PORT = process.env.PORT || 6500;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)




app.listen(PORT, () => {
  console.log(`The Port being used ${PORT}!`);
});
