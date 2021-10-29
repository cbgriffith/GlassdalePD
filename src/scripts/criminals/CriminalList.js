import { ConvictionSelect } from "../convictions/ConvictionSelect.js";
import { OfficerSelect } from "../officers/OfficerSelect.js";
import { Criminal } from "./Criminal.js"
import { getCriminals, useCriminals } from "./CriminalDataProvider.js";

const contentTarget = document.querySelector(".print-list")

document.querySelector("#criminals-nav-link").addEventListener("click", function(){
    ConvictionSelect();
    OfficerSelect();
    CriminalList();        
  });

export const CriminalList = (selectListName, selectedChoice) => {
    let criminalListContainer = document.querySelector(".print-list");
    let criminalHTML = "<h2>Criminals</h2>";
    criminalListContainer.innerHTML = criminalHTML
    

    getCriminals()
    .then(() => {

            let criminalsArray = useCriminals();

            if(selectListName === "crimes"){

                criminalsArray = criminalsArray.filter(singleCriminalInLoop => {
                    return selectedChoice === singleCriminalInLoop.conviction
                })
            }
           if(selectListName === "officers"){
                criminalsArray = criminalsArray.filter(singleCriminalInLoop => {
                    return selectedChoice === singleCriminalInLoop.arrestingOfficer
                })
            }
            criminalsArray.forEach((singleCriminalObj) => {
                criminalListContainer.innerHTML += Criminal(singleCriminalObj)
            })
        });
};