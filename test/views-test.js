describe('Views tests', function() {

  describe('#RenderNotes', function() {
    it('returns note title in a p tag', function() {
      var notepad = new NotesList();
      notepad.createNote("Hello");
      var render = new Render(notepad);
      expected = "<a id='6' href='#6'>Hello</a><br>"
      expect(render.RenderNotes()).toEqual(expected);
    })
  })

  describe('#RenderNoteText', function() {
    it('returns note text in a p tag', function() {
      var notepad = new NotesList();
      notepad.createNote("Hello");
      var render = new Render(notepad);
      expected = "<p class='full' id='7full'>Hello</p>"
      expect(render.RenderNoteText(7)).toEqual(expected);
    })
  })

})
