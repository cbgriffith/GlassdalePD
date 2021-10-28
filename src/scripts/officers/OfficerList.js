import { Officer } from './Officer.js'
import { getOfficers, useOfficers } from "./OfficerDataProvider.js";

const contentTarget = document.querySelector(".print-list")

document.querySelector("#officers-nav-link").addEventListener("click", function(){
    OfficerList();          
  });

export const OfficerList = () => {
    getOfficers()
    .then(() => {

            let officersArray = useOfficers();

            let officerHTML = "<h2>Officers</h2>";

            officersArray.forEach(singleOfficerObj => {

                officerHTML += Officer(singleOfficerObj);
            });

            contentTarget.innerHTML = officerHTML
        });
};