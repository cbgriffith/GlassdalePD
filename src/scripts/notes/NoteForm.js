import { NoteList } from "./NoteList.js"
import { saveNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    getCriminals()
    .then(() => {
      const criminals = useCriminals()
    contentTarget.innerHTML = `<form>
    <div>
      <label>Suspect Name:</label>
    </div>
      <select id="noteForm--criminal" class="criminalSelect">
        <option value="0">Select a criminal</option>
       ${criminals.map((criminal) => {
            return `<option value="${criminal.id}">${criminal.name}</option>`
          })
        }
      </select>
    <div>
      <label>Date:</label>
    </div>
      <input type="date" id="note__date">
    <div>
      <label>Note:</label>
    </div>
      <textarea id="note__text"></textarea>
    <div>
      <button id="saveNote" class="btn btn-primary">Save</button>
    </div>
</form>`
})
}

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {

      // Make a new object representation of a note
      const newNote = {
         date: document.querySelector('#note__date').value,
         text: document.querySelector('#note__text').value,
         criminalId: document.querySelector("#noteForm--criminal").value
      }
      document.querySelector("#noteForm--criminal").value = ""
      document.querySelector("#note__date").value = ""
      document.querySelector("#note__text").value = ""
      // Change API state and application state
      saveNote(newNote)
      .then(NoteList) // Refresh your list of notes once you've saved your new one
  }
})