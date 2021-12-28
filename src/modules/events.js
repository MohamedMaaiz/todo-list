import Note from './Notes.js'
import {changeDisplay, displayAllNotes} from './note-display.js'
import TodoList from './todo-list'
import loadProjectDisplay from './project-display'

let currentScreen
const labelActive = {
    remove: function() {
        let currentActive = document.querySelector('.active-display')
        if (currentActive) currentActive.classList.remove('active-display')
    },
    add: function(label, i) {
        currentScreen = 'project'
        label.classList.add('active-display') 
        changeDisplay(i)
    },
    addBTN: function(btn) {
        currentScreen = 'home'
        btn.classList.add('active-display') 
    }
}

function showNoteCardDetails(i, location) { //note-display
    const targetNote = document.querySelector(`[data-index-note="${i}"][data-location="${location}"]`)

    if (targetNote.classList.contains ('expand')) {
        targetNote.classList.remove('expand')
        targetNote.childNodes[2].style.display = 'none'
    } else {
        targetNote.classList.add('expand')
        targetNote.childNodes[2].style.display = 'flex'
    }
}

function deleteNoteCard(i, location) { // note-display
    TodoList.projects[location].notes.splice(i, 1)

    if (currentScreen == 'home') return displayAllNotes()
    changeDisplay(location)
}

function deleteProject(i) {
    //make a confirmation screen as it will delete the notes too

    TodoList.projects.splice(i, 1)
    
    loadProjectDisplay()
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
        loadProjectDisplay()
    }

    const homeBTN = document.getElementById('home-btn')
    homeBTN.onclick = () => {
        labelActive.remove()
        labelActive.addBTN(homeBTN)
        displayAllNotes()
    }
}

export { showNoteCardDetails, userNoteInput, deleteNoteCard, loadEventListners, deleteProject, labelActive};
