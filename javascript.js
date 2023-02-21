const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const sizeSlider = document.getElementById('sizeSlider');
const size = document.querySelector('.result');
const reset = document.querySelector('.reset');
const equalize = document.querySelector('equalize');

let totalDivComponents;

let currentColor = "white";

buildGrid(1);

sizeSlider.oninput = function () {
    buildGrid(this.value);
}

function buildGrid(count) {
   
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let x = 0; x < count; x++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let y = 0; y < count; y++) {
            const divComponent = document.createElement('div');
            divComponent.classList.add('div-component');
            divComponent.id = `${x},${y}`;
            divComponent.addEventListener('mouseover', onMouseOver);
            row.appendChild(divComponent);
        }
        container.appendChild(row);

    }

    recalculateDivList();
}

function equalizeColors(){

}


reset.onclick = function (){
    buildGrid(sizeSlider.value);
}

function recalculateDivList() {
    /*let totalDivComponents = container.getElementsByClassName('row');*/
   let totalDivComponents = container.getElementsByClassName('div-component');
    console.log(totalDivComponents);
}

function onMouseOver() {
    getRandomColor();
    this.style.backgroundColor = currentColor;
}

function getRandomColor(){
    let r = Math.trunc(Math.random()*255);
    let g = Math.trunc(Math.random()*255);
    let b = Math.trunc(Math.random()*255);

    currentColor = `rgb(${r},${g},${b})`;
    console.log(currentColor);
}
