let locations = []

export const useLocations = () => {
    return locations.slice()
}

export const getLocations = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(response => response.json())
        .then(parsedLocations => {
                // console.table(parsedCriminals)
                locations = parsedLocations
            }
        )
}
