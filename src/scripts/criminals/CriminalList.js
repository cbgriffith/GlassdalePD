import { Criminal } from "./Criminal.js"
import { getCriminals, useCriminals } from "./CriminalDataProvider.js";

const contentTarget = document.querySelector(".print-list")

document.querySelector("#criminals-nav-link").addEventListener("click", function(){
    CriminalList();        
  });

export const CriminalList = () => {
    getCriminals()
    .then(() => {

            let criminalsArray = useCriminals();

            let criminalHTML = "<h2>Criminals</h2>";

            criminalsArray.forEach(singleCriminalObj => {

                criminalHTML += Criminal(singleCriminalObj);
            });

            contentTarget.innerHTML = criminalHTML
        });
};