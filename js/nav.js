const linksData = [
    ['Home', '/'],
    ['Projects', '/projects.html'],
    ['Technologies', '/technologies.html'],
    ['Education', '/education.html']
];

let mainNav = document.getElementById('mainNav');
mainNav.classList.add('navbar', 'navbar-expand-sm', 'navbar-light', 'bg-light', 'mt-3', 'mb-5');

let navContainer = document.createElement('div');
navContainer.classList.add('container-fluid');

let navBar = document.createElement('div');
navBar.classList.add('navbar-nav', 'mx-auto');
const activePage = getActivePage();
for (let data of linksData)
    appendLink(data[0], data[1]);
navContainer.appendChild(navBar);

mainNav.appendChild(navContainer);

function getActivePage() {
    return 'Home';
}

function appendLink(text, url) {
    let a = document.createElement('a');
    a.innerHTML = text;
    a.href = url;
    a.classList.add('nav-link');
    if (a.innerHTML == activePage)
        a.classList.add('active', 'fw-bold');
    navBar.appendChild(a);

    if (text != linksData[linksData.length - 1][0]) {
        let separator = document.createElement('span');
        separator.classList.add('nav-link');
        separator.innerHTML = '|';
        navBar.appendChild(separator);
    }
}