var noteList = new NotesList();

function SubmitNote() {
  noteList.createNote(document.getElementById('note-input').value);
  var render = new Render(noteList);
  document.getElementById('notes').innerHTML = render.RenderNotes();
  document.getElementById("note-input").value = "";
  AddListeners(render);
}

function AddListeners(render) {
  for (var i = 0; i < noteList.getNotes().length; i++) {
    document.getElementById(i).addEventListener("click", function () {
      document.getElementById('full-note').innerHTML = "";
      document.getElementById('full-note').innerHTML = render.RenderNoteText(this.id);
    });
  }
}
