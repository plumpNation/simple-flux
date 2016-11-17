document.addEventListener('DOMContentLoaded', init);

const
    appStore = {
        accordion: {
            'closed': true,
            'id': 'my-accordion',
            'title': 'My title',
            'content':
                `This is some content and it probably came from a service
                    of some kind. I doubt you have hardcoded content in your
                    application.`
        }
    };

let accordion,
    stateDisplay;

function init() {
    accordion = createAccordion();
    stateDisplay = document.getElementById('accordion-state');

    updateView();
}

function updateView() {
    accordion.update(appStore.accordion);
    stateDisplay.textContent = appStore.accordion.closed ? 'closed' : 'open';
}

function createAccordion() {
    // Setup one <accordion> tag
    const accordion = riot.mount('accordion', {opts: appStore.accordion})[0];

    // We can use the riot observable pattern now
    accordion.on('toggle', () => onToggle(accordion));

    return accordion;
}

function onToggle() {
    // NOTE: the controller controls the view state model, not the component.
    appStore.accordion.closed = !appStore.accordion.closed;

    // Now update the component with the updated data.
    updateView();
}
