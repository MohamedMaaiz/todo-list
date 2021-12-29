import { priorityColor, displayCardEvents} from './events'
import Note from './Notes'
import TodoList from './todo-list'


const projectName = document.querySelector('.project-name')
const notesDsiplay = document.querySelector('#todo-notes')
const homeProjName = document.querySelector('.home-project-names')
const addNoteBTN = document.getElementById('add-note')
const noteAddScreen = document.getElementById('input-note')
const noteSubmitBTN = document.getElementById('note-submit')

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
    notesDsiplay.appendChild(card)
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
    homeProjName.style.display = 'none'
    projectName.textContent = TodoList.projects[id].projectName
    notesDsiplay.textContent = ''
    addNewNoteButton(id)

    //load previously generated notes
    TodoList.projects[id].notes.forEach((obj, i) => {
        createDisplayCard(...Object.values(obj), i, id)
    });
}

function addNewNoteButton(id) {
    addNoteBTN.onclick = () => {
        if (addNoteBTN.textContent == '+') {
            addNoteBTN.textContent = 'x'
            noteSubmitBTN.style.display = 'flex'
            noteAddScreen.style.display = 'flex'
            document.getElementById('note-date').value = new Date().toDateInputValue();
        } else {
            clearInputBox()
        }
        // noteGenerator(...userNoteInput(),id)
    }

    noteSubmitBTN.onclick = () => {
        noteGenerator(...userNoteInput(),id)
        clearInputBox()
    }
}

function clearInputBox() {
    addNoteBTN.textContent = '+'
    noteSubmitBTN.style.display = 'none'
    noteAddScreen.style.display = 'none'

    document.getElementById('note-title').value = ''
    document.getElementById('note-details').value = ''
    document.getElementById('note-priority').value = 1
}

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

function userNoteInput() { //take input from user
    let noteTitle = document.getElementById('note-title').value
    let noteDetails = document.getElementById('note-details').value
    let noteDate = document.getElementById('note-date').value
    let notePriority = document.getElementById('note-priority').value

    // console.log(noteTitle, noteDetails, noteDate, notePriority)
    // let title = 'name'
    // let details = 'generated'
    // let date = '0/0/0'
    // let status = false
    // let priority = 2

    // return [title, details, date, status, priority]
    return [noteTitle, noteDetails, noteDate, false, notePriority]
}

function displayAllNotes() {
    notesDsiplay.innerHTML = 'Home'
    homeProjName.innerHTML = ''
    homeProjName.style.display = 'flex'
    
    TodoList.projects.forEach((project, location) => {
        project.notes.forEach((note, i) => {
            createDisplayCard(...Object.values(note), i, location)
            projectNameInHome(location)
        })
    })
}

function projectNameInHome(location) {
    const nameCard = document.createElement('div')
    nameCard.classList.add('name-card')

    const text = TodoList.projects[location].projectName
    nameCard.textContent = text
    homeProjName.appendChild(nameCard)
}

export {changeDisplay, displayAllNotes};
