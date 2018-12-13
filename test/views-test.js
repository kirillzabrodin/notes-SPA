describe('Views tests', function() {

  describe('#notesPage', function() {
    it('returns note page with notes', function() {
      var notepad = new NotesList();
      notepad.createNote("Hello");
      var render = new Render();
      expected = "<h3 class='btn'>Hello Ed, I am not a killer machine and I'm definitely not tracking you :)</h3><br><textarea rows='4' cols='50' id='note-input' placeholder='Enter text here:'></textarea><br><a id='submit' class='btn'>Submit Note</a><div id='notes'></div><br><div id='full-note'></div><a class='btn' id='6' href='#6'>Hello</a><br>"
      expect(render.notesPage(notepad)).toEqual(expected);
    })
  })

  describe('#noteFull', function() {
    it('returns note text in a p tag', function() {
      var notepad = new NotesList();
      notepad.createNote("Hello");
      var render = new Render();
      expected = "<div id='notes'></div><br><div id='full-note'></div><a class='btn' id='7full'>Hello</a>"
      expect(render.noteFull(notepad,7)).toEqual(expected);
    })
  })

})
