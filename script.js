const container = document.querySelector('.grid-container');
let gridItem;
let colourSelector = document.getElementById('colour-picker');
let colour;
let randomFlag = true;

function setColour(e){
    colour = e.target.value;
    gridItem.addEventListener('mouseover',colourApply);
}

function colourApply(e){
    if(randomFlag){
        e.target.style.background = randomRGB();
    }
    else{
        e.target.style.background = 'none';
    }   
}

function clear(e){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => item.style.backgroundColor = 'white');
}

function erase(e){
    randomFlag = false;
}

function randomRGB(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let RGBColor = "rgb(" + x + "," + y + "," + z + ")";
    return RGBColor;
}

function changeGrid(e){
    // remove grid-items
    let child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    }
    // create new grid
    let size = e.target.value;
    container.style.gridTemplateColumns = "repeat("+size+",1fr)";
    for (let i = 1; i <= size*size; i++){
        gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover',colourApply);
        container.append(gridItem);
    }
    const gridLabel = document.querySelector('label');
    gridLabel.textContent = size+" x "+size;
}

for (let i = 1; i <= 16*16; i++){
    gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.addEventListener('mouseover',colourApply);
    container.append(gridItem);
}
const gridSize = document.getElementById('grid-size');
gridSize.addEventListener('change',changeGrid);
colourSelector.addEventListener('change',setColour)
const RGBbutton = document.getElementById('rgb');
RGBbutton.addEventListener('click',function(e){
    randomFlag = true;
});
const eraseButton = document.getElementById('erase');
eraseButton.addEventListener('click',erase);
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',clear);