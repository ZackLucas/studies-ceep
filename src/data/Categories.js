export default class Categories {
  constructor() {
    this.categories = [];
    this.registered = [];
  }

  register(func) {
    this.registered.push(func);
  }

  unsubscribe(func) {
    this.registered = this.registered.filter((f) => f !== func);
  }

  notificar() {
    this.registered.forEach((func) => func(this.categories));
  }

  addCategory(newCategory) {
    this.categories.push(newCategory);
    this.notificar();
  }
}
