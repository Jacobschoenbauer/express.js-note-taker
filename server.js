const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 6500;
const apiRoutes = require("./routes/apiRoutes.js")
const htmlRoutes = require("./routes/htmlRoutes.js")

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)
//app.get("*", (req, res) =>
//  res.sendFile(path.join(__dirname, "./public/index.html"))
//);
//app.get("/notes", (req, res) =>
 // res.sendFile(path.join(__dirname, "./public/notes.html"))
//);



app.listen(PORT, () => {
  console.log(`The Port being used ${PORT}!`);
});
