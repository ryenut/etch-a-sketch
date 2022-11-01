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

generateGrid(16);

function getInput() {

    let input = prompt('Enter the size of the board', 16);

    if (input == "" || input == null) {
        prompt('Enter the size of the board');
    }else if (input < 1 || input > 100) {
        prompt('Enter a number between 1 and 100');
    }else {
        return input;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    inputGrid.addEventListener('click', () => {
        let px = getInput()
        generateGrid(px);
    })
});