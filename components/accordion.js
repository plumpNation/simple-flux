// Let's go completely vanilla
function Accordion(element) {
    // How will we construct this in the simplest way possible?
    this.element = element;

    this.element.querySelector('h1').addEventListener('click', () => this.toggle());
}

Accordion.prototype.toggle = function () {
    // What should happen when we want to 'close' the accordion?
    this.element.classList.toggle('closed');
};
