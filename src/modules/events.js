import Note from './Notes.js'
import {changeDisplay, displayAllNotes} from './note-display.js'
import TodoList from './todo-list'
import loadProjectDisplay from './project-display'

let currentProject
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
        currentProject = i
    },
    addBTN: function(btn) {
        currentScreen = currentProject = 'home'
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

    currentScreen == 'home' ? displayAllNotes() : changeDisplay(location)
}

function deleteProject(i) {
    //make a confirmation screen as it will delete the notes too

    TodoList.projects.splice(i, 1)
    
    loadProjectDisplay()
}

function sortNote() {
    let list = []
    let locationList = []

    if (currentProject == 'home') {
        TodoList.projects.forEach((project, location) => {
            project.notes.forEach((note, i) => {
                i = TodoList.projects[location].notes.indexOf(note)
                list.push({...Object(note), i, location})
            })
        })
    } else {
        list = [...TodoList.projects[currentProject].notes]
    }

    list.sort((a, b) => {
        var dateA = new Date(a.date)
        var dateB = new Date(b.date)
        return dateA - dateB
    }) 

    list.forEach(note => {
        locationList.push(note.location)
    })

    // console.log(list)
    // console.log(locationList)
    console.log(document.querySelector('input[name="sort-btn"]:checked').id)

}

function changeNoteStatus(i, location, status) {
    if (status) {
        TodoList.projects[location].notes[i].status = false
        currentScreen == 'home' ? displayAllNotes() : changeDisplay(location)
        return status = false
    }
    TodoList.projects[location].notes[i].status = true
    currentScreen == 'home' ? displayAllNotes() : changeDisplay(location)
    return status = true 
}

function displayCardEvents(i, location, status, card, dltBTN, statusI, priorityD, priority) {
    card.onclick = () => showNoteCardDetails(i, location)
    dltBTN.onclick = (event) => {
        event.stopPropagation()
        deleteNoteCard(i, location)
    }
    statusI.onclick = (event) => {
        event.stopPropagation()
        priorityColor(changeNoteStatus(i, location, status, priorityD, priority),priorityD, priority)
    }
}

function priorityColor(status, priorityD, priority) {
    let color = 'gray'

    status ? color
    : priority == 3 ? color = 'red'
    : priority == 2 ? color = 'orange'
    : color = 'yellow'

    priorityD.style.backgroundColor = color
    // will add the note card 
}

function loadEventListners() {
    const homeBTN = document.getElementById('home-btn')
    homeBTN.onclick = () => {
        labelActive.remove()
        labelActive.addBTN(homeBTN)
        displayAllNotes()
    }

    const sortBTN = document.getElementById('sort-btn')
    sortBTN.onclick = () => {
        sortNote()
    }
}

export { loadEventListners, deleteProject, labelActive, priorityColor, displayCardEvents, currentProject};


//make three switch for sorting 'default/accending/decc..' in separte function
//test delete
//test checked