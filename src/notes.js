(function(exports){

  function AddNote() {
    document.getElementById("notes").innerHTML += "<p>" + document.getElementById("note-input").value + "</p>";
  }

  function ClearTextBox() {
    document.getElementById("note-input").value = "";
  }

  exports.AddNote = AddNote;
  exports.ClearTextBox = ClearTextBox;
})(this);
