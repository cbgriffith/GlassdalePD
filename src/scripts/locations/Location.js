export const Location = (location) => {
    return `
        <section class="location__card">
            <div class="location__name"><h4>${location.facilityName}</h4></div>
            <div class="location__securityLevel">Security Level: ${location.securityLevel}</div>
            <div class="location__capacity">Capacity: ${location.capacity}</div>
        </section>`
}