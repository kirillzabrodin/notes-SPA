function Note(text, id) {
  this.text = text;
  this.id = id;
}

Note.prototype.getText = function () {
  return this.text;
};

Note.prototype.getTitle = function () {
  return this.text.substring(0,20);
};

Note.prototype.getId = function () {
  return this.id;
};
