var RenderNotes = function (notesList) {
  let notes = notesList.getNotes()
  var output = "";
  for (var i = 0; i < notes.length; i++) {
    output += "<a class='btn' id='" + notes[i].getId() + "' href='#" + notes[i].getId() + "'>" + notes[i].getTitle() + "</a><br>";
  }
  return output;
};
