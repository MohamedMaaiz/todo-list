import selectors from "./selector";


let myNotes = [{
    title: 'Note H',
    description: 'this is hidden',
    date: '1 / 2 / 34',
    status: 'Y',
},{
    title: 'Another Note',
    description: 'this is hidden too',
    date: '5 / 6 / 78',
    status: 'N',
}]

class Note{
    constructor(title, description, date, status) {
        this.title = title
        this.description = description
        this.date = date
        this.status = status
    }
}

function addNotesToArray(title, description, date, status) {
    createDisplayCard(title, description, date, status)
    displayNotes()
    myNotes.push(new Note(title, description, date, status))
}

function displayNotes() {
    selectors.mainDisplay.textContent = 'notes'
    for (const object of myNotes) {
        createDisplayCard (object.title, object.description, object.date, object.status)
    }
}

function createDisplayCard(title, description, date, status) {
    const card = document.createElement('div')
    card.classList.add('note-card')

    const titleP = document.createElement('p')
    const descriptionP = document.createElement('p')
    const dateP = document.createElement('p')
    const statusP = document.createElement('p')

    descriptionP.classList.add('description')

    titleP.textContent = title
    descriptionP.textContent = description
    dateP.textContent = date
    statusP.textContent = status

    card.appendChild(titleP)
    card.appendChild(descriptionP)
    card.appendChild(dateP)
    card.appendChild(statusP)
    selectors.mainDisplay.appendChild(card)
}

export default addNotesToArray;