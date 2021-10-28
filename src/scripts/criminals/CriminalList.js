import { Criminal } from "./Criminal.js"
import { getCriminals, useCriminals } from "./CriminalDataProvider.js";

const contentTarget = document.querySelector(".print-list")

document.querySelector("#criminals-nav-link").addEventListener("click", function(){
    CriminalList();        
  });

export const CriminalList = (convictionFilter) => {
    let criminalListContainer = document.querySelector(".print-list");
    let criminalHTML = "<h2>Criminals</h2>";
    criminalListContainer.innerHTML = criminalHTML
    

    getCriminals()
    .then(() => {

            let criminalsArray = useCriminals();

            if(convictionFilter){

                criminalsArray = criminalsArray.filter(singleCriminalInLoop => {
                    return convictionFilter === singleCriminalInLoop.conviction
                })
            }
            criminalsArray.forEach((singleCriminalObj) => {
                criminalListContainer.innerHTML += Criminal(singleCriminalObj)
            })
        });
};