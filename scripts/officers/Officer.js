export const Officer = (officer) => {
    return `
            <section class="officer__card">
                <div class="officer__name"><h4>${officer.name}</h4></div>
                <div class="officer__id">ID: ${officer.id}</div>
            </section>`
}