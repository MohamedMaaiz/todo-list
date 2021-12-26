

export default class TodoList {
    constructor(projectName, notes) {
        this.projectName = projectName
        this.notes = []
        TodoList.projects.push(this)
    }

    static projects = []
}
