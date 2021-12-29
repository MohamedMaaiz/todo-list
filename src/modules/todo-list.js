

export default class TodoList {
    constructor(projectName) {
        this.projectName = projectName
        this.notes = []
        TodoList.projects.push(this)
    }

    static projects = []
}
