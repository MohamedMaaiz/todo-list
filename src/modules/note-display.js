import { userNoteInput } from './events'
import {updateDisplay, Note, createDisplayCard} from './project'


const mainDisplay = document.getElementById('main-display')
const addNoteBTN = document.getElementById('add-note')

let index = Note.all.length

function addNewNoteButton() {
    mainDisplay.appendChild(addNoteBTN)
    addNoteBTN.onclick = () => noteGenerator(...userNoteInput(),index++)
}

let testNote1 = new Note('Note H', 'this is hidden', '1 / 2 / 34', 'Y', '1')
let testNote2 = new Note('Another Note', 'this is hidden too', '5 / 6 / 78', 'N', '3')
let testNote3 = ['Note 3', 'this is hidden too', '5 / 6 / 78', 'N', '3']


function displayNotes() { //use this only to display as new display
    
    //display from existing notes
    createDisplayCard(...testNote1.getInfo(),index++)
    createDisplayCard(...testNote2.getInfo(),index++)
    
    noteGenerator(...testNote3,index++) //added as n2
    
    //use a display refresh and add the notes again using n2/n3 names
    
    // console.log(JSON.stringify(Note.all));
}

//just desplay using the arry list and use this method to display when new note is added

function noteGenerator(title, details, date, status, priority, i) {

    window['n'+i] = new Note(title, details, date, status, priority)

    createDisplayCard(...n2.getInfo(),i)
}

function loadDisplay() {
    addNewNoteButton()
    displayNotes()
    
    //test
    const test = document.querySelector('.heading')
    test.onclick = () => console.log(n2.getInfo())
}

export default loadDisplay;

//merge the class after giving the id