const container = document.querySelector('.grid-container');
let gridItem;

function colourBlue(e){
    e.target.style.background = 'blue';
}

function clear(e){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => item.style.backgroundColor = 'white');
}

for (let i = 1; i <= 16*16; i++){
    gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover',colourBlue);
    gridItem.textContent = i.toString();
    container.append(gridItem);
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',clear);