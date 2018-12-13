function Render() {
}

Render.prototype.RenderNotes = function (noteList) {
  let notes = noteList.getNotes()
  var output = "";
  for (var i = 0; i < notes.length; i++) {
    output += "<a class='btn' id='" + notes[i].getId() + "' href='#" + notes[i].getId() + "'>" + notes[i].getTitle() + "</a><br>";
  }
  return output;
};

Render.prototype.RenderNoteText = function (id, noteList) {
  let note = noteList.findNote(id);
  return "<a class='btn' id='" + note.getId() + "full'>" + note.text + "</a>";
};

Render.prototype.Form = function () {
  return "<textarea rows='4' cols='50' id='note-input'></textarea>" +
  "<br>" +
  "<a id='submit' class='btn'>Submit Note</a>"
};

Render.prototype.Title = function () {
  return "<h3 class='btn'>Hello Ed, I am not a killer machine and I'm definitely not tracking you :)</h3><br>"
};

Render.prototype.NotesData = function () {
  return "<div id='notes'></div>" +
  "<br>" +
  "<div id='full-note'></div>"
};

Render.prototype.NavBar = function (noteList) {
  let notes = noteList.getNotes();
  output = "<ul><li><a class='navbar active' href='#home'>Home</a></li>"
  for (var i = 0; i < notes.length; i++) {
    output += "<li><a class='navbar' href='#" + notes[i].getId() + "'>" + notes[i].getTitle() + "</li>";
  }
  output += "</ul>"
  return output;
}
