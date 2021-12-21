import {showNoteCardDetails, deleteNoteCard} from './events.js'

const mainDisplay = document.getElementById('main-display')

class Note{
    constructor(title, description, date, status,priority) {
        // Note.projects = []
        this.title = title
        this.description = description
        this.date = date
        this.status = status
        this.priority = priority
        Note.all.push(this)
    }

    getInfo() {
        return [this.title, this.description, this.date, this.status, this.priority]
    }

    setProjects(projects) {
        this.projects = projects
    }

    getProjects() {
        return this.projects
    }

    //to remove from all list //note1.destroy();
    destroy(i){
        // let i = Note.all.indexOf(this);
        Note.all.splice(i, 1);
    }

    static all = []
}
  
// creating sub class
class Coding extends Note {
    constructor(title, description, date, status,priority) {
        super(title, description, date, status,priority)
        Coding.coding.push(this)
    }

    static coding = []
}

function generateSubClass(subName, value) {

    var obj = {}
    obj[subName] = value
    console.log(obj)

    // class subName extends Note {
        
    // }
}

function createDisplayCard(title, description, date, status, priority, i) {
    const card = document.createElement('div')
    card.classList.add('note-card')
    card.setAttribute('data-index',i)

    const priorityD = document.createElement('div')
    priorityD.classList.add('priority')

    const titleP = document.createElement('p')
    const descriptionP = document.createElement('p')
    const dateP = document.createElement('p')
    const statusP = document.createElement('p')

    const dltBTN = document.createElement('button')
    dltBTN.textContent = 'X'

    descriptionP.classList.add('description')

    titleP.textContent = title
    descriptionP.textContent = description
    dateP.textContent = date
    statusP.textContent = status
    priorityD.textContent = priority

    card.onclick = () => showNoteCardDetails(i) //event 7
    dltBTN.onclick = () => deleteNoteCard(i) //event 19

    card.appendChild(priorityD)
    card.appendChild(titleP)
    card.appendChild(descriptionP)
    card.appendChild(dateP)
    card.appendChild(statusP)
    card.appendChild(dltBTN)
    mainDisplay.appendChild(card)
}

export {Note, createDisplayCard, Coding ,generateSubClass};

//change priority to a color based on the number
//make a seperate module for the Note Class