import {Note, Project } from './Notes.js'
import {loadNoteDisplay} from './note-display.js'
import TodoList from './todo-list'
import loadProjectDisplay from './project-display'

function showNoteCardDetails(i) { //project 91
    const targetNote = document.querySelector(`[data-index="${i}"]`)

    if (targetNote.classList.contains ('expand')) {
        targetNote.classList.remove('expand')
        targetNote.childNodes[2].style.display = 'none'
    } else {
        targetNote.classList.add('expand')
        targetNote.childNodes[2].style.display = 'flex'
    }
}

function deleteNoteCard(i) { //project 69
    const targetNote = document.querySelector(`[data-index="${i}"]`)

    Note.all.splice(i, 1);
    loadNoteDisplay()
}

function userNoteInput() { //take input from user
    let title = 'name'
    let details = 'generated'
    let date = '0/0/0'
    let status = 'Y'
    let priority = 2

    return [title, details, date, status, priority]
}

function loadEventListners() {
    const addProjectBTN = document.getElementById('add-project')

    addProjectBTN.onclick = () => {
        new TodoList('p1class')
        console.log('added')
        loadProjectDisplay()
    }

   
}

export { showNoteCardDetails, userNoteInput, deleteNoteCard, loadEventListners};

// make a main Note class, no notes should be there
// add an array to save all the projects
// add notes to one of the object in project
// display from the selected project object
// make home button display from all the objects in project