import { getOfficers, useOfficers } from "./OfficerDataProvider.js"
import { CriminalList } from "../criminals/CriminalList.js"

const contentTarget = document.querySelector(".officers-select-container")

export const OfficerSelect = () => {
    getOfficers()
        .then(() => {
    const officers = useOfficers()
    render(officers)
        })
}

const render = officerCollection => {
    contentTarget.innerHTML = `
        <label>Filter by arresting officer</label><br>
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officerCollection.map(officerObject => {
                    const officerName = officerObject.name
                    return `<option>${officerName}</option>`
                })
            }
        </select>
    `
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObject) => {

    if(eventObject.target.id === "officerSelect"){
        console.log("You selected something from the officer dropdown")
        console.log("This is the officer that was selected: ", eventObject.target.value)
        CriminalList("officers", eventObject.target.value)
    }
})