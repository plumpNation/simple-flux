// Let's go completely vanilla
function Accordion(viewData) {
    this._render(viewData);
    this._bindUI();
}

Accordion.prototype.update = function (viewData) {
    this.element.classList.toggle('closed', viewData.closed);

    // update title
    if (viewData.title !== this.titleData) {
        this.titleData = viewData.title;
        this.title.innerHTML = this.titleData;
    }

    // update content
    if (viewData.content !== this.contentData) {
        this.contentData = viewData.content;
        this.content.innerHTML = this.contentData;
    }
}

Accordion.prototype.toggle = function () {
    // What should happen when we want to 'close' the accordion?
    if (typeof this.onToggle === 'function') {
        this.onToggle();
    }
};

Accordion.prototype._bindUI = function () {
    this.element.querySelector('h1').addEventListener('click', () => this.toggle());
};

Accordion.prototype._render = function (viewData) {
    const markup = `
        <article id="${viewData.id}" class="accordion ${viewData.closed && 'closed'}">
            <h1><button>${viewData.title}</button></h1>
            <div class="content">
                ${viewData.content}
            </div>
        </article>`,

        container = document.createElement('div');

    container.innerHTML = markup;

    this.element = container.children[0];
    this.title = this.element.querySelector('h1 button');
    this.content = this.element.querySelector('.content');
};
