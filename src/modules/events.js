import {Note} from './project.js'
import loadDisplay from './note-display.js'

function clearMainDisplay() {
    selectors.mainDisplay.textContent = ''
}

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

    loadDisplay()
}

function userNoteInput() { //take input from user
    let title = 'name'
    let details = 'generated'
    let date = '0/0/0'
    let status = 'Y'
    let priority = 2

    return [title, details, date, status, priority]
}


export {clearMainDisplay, showNoteCardDetails, userNoteInput, deleteNoteCard};