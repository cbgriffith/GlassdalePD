import { deleteNote } from "./NoteDataProvider.js";
import { NoteEditForm } from "./NoteEditForm.js"
import { NoteList } from "./NoteList.js";


export const Note = (note, criminal) => {
    return `
        <section class="note__card">
            <div class="note__criminalName"><h4>${criminal.name}</h4></div>
            <div class="note__date">${new Date(note.date).toLocaleDateString('en-US')}</div>
            <div class="note__text"><p>${note.text}</p></div>
            <button id="deleteNote--${note.id}" class="btn btn-primary">Delete</button>
            <button id="editNote--${note.id}" class="btn btn-primary">Edit</button>
        </section>`
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("deleteNote")) {
    const idToDelete = eventObject.target.id.split("--")[1]
    // ---------- Write your code here -------------//
    // Call the deleteNote function and pass in the appropriate id
    // Then call NoteList to refresh the list of notes
    deleteNote(idToDelete)
    .then(NoteList)
  }
})

eventHub.addEventListener("click", (eventObject) => {
  if (eventObject.target.id.startsWith("editNote")) {
    const noteId = +eventObject.target.id.split("--")[1]
    NoteEditForm(noteId);
  }
})

