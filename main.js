document.addEventListener('DOMContentLoaded', init);

let appStore = {
    accordion: {
        'id': 'my-accordion',
        'title': 'My title',
        'content':
            `<p>
                This is some content and it probably came from a service
                of some kind. I doubt you have hardcoded content in your
                application.
            </p>`
    }
};

function init() {
    // Setup one Accordion
    const accordion1 = new Accordion(appStore.accordion);

    document.body.appendChild(accordion1.element);
}
