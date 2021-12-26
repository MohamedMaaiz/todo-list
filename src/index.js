import {loadNoteDisplay} from './modules/note-display.js'
import events from './modules/events.js'
import {loadEventListners} from './modules/events.js'
import loadProjectDisplay from './modules/project-display'

//for pre data
import TodoList from './modules/todo-list'

//adding pre made data to test
function loadPreData() {
    new TodoList('testPro')

    let testNote1 = {
        'title': 'Note H', 
        'details': 'this is hidden', 
        'date': '1 / 2 / 34', 
        'status': 'Y', 
        'priority': '1'
    }
    let testNote2 = {
        'title': 'Another Note', 
        'details': 'this is hidden too', 
        'date': '5 / 6 / 78', 
        'status': 'N', 
        'priority': '3'
    }
    let testNote3 = {
        'title': 'Note 3', 
        'details': 'this is hidden too', 
        'date': '5 / 6 / 78', 
        'status': 'N', 
        'priority': '3'
    }

    TodoList.projects[0].notes.push(testNote1, testNote2, testNote3)

    // console.log(TodoList.projects[0])
}

loadUI();

function loadUI() {
    loadNoteDisplay()
    loadEventListners()
    loadPreData() //testing function
    loadProjectDisplay()
}
