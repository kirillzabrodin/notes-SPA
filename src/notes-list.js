function NotesList() {
  this.notes = [];
  this.next_id = 0
}

NotesList.prototype.createNote = function (note) {
  let new_note = new Note(note, this.next_id);
  this.next_id ++;
  this.notes.push(new_note);
};

NotesList.prototype.getNotes = function () {
  return this.notes
};

NotesList.prototype.findNote = function (id) {
  for (var i = 0; i < this.notes.length; i++) {
    if (this.notes[i].getId() == id) {
      return this.notes[i]
    }
  }
};
