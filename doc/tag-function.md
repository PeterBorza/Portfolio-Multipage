const main = document.querySelector('main');

function tag(className) {
    const element = document.createElement('div');
    element.classList.add(className);

    return element;
}