import { Location } from "./location.js"
import { getLocations, useLocations } from "./LocationDataProvider.js";

const contentTarget = document.querySelector(".locations-list")

export const LocationList = () => {
    getLocations()
    .then(() => {

            let locationsArray = useLocations();

            let locationHTML = "";

            locationsArray.forEach(singleLocationObj => {

                locationHTML += Location(singleLocationObj);
            });

            contentTarget.innerHTML = locationHTML
        });
};