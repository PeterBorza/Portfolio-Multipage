const header = document.querySelector('header');
const main = document.querySelector('main');
const p = console.log;

function tag(tag, attr, attrName) {
    const el = document.createElement(tag);
    el.setAttribute( attr, attrName);

    return el;
}

// ****************************************************

const portfolioPage = () => {
    const mainFrame = tag('div', 'class', 'main-frame');
    const likeIt = document.createElement('h1');
    const likeItSpan = document.createElement('span');
    likeItSpan.textContent = 'I like IT';
    const yellow = tag('div', 'class', 'yellow');
    const red = tag('div', 'class', 'red');
    const title = tag('div', 'class', 'title');
    const avatar = tag('img', 'src', '/doc/img1-removebg-preview.png');
    const skills = document.createElement('h2');
    skills.textContent = 'Skills';
    const skillsPara = document.createElement('p');
    skillsPara.textContent = 'HTML5, CSS3, javaScript ECMA6, jQuery, GSAP, SASS';

    title.append(avatar, skills, skillsPara);
    likeIt.append(likeItSpan);
    mainFrame.append(likeIt, title, yellow, red);

    mainFrame.addEventListener('click', () => {
        red.classList.toggle('animate');
        likeItSpan.style.transform = 'translateY(0%)';
        likeItSpan.style.opacity = '1';
        yellow.classList.toggle('animate');
    });

    yellow.addEventListener('click', () => {
        likeItSpan.classList.toggle('resize');
        mainFrame.style.width = '60%';
        mainFrame.style.height = '70vh';
    });

    return mainFrame;
};
