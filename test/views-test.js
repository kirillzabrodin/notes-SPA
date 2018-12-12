describe('Views tests', function() {

  describe('#RenderNotes', function() {
    it('returns note title in a p tag', function() {
      var notepad = new NotesList();
      notepad.createNote("Hello");
      var render = new Render(notepad);
      expected = "<a id='6' href='#6'>Hello</a><br>"
      expect(render.RenderNotes(notepad)).toEqual(expected);
    })
  })

  describe('#RenderNoteText', function() {
    it('returns note text in a p tag', function() {
      var notepad = new NotesList();
      notepad.createNote("Hello");
      var render = new Render(notepad);
      expected = "<a class='full' href='#home' id='7full'>Hello</a>"
      expect(render.RenderNoteText(7,notepad)).toEqual(expected);
    })
  })

})
