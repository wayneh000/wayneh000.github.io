const linksData = [
    ['GitHub', 'http://www.github.com/wayneh000'],
    ['CodinGame', 'https://www.codingame.com/profile/7b63e4b6584165fe668217db7ac343a98406854'],
    ['HackerRank', 'https://www.hackerrank.com/wayneh000'],
    ['TrailBlazer', 'https://trailblazer.me/id/wayneh000']
];

let footerLinks = document.getElementById('footerLinks');
footerLinks.classList.add('navbar', 'navbar-expand-sm', 'navbar-light', 'my-3');

let linksContainer = document.createElement('div');
linksContainer.classList.add('container-fluid');

let footerNavBar = document.createElement('div');
footerNavBar.classList.add('navbar-nav', 'mx-auto', 'fs-6');
for (let link of linksData)
    addLink(link[0], link[1]);
linksContainer.appendChild(footerNavBar);

footerLinks.appendChild(linksContainer);



function addLink(text, url) {
    let a = document.createElement('a');
    a.innerHTML = text;
    a.href = url;
    a.classList.add('nav-link');
    footerNavBar.appendChild(a);

    if (text != linksData[linksData.length - 1][0]) {
        let separator = document.createElement('span');
        separator.classList.add('nav-link');
        separator.innerHTML = '|';
        footerNavBar.appendChild(separator);
    }
}