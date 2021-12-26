
export default class Note{
    constructor(title, description, date, status,priority) {
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

    setNote(note) {
        this.note = note
    }

    getNote() {
        return this.note
    }

    //to remove from all list //note1.destroy();
    destroy(i){
        // let i = Note.all.indexOf(this);
        Note.all.splice(i, 1);
    }

    static all = []
}