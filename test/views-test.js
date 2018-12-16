describe('Views tests', function() {

  describe('#notesPage', function() {
    it('returns note page with notes', function() {
      var notepad = new NotesList();
      notepad.createNote("Hello");
      var render = new Render();
      expected = "<a class='btn' id='6' href='#6'>Hello</a><br>"
      expect(RenderNotes(notepad)).toEqual(expected);
    })
  })

  describe('#noteFull', function() {
    it('returns note text', function() {
      var notepad = new NotesList();
      notepad.createNote("Hello");
      var render = new Render();
      expected = "<a class='btn' id='7full'>Hello</a>"
      expect(RenderNote(7, notepad)).toEqual(expected);
    })
  })

})
