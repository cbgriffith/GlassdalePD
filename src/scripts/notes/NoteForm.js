import { NoteList } from "./NoteList.js"
import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    contentTarget.innerHTML = `<form>
    <div>
      <label>Suspect Name:</label>
    </div>
      <input type="text" id="note__criminalName" required>
    <div>
      <label>Date:</label>
    </div>
      <input type="date" id="note__date" required>
    <div>
      <label>Note:</label>
    </div>
      <textarea id="note__text"></textarea>
    <div>
      <button id="saveNote" class="btn btn-primary">Save</button>
    </div>
</form>`
}

// Handle browser-generated click event in component
contentTarget.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {

      // Make a new object representation of a note
      const newNote = {
         criminalName: document.querySelector('#note__criminalName').value,
         date: document.querySelector('#note__date').value,
         text: document.querySelector('#note__text').value
      }
      document.querySelector("#note__criminalName").value = ""
      document.querySelector("#note__date").value = ""
      document.querySelector("#note__text").value = ""
      // Change API state and application state
      saveNote(newNote)
      .then(NoteList) // Refresh your list of notes once you've saved your new one
  }
})