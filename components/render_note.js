var RenderNote = function (id, notesList) {
  let note = notesList.findNote(id);
  return "<a class='btn' id='" + note.getId() + "full'>" + note.text + "</a>";
};
