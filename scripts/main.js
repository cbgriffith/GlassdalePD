import { CriminalList } from "./criminals/CriminalList.js";
import { OfficerList } from './officers/OfficerList.js'
import { LocationList } from './locations/LocationList.js'

// CriminalList()
// OfficerList()
// LocationList()

const darkModeButton = document.querySelector("#dark-mode")
darkModeButton.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("dark-background")
  })