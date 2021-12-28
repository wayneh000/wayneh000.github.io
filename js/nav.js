const linksData = [
    ['Home', '/'],
    ['Projects', '/projects.html'],
    ['Technologies', '/technologies.html'],
    ['Education', '/education.html']
];


let mainNav = document.getElementById('mainNav');
mainNav.classList.add('list-group');
mainNav.classList.add('list-group-horizontal-sm');

function appendLink(text, url) {
    let a = document.createElement('a');
    a.innerHTML = text;
    a.href = url;
    a.classList.add('list-group-action');
    a.classList.add('list-group-item-action');
    a.classList.add('text-primary');
    mainNav.appendChild(a);
}

for (let data of linksData)
    appendLink(data[0], data[1]);