import { userNoteInput } from './events'
import { Note } from './Notes'
import TodoList from './todo-list'


const mainDisplay = document.getElementById('main-display')
const addNoteBTN = document.getElementById('add-note')

function addNewNoteButton() {
    addNoteBTN.onclick = () => noteGenerator(...userNoteInput())
}

// let testNote1 = new Note('Note H', 'this is hidden', '1 / 2 / 34', 'Y', '1')
// let testNote2 = new Note('Another Note', 'this is hidden too', '5 / 6 / 78', 'N', '3')
// let testNote3 = ['Note 3', 'this is hidden too', '5 / 6 / 78', 'N', '3']


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
    card.setAttribute('data-index',i)

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

    card.onclick = () => showNoteCardDetails(i) //event 7
    dltBTN.onclick = () => deleteNoteCard(i) //event 19

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

    let i = TodoList.projects[location].notes.length
    createDisplayCard(...Object.values(thisNote) ,i)
}

function changeDisplay(i) {
    mainDisplay.innerHTML = ''
    mainDisplay.innerHTML = TodoList.projects[i].projectName
    mainDisplay.appendChild(addNoteBTN)
    addNoteBTN.onclick = () => noteGenerator(...userNoteInput(),i)

    //load previously generated notes
}

function loadNoteDisplay() {
    addNewNoteButton()
    // displayNotes()
    // console.log(Note.all)
}

export {loadNoteDisplay, changeDisplay};
