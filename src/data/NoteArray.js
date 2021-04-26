import Note from './Note';

export default class NoteArray {
  constructor() {
    this.notes = [];
    this.registered = [];
  }

  register(func) {
    this.registered.push(func);
  }

  unsubscribe(func) {
    this.registered = this.registered.filter((f) => f !== func);
  }

  notificar() {
    this.registered.forEach((func) => func(this.notes));
  }

  addNotes(title, text, category) {
    const newNote = new Note(title, text, category);
    this.notes.push(newNote);
    this.notificar();
  }

  deleteNotes(index) {
    this.notes.splice(index, 1);
    this.notificar();
  }
}
