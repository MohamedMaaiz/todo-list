import homepage from './modules/homepage.js'
import events from './modules/events.js'
import {clearMainDisplay} from './modules/events.js'
import addNotesToArray from './modules/project'

loadUI();

function loadUI() {
    addNotesToArray()
}