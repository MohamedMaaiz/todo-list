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
        'date': '2022-04-27', 
        'status': true, 
        'priority': '1'
    }
    let testNote2 = {
        'title': 'Another Note', 
        'details': 'this is hidden too', 
        'date': '2021-02-28', 
        'status': false, 
        'priority': '3'
    }
    let testNote3 = {
        'title': 'Note 3', 
        'details': 'this is hidden too', 
        'date': '2022-03-27', 
        'status': false, 
        'priority': '3'
    }

    TodoList.projects[0].notes.push(testNote1, testNote2, testNote3)

    // console.log(TodoList.projects[0])
}

loadUI();

function loadUI() {
    loadEventListners()
    loadPreData() //testing function
    loadProjectDisplay()
}

// give the index from array index and make change using &&
// sort using date format

// add the date-fns