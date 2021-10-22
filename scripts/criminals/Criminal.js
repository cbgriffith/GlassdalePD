export const Criminal = (criminal) => {
    return `
        <section class="criminal__card">
            <div class="criminal__name"><h3>${criminal.name}</h3></div>
            <div class="criminal__age">Age: ${criminal.age}</div>
            <div class="criminal__conviction">Crime: ${criminal.conviction}</div>
            <div class="criminal__start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        </section>`
}