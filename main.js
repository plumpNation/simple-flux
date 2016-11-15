document.addEventListener('DOMContentLoaded', init);

const
    appStore = {
        accordion: {
            'closed': true,
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
    const accordion = new Accordion(appStore.accordion);

    document.body.appendChild(accordion.element);

    // This could easily be in the state model too...
    accordion.toggle = () => {
        // NOTE: the controller controls the view state model, not the component.
        appStore.accordion.closed = !appStore.accordion.closed;

        accordion.update(appStore.accordion);
    };
}
