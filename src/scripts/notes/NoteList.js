import { Note } from "./Note.js"
import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteForm } from "./NoteForm.js";

const contentTarget = document.querySelector(".print-list")

document.querySelector("#notes-nav-link").addEventListener("click", function(){
    NoteForm();
    NoteList();        
  });

export const NoteList = () => {
    getNotes()
    .then(() => {

            let notesArray = useNotes();

            let noteHTML = "<h2>Notes</h2>";

            notesArray.forEach(singleNoteObj => {

                noteHTML += Note(singleNoteObj);
            });

            contentTarget.innerHTML = noteHTML
        });
};
