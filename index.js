class Model {
    constructor() {
        this.count = 0;
    }
    increment(){
        console.log(this.count);
        this.count++;
        console.log(this.count);
        this.triger();
    }
    triger() {
        const event = new CustomEvent("count/increment", { count : this.count });
        window.dispatchEvent(event);
    }
}

class ViewController {
    constructor(){
        this.model = new Model();
        this.$element = document.getElementById("app");
        this.$button = document.getElementById("buton");
    }
    mount() {
        this.render();
        this.$button.addEventListener("click", (e) => this.onClick(e));
        window.addEventListener("count/incremenr", (e) => this.onMessage(e));
    }
    render(){
        this.$element.innerHTML = "<p>" + this.model.count + "</p>";
    }
    onClick(event) {
        this.model.increment();
    }
    onMessage(event) {
        this.render();
    }
}
const view = new ViewController();
view.mount();

