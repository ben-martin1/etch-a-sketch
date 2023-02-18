const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
const sizeSlider = document.getElementById('sizeSlider');
const size = document.querySelector('.result');

const redColor = document.querySelector('.red');
const blueColor = document.querySelector('.blue');
const greenColor = document.querySelector('.green');
const yellowColor = document.querySelector('.yellow');

let currentColor = "white";

let rowCount;
let divList;

buildGrid(1);

sizeSlider.oninput = function () {
    buildGrid(this.value);
}

function buildGrid(count) {
    let toBeDestroyed = container.getElementsByClassName('row');
    toBeDestroyed += container.getElementsByClassName('div-component');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let x = 0; x < count; x++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let y = 0; y < count; y++) {
            const divComponent = document.createElement('div');
            divComponent.classList.add('div-component');
            divComponent.addEventListener('mousedown', changeColor);
            divComponent.addEventListener('mouseover', onMouseOver);
            divComponent.addEventListener('mouseleave', onMouseLeave);
            row.appendChild(divComponent);
        }
        container.appendChild(row);

    }
    recalculateDivList();
}

redColor.onclick = function () {
    currentColor = "red";
}
blueColor.onclick = function () {
    currentColor = "blue";
}
greenColor.onclick = function () {
    currentColor = "green";
}
yellowColor.onclick = function () {
    currentColor = "yellow";
}

function recalculateDivList() {
    divList = container.children;
    console.log(divList);
}

function changeColor() {
    this.style.backgroundColor = currentColor;
}
function onMouseOver() {
    this.style.border = "2px dashed white";
    console.log("over");
}
function onMouseLeave() {
    this.style.backgroundColor -= "red";
    this.style.border = "1px solid black";
}