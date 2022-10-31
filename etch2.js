const grid = document.querySelector('.pad');
const inputGrid = document.querySelector('.user-input');
const select = document.querySelector('select');
const clear = document.querySelector('.reset');


function generateGrid(px) {

    let createGrid = px * px
        
    grid.style.gridTemplateColumns = `repeat(${px}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${px}, 1fr)`;

    for (let i = 1; i <= createGrid; i++) {
        let div = document.createElement('div');
        div.classList.add('square')
        grid.insertAdjacentElement('beforeend', div);
    }
};

generateGrid(32);
