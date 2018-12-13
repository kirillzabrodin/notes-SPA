var noteList = new NotesList();
var render = new Render();

window.onload = function() {
  LoadPageDefault()
  ListenForClick()
  ListenForSubmit()
};

function SubmitNote() {
  if (document.getElementById('note-input').value === "") {
    alert("Please enter a proper note")
    return
  }
  noteList.createNote(document.getElementById('note-input').value);
  document.getElementById('notes').innerHTML = render.RenderNotes(noteList);
  document.getElementById("note-input").value = "";
  document.getElementById('navbar').innerHTML = render.NavBar(noteList);
  ListenForClick()
}

function showNote() {
  let note_id = window.location.hash.split("#")[1];
  LoadEmptyPage()

  document.getElementById("full-note").innerHTML = render.RenderNoteText(note_id, noteList);
};

function showHome() {
  LoadPageDefault()
  ListenForClick()
  ListenForSubmit()
  document.getElementById('notes').innerHTML = render.RenderNotes(noteList);
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
  document.getElementById('navbar').innerHTML = render.NavBar(noteList);
  document.getElementById('form').innerHTML = render.Title();
  document.getElementById('form').innerHTML += render.Form();
  document.getElementById('form').innerHTML += render.NotesData();
}

function LoadEmptyPage() {
  document.getElementById('navbar').innerHTML = render.NavBar(noteList);
  document.getElementById('form').innerHTML = render.NotesData();
}
