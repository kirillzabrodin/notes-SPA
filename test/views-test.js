describe('Views tests', function() {

  describe('#RenderNote', function() {
    it('returns note title in a p tag', function() {
      var notepad = new NotesList();
      notepad.createNote("Hello");
      var render = new Render(notepad);
      expect(render.RenderNotes()).toEqual("<p id='0'>Hello</p><br>");
    })
  })

  describe('#RenderNoteText', function() {
    it('returns note text in a p tag', function() {
      var notepad = new NotesList();
      notepad.createNote("Hello");
      var render = new Render(notepad);
      expected = "<p class='full' id='0full'>Hello</p>"
      expect(render.RenderNoteText(0)).toEqual(expected);
    })
  })

})
