import { Note } from "./Note.js"
import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteForm } from "./NoteForm.js";
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js";

const contentTarget = document.querySelector(".print-list")

document.querySelector("#notes-nav-link").addEventListener("click", function(){
    NoteForm();
    NoteList();        
  });

export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {

            let notesArray = useNotes();
            let criminals = useCriminals();
            let noteHTML = "<h2>Notes</h2>";

            notesArray.forEach(singleNote => {
                let singleCriminal = criminals.find(x => +singleNote.criminalId === x.id)
                noteHTML += Note(singleNote, singleCriminal);
            });
            contentTarget.innerHTML = noteHTML
        });
};