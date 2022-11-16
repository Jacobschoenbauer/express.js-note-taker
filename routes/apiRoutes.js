const util = require("util");
const fs = require("fs");
const router = require("express").Router();
// sets up note to the json file
function readNotes() {
  const notes = fs.readFileSync("db/db.json", "utf-8");
  return JSON.parse(notes);
}
// stringifys notes
function writeNotes(notes) {
  fs.writeFileSync("db/db.json", JSON.stringify(notes));
}
// makes a random id
function generateId() {
  return Math.random();
}
// reads data
router.get("/notes", function (req, res) {
  const notes = readNotes();
  res.json(notes);

});
// creates data
router.post("/notes", function (req, res) {
  const notes = readNotes();
  let newNote = req.body;
  newNote.id = generateId();
  notes.push(newNote);
  writeNotes(notes);
  res.json(newNote);
});
// deletes data
router.delete("/notes/:id", function (req, res) {
  const notes = readNotes();
  console.log(notes);

  const updatedNotes = notes.filter((note) => note.id != req.params.id);
  writeNotes(updatedNotes);
  res.json({ ok: true });
});

module.exports = router;
