import { Criminal } from "./Criminal.js"
import { getCriminals, useCriminals } from "./CriminalDataProvider.js";

const contentTarget = document.querySelector(".criminal-list-flex-container")

document.querySelector("#criminals-nav-link").addEventListener("click", function(){
    CriminalList();        
  });

export const CriminalList = () => {
    getCriminals()
    .then(() => {

            let criminalsArray = useCriminals();

            let criminalHTML = "";

            criminalsArray.forEach(singleCriminalObj => {

                criminalHTML += Criminal(singleCriminalObj);
            });

            contentTarget.innerHTML = criminalHTML
        });
};