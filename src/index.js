import {loadNoteDisplay} from './modules/note-display.js'
import loadProjectDisplay from './modules/project-display'
import events from './modules/events.js'
import {loadEventListners} from './modules/events.js'



loadUI();

function loadUI() {
    loadNoteDisplay()
    loadEventListners()
    // loadProjectDisplay()
}
