var Render = (function() {
  return {

    navBar: function(notesList) {
      return Navbar(notesList)
    },
    notesPage: function(notesList) {
      return [Title(),
      Form(),
      NotesData(notesList),
      RenderNotes(notesList),].join("")
    },
    noteFull: function(notesList, note_id) {
      return [NotesData(notesList),
      RenderNoteText(note_id, notesList)].join("")
    }
  }

})
