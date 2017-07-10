export class Model {
    user;
    items;
    constructor() {
        this.user = "Ganesh";
        this.items = [new TodoItem("Buy Flowers", false),
            new TodoItem("Get Shoes", false),
            new TodoItem("Collect Tickets", true),
            new TodoItem("Test Items", false),
            new TodoItem("Call Joe", false)]
    }
}
export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
