const util = require("util");
const fs = require("fs");
const router = require("express").Router();

function readNotes() {
  const notes = fs.readFileSync("db/db.json", "utf-8");
  return JSON.parse(notes);
}
function writeNotes(notes) {
  fs.writeFileSync("db/db.json", JSON.stringify(notes));
}
function generateId() {
  return Math.random();
}
router.get("/notes", function (req, res) {
  const notes = readNotes();
  res.json(notes);

});

router.post("/notes", function (req, res) {
  const notes = readNotes();
  let newNote = req.body;
  newNote.id = generateId();
  notes.push(newNote);
  writeNotes(notes);
  res.json(newNote);
});

router.delete("/notes/:id", function (req, res) {
  const notes = readNotes();
  console.log(notes);

  const updatedNotes = notes.filter((note) => note.id != req.params.id);
  writeNotes(updatedNotes);
  res.json({ ok: true });
});

module.exports = router;
