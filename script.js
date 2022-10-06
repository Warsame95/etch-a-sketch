const container = document.querySelector('.grid-container');
let gridItem;
let colourSelector = document.getElementById('colour-picker');
let colour;

function setColour(e){
    colour = e.target.value;
    gridItem.addEventListener('mouseover',colourApply);
}

function colourApply(e){
    e.target.style.background = colour;
}

function clear(e){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => item.style.backgroundColor = 'white');
}

function erase(e){
    colour = 'white';
    gridItem.addEventListener('mouseover',colourApply);
}

for (let i = 1; i <= 16*16; i++){
    gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover',colourApply);
    container.append(gridItem);
}
colourSelector.addEventListener('change',setColour)
const eraseButton = document.getElementById('erase');
eraseButton.addEventListener('click',erase);
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',clear);