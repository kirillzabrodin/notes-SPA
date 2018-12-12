function Render() {
}

Render.prototype.RenderNotes = function (noteList) {
  let notes = noteList.getNotes()
  var output = "";
  for (var i = 0; i < notes.length; i++) {
    output += "<a id='" + notes[i].getId() + "' href='#" + notes[i].getId() + "'>" + notes[i].getTitle() + "</a><br>";
  }
  return output;
};

Render.prototype.RenderNoteText = function (id, noteList) {
  let note = noteList.findNote(id);
  return "<a class='full' href='#home' id='" + note.getId() + "full'>" + note.text + "</a>";
};

Render.prototype.Form = function () {
  return "<textarea rows='4' cols='50' id='note-input'></textarea>" +
  "<br>" +
  "<a id='submit' class='btn'>Submit Note</a>"
};

Render.prototype.Title = function () {
  return "<h1 class='title'>Hello Ed, I am not a killer machine and I'm definitely not tracking you :)</h1>"
};

Render.prototype.NotesData = function () {
  return "<div id='notes'></div>" +
  "<br>" +
  "<div id='full-note'></div>"
};
