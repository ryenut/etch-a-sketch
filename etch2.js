const grid = document.querySelector('.pad');
const inputGrid = document.querySelector('.user-input');
const select = document.querySelector('select');
const clear = document.querySelector('.reset');
const eraser = document.querySelector('.erase')
let click = false;

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

function generateGrid(px) {

    let createGrid = px * px
    let click = false; 

    document.querySelector('body').addEventListener('click', (e) => {
        if (e.target.tagName != 'BUTTON'){
            click = !click;
        }
    })
        
    grid.style.gridTemplateColumns = `repeat(${px}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${px}, 1fr)`;

    for (let i = 1; i <= createGrid; i++) {
        let div = document.createElement('div');
        div.classList.add('square')
        grid.insertAdjacentElement('beforeend', div);

        div.style.backgroundColor = 'black';
        
        function penColor(bgColor) {
            div.addEventListener('mouseover', () => { 
                if(click){               
                    div.style.backgroundColor = bgColor;
                }
        });

        function clearDivs() {
            div.style.backgroundColor = '#000';
        };

        clear.addEventListener('click', clearDivs);
    }

        select.addEventListener('change', () => {
            const choice = select.value;
            const random = '#' + Math.floor(Math.random()*16777215).toString(16);
        
            switch (choice) {
                case 'white':
                    penColor('white');
                    break;
                case 'random':
                    penColor(random);
            } 
        })
    }
}

generateGrid(32);


document.addEventListener('DOMContentLoaded', () => {
    inputGrid.addEventListener('click', () => {
        let px = getInput()
        generateGrid(px);
    })
});
