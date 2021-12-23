import {Note } from './project.js'
import loadDisplay from './note-display.js'

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

function testingSubClass() {
    
    let string = 'test'
    let testObj = {}

    testObj[string] = {date: "1 / 2 / 34",
    description: "this is hidden",
    priority: "1",
    status: "Y",
    title: "Coding"}

    // const addClassBTN = document.getElementById('add-class')

    // addClassBTN.onclick = () => generateSubClass('subTest', testObj)

    // let testCoding1 = new Coding('Coding', 'this is hidden', '1 / 2 / 34', 'Y', '1')
    // loadDisplay()

    // Object.setPrototypeOf(testObj, Note.all)
    // Object.setPrototypeOf(Note, testObj)
    //try adding the testObj into Note as a subclass

    // Note.all[2] = testObj

    console.log(Note.all)
    console.log(testObj)
}

export { showNoteCardDetails, userNoteInput, deleteNoteCard, testingSubClass};


// make one main class that notes cant be added
// only more objects using that class
// add notes to an object in that class
// show home display using all objects in that class