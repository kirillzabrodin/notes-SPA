(function(exports) {
  
  var id = 0;

  function Note(text) {
    this.text = text;
    this.id = id++ ;
  }

  Note.prototype.getTitle = function () {
    return this.text.substring(0,20);
  };

  Note.prototype.getId = function () {
    return this.id;
  };

  exports.Note = Note
})(this);
