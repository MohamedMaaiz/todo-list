import TodoList from './todo-list'
import {changeDisplay} from './note-display'
import { deleteProject } from './events'


const mainDisplay = document.getElementById('main-display')
const userProjects = document.getElementById('user-projects')
const addProjectBTN = document.getElementById('add-project')


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

const labelActive = {
    remove: function() {
        let currentActive = document.querySelector('.active-project')
        if (currentActive) currentActive.classList.remove('active-project')
    },
    add: function(label, i) {
        label.classList.add('active-project') 
        changeDisplay(i)
    }
}

function loadProjectDisplay() {
    displayProjectLabels()
}

export default loadProjectDisplay;