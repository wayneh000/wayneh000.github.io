const linksData = [
    ['Home', '/'],
    ['Projects', '/projects.html'],
    ['Technologies', '/technologies.html'],
    ['Education', '/education.html']
];


let mainNav = document.getElementById('mainNav');
let links = [];

function createLink(text, url) {
    links.push(`<li><a href="${url}">${text}</a></li>`);
}

for (let data of linksData)
    createLink(data[0], data[1]);

mainNav.innerHTML = `<ul>${links.join('<li>|</li>')}</ul>`;