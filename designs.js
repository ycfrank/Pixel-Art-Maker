// Select color input
const COLOR = document.getElementById('colorPicker');

// Select size input
const GRID_HEIGHT = document.getElementById('inputHeight');
const GRID_WIDTH = document.getElementById('inputWidth');

// Initialize DOM Element variables
const GRID_SIZE = document.getElementById('sizePicker');
const CANVAS = document.getElementById('pixelCanvas');

// Changes the color of the pixel pen based on user's color input
function changeColor(element) {
    let color = COLOR.value;
    element.style = 'background-color: ' + color + ';';
}

// When size is submitted by the user, call makeGrid()
GRID_SIZE.addEventListener('submit', (event) => {
    makeGrid();
    event.preventDefault();
});

// Function for creating grid based on user input
function makeGrid() {
    // Initialize dimension variables within function
    let height = GRID_HEIGHT.value;
    let width = GRID_WIDTH.value;
    
    // Clears Canvas
    CANVAS.innerHTML = ' ';
    // Draws Grid 
    for(let i = 1; i <= height; i++) {

        let row = document.createElement('tr');

        for(let j = 1; j <= width; j++){
            let colunm = document.createElement('td');
            
            // If a click occurs, the the pixel canvas is updated
            colunm.addEventListener('click', function() {
                changeColor(this);
            });

            row.appendChild(colunm);
        }

        CANVAS.appendChild(row);
    }
}