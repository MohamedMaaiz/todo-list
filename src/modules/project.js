import {showNoteCardDetails} from './events.js'

const mainDisplay = document.getElementById('main-display')

let myNotes = [{
    title: 'Note H',
    description: 'this is hidden',
    date: '1 / 2 / 34',
    status: 'Y',
    priority: '1',
},{
    title: 'Another Note',
    description: 'this is hidden too',
    date: '5 / 6 / 78',
    status: 'N',
    priority: '3',
}]

// class Note{
//     constructor(title, description, date, status,priority) {
//         this.title = title
//         this.description = description
//         this.date = date
//         this.status = status
//         this.priority = priority
//     }
// }

//creating sub class
// class Coding extends Note {
//     constructor(title, description, date, status,priority) {
//         super(title, description, date, status,priority)
//     }
// }




function addNotesToArray(title, description, date, status, priority) {
    myNotes.push(new Note(title, description, date, status, priority))
}

function displayNotes() {
    mainDisplay.textContent = 'notes'
    myNotes.forEach((object, i) => {
        createDisplayCard (object.title, object.description, object.date, object.status, object.priority, i)
    })
}

function createDisplayCard(title, description, date, status, priority, i) {
    const card = document.createElement('div')
    card.classList.add('note-card')
    card.setAttribute('data-index',i)

    const priorityD = document.createElement('div')
    priorityD.classList.add('priority')

    const titleP = document.createElement('p')
    const descriptionP = document.createElement('p')
    const dateP = document.createElement('p')
    const statusP = document.createElement('p')

    descriptionP.classList.add('description')

    titleP.textContent = title
    descriptionP.textContent = description
    dateP.textContent = date
    statusP.textContent = status
    priorityD.textContent = priority

    card.onclick = () => showNoteCardDetails(i)

    card.appendChild(priorityD)
    card.appendChild(titleP)
    card.appendChild(descriptionP)
    card.appendChild(dateP)
    card.appendChild(statusP)
    mainDisplay.appendChild(card)
}

function updateDisplay() {
    // addNotesToArray()
    displayNotes()

}

export default updateDisplay;

//  CORRECT THE CLASS

//show the description when clicked by expending that note
//change priority to a color based on the number