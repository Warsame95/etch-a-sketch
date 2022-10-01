const container = document.querySelector('.grid-container');

for (let i = 1; i <= 16*16; i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = i.toString();
    container.append(gridItem);
}