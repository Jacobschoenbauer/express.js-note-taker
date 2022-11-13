const util = require("util")
const fs = require("fs")

const router = require("express").Router();

router.get("/api/notes", function (req, res) {
  let parsedData= util.promisify.apply(fs.readFile("../db/db.json", "utf8"))
  console.log(parsedData)
    res.json(parsedData);
});

router.post("/api/notes", function (req, res) {
  let newNote = req.body;
  parsedData.push(newNote);
  updateDb();
  return console.log("Added new note: " + newNote.title);
});

router.get("/api/notes/:id", function (req, res) {
  res.json(parsedData[req.params.id]);
});
module.exports = router;
