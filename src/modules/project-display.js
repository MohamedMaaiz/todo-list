import {Project} from './Notes'
import TodoList from './todo-list'
import {changeDisplay} from './note-display'


const mainDisplay = document.getElementById('main-display')
const userProjects = document.getElementById('user-projects')
const addProjectBTN = document.getElementById('add-project')

let testProject = new Project('Coding')

function displayProjectLabels() {
    userProjects.textContent = ''
    userProjects.appendChild(addProjectBTN)

    TodoList.projects.forEach((obj, i) => {
        createProjectLabel(obj.projectName, i)
    });
}

function createProjectLabel(projectName, i) {
    const label = document.createElement('div')
    label.classList.add('label')
    label.setAttribute('data-index',i)
 
    const projectNameP = document.createElement('p')

    const dltBTN = document.createElement('button')
    dltBTN.textContent = 'X'

    projectNameP.textContent = projectName

    label.onclick = () => changeDisplay(i) //make this
    dltBTN.onclick = () => deleteProjectLabel(i)

    label.appendChild(projectNameP)
    label.appendChild(dltBTN)
    userProjects.appendChild(label)
}

function loadProjectDisplay() {
    // addNewProjectButton()
    // displayProjects()
    displayProjectLabels()
}

export default loadProjectDisplay;