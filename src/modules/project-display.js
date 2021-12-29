import TodoList from './todo-list'
import {changeDisplay} from './note-display'
import { deleteProject, labelActive } from './events'

const userProjects = document.getElementById('user-projects')
const addProjectBTN = document.getElementById('add-project-BTN')
const projectInputScreen = document.getElementById('input-project')
const projectSubmitBTN = document.getElementById('project-submit')
const newProjectName = document.getElementById('new-project-name')

function displayProjectLabels() {
    userProjects.textContent = ''

    TodoList.projects.forEach((obj, i) => {
        createProjectLabel(obj.projectName, i)
    });
}

function createProjectLabel(projectName, i) {
    const label = document.createElement('div')
    label.classList.add('label')
    label.setAttribute('data-index-project',i)
 
    const projectNameP = document.createElement('p')

    const dltBTN = document.createElement('button')
    dltBTN.textContent = 'X'

    projectNameP.textContent = projectName

    labelActive.remove()

    label.onclick = () => {
        labelActive.remove()
        labelActive.add(label, i)
    }
    dltBTN.onclick = (event) => {
        event.stopPropagation()
        deleteProject(i)
    }

    labelActive.add(label, i)

    label.appendChild(projectNameP)
    label.appendChild(dltBTN)
    userProjects.appendChild(label)
}

function clearInputBox() {
    newProjectName.value = ''
    addProjectBTN.textContent = '+'
    projectInputScreen.style.display = 'none'
}

function projectEvents() {
    addProjectBTN.onclick = () => {  
        if (addProjectBTN.textContent == '+') {
            addProjectBTN.textContent = 'x'
            projectInputScreen.style.display = 'flex'
        } else {
            clearInputBox()
        }
        
        // new TodoList('p1class')
        // loadProjectDisplay()
    }

    projectSubmitBTN.onclick = () => {
        new TodoList(newProjectName.value)
        loadProjectDisplay()
        clearInputBox()
    }
}

function loadProjectDisplay() {
    displayProjectLabels()
    projectEvents()
}

export default loadProjectDisplay;