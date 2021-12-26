import { userNoteInput, deleteNoteCard, showNoteCardDetails } from './events'
import Note from './Notes'
import TodoList from './todo-list'


const mainDisplay = document.getElementById('main-display')
const addNoteBTN = document.getElementById('add-note')

function addNewNoteButton() {
    addNoteBTN.onclick = () => noteGenerator(...userNoteInput())
}

// function displayNotes() { 
//     mainDisplay.innerHTML = ''
//     mainDisplay.appendChild(addNoteBTN)
    
//     for (let i = 0; i < Note.all.length; i++) {
//         createDisplayCard(...Object.values(Note.all[i]),i)
//     }
//     // console.log(JSON.stringify(Note.all));
// }

function createDisplayCard(title, description, date, status, priority, i) {
    const card = document.createElement('div')
    card.classList.add('note-card')
    card.setAttribute('data-index-note',i)

    const priorityD = document.createElement('div')
    priorityD.classList.add('priority')

    const titleP = document.createElement('p')
    const descriptionP = document.createElement('p')
    const dateP = document.createElement('p')
    const statusP = document.createElement('p')

    const dltBTN = document.createElement('button')
    dltBTN.textContent = 'X'

    descriptionP.classList.add('description')

    titleP.textContent = title
    descriptionP.textContent = description
    dateP.textContent = date
    statusP.textContent = status
    priorityD.textContent = priority

    card.onclick = () => showNoteCardDetails(i) //event
    dltBTN.onclick = (event) => {
        deleteNoteCard(i) //event
        event.stopPropagation()
    }

    card.appendChild(priorityD)
    card.appendChild(titleP)
    card.appendChild(descriptionP)
    card.appendChild(dateP)
    card.appendChild(statusP)
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
    createDisplayCard(...Object.values(thisNote) ,i)
}

function changeDisplay(i) {
    mainDisplay.innerHTML = ''
    mainDisplay.innerHTML = TodoList.projects[i].projectName
    mainDisplay.appendChild(addNoteBTN)
    addNoteBTN.onclick = () => noteGenerator(...userNoteInput(),i)

    //load previously generated notes
    TodoList.projects[i].notes.forEach((obj, i) => {
        createDisplayCard(...Object.values(obj) ,i)
    });
}

function loadNoteDisplay() {
    addNewNoteButton()
}

export {loadNoteDisplay, changeDisplay};
