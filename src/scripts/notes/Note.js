export const Note = (note) => {
    return `
        <section class="note__card">
            <div class="note__criminalName"><h4>${note.criminalName}</h4></div>
            <div class="note__date">${new Date(note.date).toLocaleDateString('en-US')}</div>
            <div class="note__text"><p>${note.text}</p></div>
        </section>`
}