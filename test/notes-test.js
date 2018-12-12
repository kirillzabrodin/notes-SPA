describe('Notes tests', function() {

  describe('#getText', function() {
    it('returns note text', function() {
      var text = new Note('Hello');
      expect(text.text).toEqual("Hello");
    })
  })

  describe('#getTitle', function() {
    it('returns note title', function() {
      var text = new Note('Helloooooooooooooooooooooooooooooooooooo');
      expect(text.getTitle()).toEqual("Helloooooooooooooooo");
    })
  })

  describe('#getId', function() {
    it('returns note id', function() {
      var text_other = new Note('Hello');
      expect(text_other.getId()).toEqual(5);
    })
  })

})
