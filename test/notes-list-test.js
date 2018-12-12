describe('NotesList', function() {

  describe('#findNote', function() {
    it('returns your note by Id', function() {
      let list =  new NotesList();
      list.createNote("A note");
      let note = list.getNotes()[0];
      expect(list.findNote(0)).toEqual(note);
    })
  })

  describe('#createNote', function() {
    it('has an array of Notes', function() {
      let list =  new NotesList();
      list.createNote("A note");
      expect(list.getNotes().length).toEqual(1);
    })
  })

  describe('#getNotes', function() {
    it('returns your notes', function() {
      let list =  new NotesList();
      list.createNote("A note");
      let note_text = list.getNotes()[0].text;
      expect(note_text).toEqual("A note");
    })
  })

})
