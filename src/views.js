function Render(notes) {
  this.notes = notes;
}

Render.prototype.RenderNotes = function () {
  let notes = this.notes.getNotes();
  var output = "";
  for (var i = 0; i < notes.length; i++) {
    output += "<p id='" + notes[i].getId() + "'>" + notes[i].getTitle() + "</p><br>";
  }
  return output;
};

Render.prototype.RenderNoteText = function (id) {
  let note = this.notes.findNote(id);
  return "<p class='full' id='" + note.getId() + "full'>" + note.getText() + "</p>";
};
