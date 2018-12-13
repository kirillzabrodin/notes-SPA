var Render = (function() {

  var RenderNotes = function (notesList) {
    let notes = notesList.getNotes()
    var output = "";
    for (var i = 0; i < notes.length; i++) {
      output += "<a class='btn' id='" + notes[i].getId() + "' href='#" + notes[i].getId() + "'>" + notes[i].getTitle() + "</a><br>";
    }
    return output;
  };

  var RenderNoteText = function (id, notesList) {
    let note = notesList.findNote(id);
    return "<a class='btn' id='" + note.getId() + "full'>" + note.text + "</a>";
  };

  var Form = function () {
    return "<textarea rows='4' cols='50' id='note-input' placeholder='Enter text here:'></textarea>" +
    "<br>" +
    "<a id='submit' class='btn'>Submit Note</a>"
  };

  var Title = function () {
    return "<h3 class='btn'>Hello Ed, I am not a killer machine and I'm definitely not tracking you :)</h3><br>"
  };

  var NotesData = function () {
    return "<div id='notes'></div>" +
    "<br>" +
    "<div id='full-note'></div>"
  };


  var Navbar = function (notesList) {
    let notes = notesList.getNotes();
    output = "<ul><li><a class='navbar active' href='#home'>Home</a></li>"
    for (var i = 0; i < notes.length; i++) {
      output += "<li><a class='navbar' href='#" + notes[i].getId() + "'>" + notes[i].getTitle() + "</li>";
    }
    output += "</ul>"
    return output;
  }

  return {

    navBar: function(notesList) {
      return Navbar(notesList)
    },
    notesPage: function(notesList) {
      return [Title(),
      Form(),
      NotesData(notesList),
      RenderNotes(notesList),].join("")
    },
    noteFull: function(notesList, note_id) {
      return [NotesData(notesList),
      RenderNoteText(note_id, notesList)].join("")
    }
  }

})
