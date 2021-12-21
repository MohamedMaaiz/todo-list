import { userNoteInput } from './events'
import {updateDisplay, Note, createDisplayCard} from './project'


const mainDisplay = document.getElementById('main-display')
const addNoteBTN = document.getElementById('add-note')

let index = Note.all.length

function addNewNoteButton() {
    addNoteBTN.onclick = () => noteGenerator(...userNoteInput())
}

let testNote1 = new Note('Note H', 'this is hidden', '1 / 2 / 34', 'Y', '1')
let testNote2 = new Note('Another Note', 'this is hidden too', '5 / 6 / 78', 'N', '3')
let testNote3 = ['Note 3', 'this is hidden too', '5 / 6 / 78', 'N', '3']


function displayNotes() { 
    mainDisplay.innerHTML = ''
    mainDisplay.appendChild(addNoteBTN)
    
    for (let i = 0; i < Note.all.length; i++) {
        createDisplayCard(...Object.values(Note.all[i]),i)
    }
    // console.log(JSON.stringify(Note.all));
}

function noteGenerator(title, details, date, status, priority) {
    new Note(title, details, date, status, priority)

    let i = Note.all.length-1
    createDisplayCard(...Object.values(Note.all[i]),i)
}

function loadDisplay() {
    addNewNoteButton()
    displayNotes()
}

export default loadDisplay;
