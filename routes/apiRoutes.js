const util = require("util");
const fs = require("fs");
const router = require("express").Router();
//const uuidv1 = require("uuid/v1")
//const readFileAsync = util.promisify(fs.readFile)
//const writeFileAsync = util.promisify(fs.writeFile)

router.get("/notes", function (req, res) {
  let parsedData = util.promisify.apply(fs.readFile("../db/db.json", "utf8"));
  console.log(parsedData);
  res.json(parsedData);
});

router.post("/notes", function (req, res) {
  let newNote = req.body;
  parsedData.push(newNote);
  updateDb(newNote);
  return console.log("Added new note: " + newNote.title);
});

router.get("/api/notes/:id", function (req, res) {
  res.json(parsedData[req.params.id]);
});
module.exports = router;
