// Let's go completely vanilla
function Accordion(viewData) {
    this.element = null;

    // How will we construct this in the simplest way possible?
    this._render(viewData);
    this._bindUI();
}

Accordion.prototype.toggle = function () {
    // NOTE: The accordion is now responsible for it's state.
    this.element.classList.toggle('closed');
    // At this point, no other component is aware of it being either open or closed.
};

Accordion.prototype._bindUI = function () {
    this.element.querySelector('h1').addEventListener('click', () => this.toggle());
};

Accordion.prototype._render = function (viewData) {
    const markup = `
        <article id="${viewData.id}" class="accordion">
            <h1><button>${viewData.title}</button></h1>
            <p class="content">
                ${viewData.content}
            </p>
        </article>`,

        container = document.createElement('div');

    container.innerHTML = markup;

    this.element = container.children[0];
}
