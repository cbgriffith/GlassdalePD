export const Criminal = (criminal) => {
    return `
        <section class="criminal__card">
            <div class="criminal__name"><h4>${criminal.name}</h4></div>
            <div class="criminal__age">Age: ${criminal.age}</div>
            <div class="criminal__conviction">Crime: ${criminal.conviction}</div>
            <div class="criminal__start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
            <div class="criminal__officer">Arresting Officer: ${criminal.arrestingOfficer}</div>
        </section>`
}