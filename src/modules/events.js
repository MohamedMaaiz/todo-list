import Note from './Notes.js'
import {changeDisplay, loadNoteDisplay} from './note-display.js'
import TodoList from './todo-list'
import loadProjectDisplay from './project-display'

function showNoteCardDetails(i) { //note-display
    const targetNote = document.querySelector(`[data-index-note="${i}"]`)

    if (targetNote.classList.contains ('expand')) {
        targetNote.classList.remove('expand')
        targetNote.childNodes[2].style.display = 'none'
    } else {
        targetNote.classList.add('expand')
        targetNote.childNodes[2].style.display = 'flex'
    }
}

function deleteNoteCard(i) { // note-display
    const targetNote = document.querySelector(`[data-index-note="${i}"]`)
    const targetProject = document.querySelector('.active-project')

    let projectID = targetProject.getAttribute('data-index-project')
    
    TodoList.projects[projectID].notes.splice(i, 1)

    changeDisplay(projectID)
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
}

export { showNoteCardDetails, userNoteInput, deleteNoteCard, loadEventListners, deleteProject};

// make home button display from all the objects in project