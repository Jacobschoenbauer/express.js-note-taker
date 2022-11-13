const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 6500;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

fs.readFile("./db/db.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const parsedData = JSON.parse(data);
    parsedData.push(parsedData);
    //writeToFile(file, parsedData);
    app.get("/api/notes", function (req, res) {
      res.json(parsedData);
    });

    app.post("/api/notes", function (req, res) {
      let newNote = req.body;
      parsedData.push(newNote);
      updateDb();
      return console.log("Added new note: " + newNote.title);
    });

    app.get("/api/notes/:id", function (req, res) {
      res.json(parsedData[req.params.id]);
    });
  }
});

app.listen(PORT, () => {
  console.log(`The Port being used ${PORT}!`);
});
