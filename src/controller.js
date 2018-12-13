const noteList = new NotesList();
const render = new Render();

window.onload = function() {
  LoadPageDefault()
};

function SubmitNote() {
  if (document.getElementById('note-input').value === "") {
    alert("Please enter a proper note")
    return
  }
  noteList.createNote(document.getElementById('note-input').value);
  LoadPageDefault()
}

function showNote() {
  let note_id = window.location.hash.split("#")[1];
  LoadNotePage(note_id)
};

function showHome() {
  LoadPageDefault()
}

function ListenForClick() {
  window.addEventListener("hashchange", function() {
    if (window.location.href.includes('#home')) {
      showHome();
    }
    else {
      showNote();
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
  ListenForClick()
  ListenForSubmit()
}

function LoadNotePage(note_id) {
  document.getElementById('navbar').innerHTML = render.navBar(noteList);
  document.getElementById('form').innerHTML = render.noteFull(noteList, note_id);
  ListenForClick()
}
