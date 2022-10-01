const container = document.querySelector('.grid-container');
let gridItem;

function colourBlue(e){
    e.target.style.background = 'blue';
}

for (let i = 1; i <= 16*16; i++){
    gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover',colourBlue);
    gridItem.textContent = i.toString();
    container.append(gridItem);
}
