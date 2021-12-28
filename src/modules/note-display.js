import { userNoteInput, priorityColor, displayCardEvents} from './events'
import Note from './Notes'
import TodoList from './todo-list'


const mainDisplay = document.getElementById('main-display')
const addNoteBTN = document.getElementById('add-note')

function addNewNoteButton() {
    addNoteBTN.onclick = () => noteGenerator(...userNoteInput())
}

function createDisplayCard(title, description, date, status, priority, i, location) {
    const card = document.createElement('div')
    card.classList.add('note-card')
    card.setAttribute('data-index-note',i)
    card.setAttribute('data-location', location)

    const priorityD = document.createElement('div')
    priorityD.classList.add('priority')

    const titleP = document.createElement('p')
    const descriptionP = document.createElement('p')
    const dateP = document.createElement('p')
    const statusI = document.createElement('input')
    statusI.setAttribute('type', 'checkbox')

    const dltBTN = document.createElement('button')
    dltBTN.textContent = 'X'

    descriptionP.classList.add('description')
    
    titleP.textContent = title
    descriptionP.textContent = description
    dateP.textContent = date
    priorityD.textContent = priority
    status ? statusI.checked = true : statusI.checked = false
    
    displayCardEvents(i, location, status, card, dltBTN, statusI, priorityD, priority)
    priorityColor(status, priorityD, priority)

    card.appendChild(priorityD)
    card.appendChild(titleP)
    card.appendChild(descriptionP)
    card.appendChild(dateP)
    card.appendChild(statusI)
    card.appendChild(dltBTN)
    mainDisplay.appendChild(card)
}

//generates and display new notes
function noteGenerator(title, details, date, status, priority, location) {

    let thisNote = {
        'title': title, 
        'details': details, 
        'date': date, 
        'status': status, 
        'priority': priority
    }

    TodoList.projects[location].notes.push(thisNote)

    let i = TodoList.projects[location].notes.length - 1
    createDisplayCard(...Object.values(thisNote), i, location)
}

function changeDisplay(id) {
    mainDisplay.innerHTML = TodoList.projects[id].projectName
    mainDisplay.appendChild(addNoteBTN)
    addNoteBTN.onclick = () => noteGenerator(...userNoteInput(),id)

    //load previously generated notes
    TodoList.projects[id].notes.forEach((obj, i) => {
        createDisplayCard(...Object.values(obj), i, id)
    });
}

function displayAllNotes() {
    mainDisplay.innerHTML = 'Home'
    
    TodoList.projects.forEach((project, location) => {
        project.notes.forEach((note, i) => {
            createDisplayCard(...Object.values(note), i, location)
        })
    })
}

function loadNoteDisplay() {
    addNewNoteButton()
}

export {loadNoteDisplay, changeDisplay, displayAllNotes};
