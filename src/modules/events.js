

function clearMainDisplay() {
    selectors.mainDisplay.textContent = ''
}

function showNoteCardDetails(i) {
    const targetNote = document.querySelector(`[data-index="${i}"]`)

    if (targetNote.classList.contains ('expand')) {
        targetNote.classList.remove('expand')
        targetNote.childNodes[2].style.display = 'none'
    } else {
        targetNote.classList.add('expand')
        targetNote.childNodes[2].style.display = 'flex'
    }
}

function addEvents() {

}

export {addEvents, clearMainDisplay, showNoteCardDetails};