import { Location } from "./location.js"
import { getLocations, useLocations } from "./LocationDataProvider.js";

const contentTarget = document.querySelector(".locations-list")

document.querySelector("#facilitiesnav-link").addEventListener("click", function(){
    LocationList();          
  });

export const LocationList = () => {
    getLocations()
    .then(() => {

            let locationsArray = useLocations();

            let locationHTML = "<h2>Facilities</h2>";

            locationsArray.forEach(singleLocationObj => {

                locationHTML += Location(singleLocationObj);
            });

            contentTarget.innerHTML = locationHTML
        });
};