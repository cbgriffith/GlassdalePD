import { getOfficers, useOfficers } from "./OfficerDataProvider.js"
import { OfficerList } from "./OfficerList.js"
import { CriminalList } from "../criminals/CriminalList.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".officers-select-container")

export const OfficerSelect = () => {
    // Get all convictions from application state
    getOfficers()
        .then(() => {
    const officers = useOfficers()
    render(officers)
        })
}

const render = officerCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
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
// document.querySelector("#criminals-nav-link").addEventListener("click", function(){
//     OfficerSelect();        
//   });

const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObject) => {

    if(eventObject.target.id === "officerSelect"){
        console.log("You selected something from the officer dropdown")
        console.log("This is the officer that was selected: ", eventObject.target.value)
        // ---------- Your code goes here ----------- //
        /*
        - When we select a crime, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in information about the crime that was chosen
        */
        CriminalList("officers", eventObject.target.value)
    }
})