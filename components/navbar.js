var Navbar = function (notesList) {
  let notes = notesList.getNotes();
  let output = "<ul><li><a class='navbar active' href='#home'>Home</a></li>"
  for (var i = 0; i < notes.length; i++) {
    output += "<li><a class='navbar' href='#" + notes[i].getId() + "'>" + notes[i].getTitle() + "</li>";
  }
  output += "</ul>"
  return output;
}
