var Controller = (function() {

  const noteList = new NotesList();
  const render = new Render();

  function SubmitNote() {
    if (document.getElementById('note-input').value === "") {
      alert("Please enter a proper note")
      return
    }
    noteList.createNote(document.getElementById('note-input').value);
    LoadPageDefault()
  }

  function ListenForClick() {
    window.addEventListener("hashchange", function() {
      if (window.location.href.includes('#home')) {
        LoadPageDefault();
      }
      else {
        let note_id = window.location.hash.split("#")[1];
        LoadNotePage(note_id)
      }
    });
  }

  function ListenForSubmit() {
    document.getElementById('submit').addEventListener('click', function() {
      SubmitNote();
    });
  }

  function LoadPageDefault() {
    document.getElementById('navbar').innerHTML = render.navBar(noteList);
    document.getElementById('form').innerHTML = render.notesPage(noteList);
    ListenForSubmit()
  }

  function LoadNotePage(note_id) {
    document.getElementById('navbar').innerHTML = render.navBar(noteList);
    document.getElementById('form').innerHTML = render.noteFull(noteList, note_id);
  }

  return {

    renderDOM: function() {
      LoadPageDefault()
      ListenForClick()
    }

  }
})
