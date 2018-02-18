export class Greeting {

    constructor() {
        this.message = "Hello World!";
    }

    greet() {
        const node = document.createTextNode(this.message);
        document.getElementById('content').appendChild(node);
    }
};