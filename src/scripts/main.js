import { CriminalList } from "./criminals/CriminalList.js";
import { OfficerList } from './officers/OfficerList.js';
import { LocationList } from './locations/LocationList.js';
import { NoteList } from "./notes/NoteList.js";
import { NoteForm } from "./notes/NoteForm.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";

const darkModeButton = document.querySelector("#dark-mode")
darkModeButton.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("dark-background")
  })

  // NoteForm()
  // ConvictionSelect()
  // OfficerSelect()


  // let fake = [
  //   "amanda","andy","tommy","mel","brent","amanda","mel"
  // ]

  // let filteredArray = fake.filter(thingInLoop => {
  //     return thingInLoop === "amanda"
  // })

  // console.log(filteredArray)