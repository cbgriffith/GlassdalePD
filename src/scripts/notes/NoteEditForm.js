import { useNotes, updateNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js";
import { useCriminals } from "../criminals/CriminalDataProvider.js";

// We're going to print the edit form where the "add note" form usually goes. We could move it around on the page by changing our content target.
const contentTarget = document.querySelector(".noteFormContainer")

export const NoteEditForm = (noteId) => {
    // Give this component access to our application's notes state
    const allNotes = useNotes();
    const criminalCollection = useCriminals();

    // Find the note that we clicked on by its unique id
    const noteWeWantToEdit = allNotes.find(singleNote=> singleNote.id === noteId)

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <input type="date" id="note-date" value="${noteWeWantToEdit.date}" />
        <input type="text" value="${noteWeWantToEdit.text}" id="note-text" />
        <select id="criminalEdit-FK" class="form-control criminalSelect">
            <option value="0">Please select a Criminal</option>
             ${criminalCollection.map(taco => taco.id === noteWeWantToEdit.criminalId ? `<option selected value="${ taco.id }">${ taco.name }</option>`: `<option value="${ taco.id }">${ taco.name }</option>` )}
        </select>
        <input type="hidden" id="note-id" value="${noteWeWantToEdit.id}" />
        <button id="saveNoteChanges-${noteId}" class="btn btn-primary">Save Changes</button>
    `
}

let eventHub = document.querySelector("body")
eventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id.startsWith("saveNoteChanges")){

        // Make a new object representation of a note
        const editedNote = {
            criminalId: document.querySelector('#criminalEdit-FK').value,
            date: document.querySelector('#note-date').value,
            text: document.querySelector('#note-text').value,
            id: document.querySelector('#note-id').value // how can you get the note's id?
            //**other way to get the id**
            // id: eventObject.target.id.split("-")[1]
        }
        // Send to json-server and refresh the list
        updateNote(editedNote).then(NoteList)
    }
})
