const gameContainer = document.querySelector('.game-container');

// Create Game area (Rows and Columns)

for (let i = 0; i < 10; i++) {
    let row = document.createElement('div');
    row.className = "row";
    for (let j = 0; j < 9; j++) {
        let c = document.createElement('div');

        c.className = "block";
        c.dataset.row = i;
        c.dataset.column = j;

        row.append(c);
    }
    gameContainer.append(row);
}

// Create a random Form

function createGameBlock() {
    let form;
    
    
    let formsFunctions = [createFormSquare, createFormLine, createFormL, createFormReversedL, createFormI, createFormZ, createFormReversedZ];

    let randomNumber = Math.floor(Math.random() * formsFunctions.length);
    
    form = formsFunctions[randomNumber]();

    // if (randomNumber == 0) {
    //     form = createFormSquare();
    // }  else if (randomNumber == 1) {
    //     form = createFormLine();
    // } else if (randomNumber == 2) {
    //     form = createFormL();
    // } else if (randomNumber == 3) {
    //     form = createFormReversedL();
    // }

    let i = 0;
    let slide = setInterval(() => {
        if (!slideBlockDown(form)) {
            clearInterval(slide);
            createGameBlock();
        }
    }, 1000);

    window.onkeydown = function (e) {
        // console.log('jjjjjjjjjjjjjj');
        
        // console.log(e.key);
        if (e.key == "ArrowRight") {
            slideBlockRight(form)
        } else if (e.key == "ArrowLeft") {
            slideBlockLeft(form)
        } else if (e.key == "ArrowDown") {
            slideBlockDown(form)
        }
    }
}

// Create a square of the form

function createElementBlock(row, column, color = "red") {
    let d = document.createElement('div');
  
    d.className = "game-block";
    d.style.backgroundColor = color;

    gameContainer.children[row].children[column].append(d);


    return d;
}

// Create Form: Square

function createFormSquare() {
    
    let formArray = [[], []];

    formArray[1].push(createElementBlock(0, 4, "blueviolet"));
    formArray[1].push(createElementBlock(0, 5, "blueviolet"));
    formArray[0].push(createElementBlock(1, 4, "blueviolet"));
    formArray[0].push(createElementBlock(1, 5, "blueviolet"));

    return formArray;
}

function createFormLine() {
    
    let formArray = [[], [], []];

    formArray[2].push(createElementBlock(0, 4, "orangered"));
    formArray[1].push(createElementBlock(1, 4, "orangered"));
    formArray[0].push(createElementBlock(2, 4, "orangered"));

    return formArray;
}

function createFormL() {
    
    let formArray = [[], [], []];

    formArray[2].push(createElementBlock(0, 4, "dodgerblue"));
    formArray[1].push(createElementBlock(1, 4, "dodgerblue"));
    formArray[0].push(createElementBlock(2, 4, "dodgerblue"));
    formArray[0].push(createElementBlock(2, 5, "dodgerblue"));

    return formArray;
}

function createFormReversedL() {
    
    let formArray = [[], [], []];

    formArray[2].push(createElementBlock(0, 5, "green"));
    formArray[1].push(createElementBlock(1, 5, "green"));
    formArray[0].push(createElementBlock(2, 4, "green"));
    formArray[0].push(createElementBlock(2, 5, "green"));

    return formArray;
}

function createFormI() {
    
    let formArray = [[], []];

    formArray[1].push(createElementBlock(0, 4, "black"));
    formArray[0].push(createElementBlock(1, 3, "black"));
    formArray[0].push(createElementBlock(1, 4, "black"));
    formArray[0].push(createElementBlock(1, 5, "black"));

    return formArray;
}

function createFormZ() {
    
    let formArray = [[], []];

    formArray[1].push(createElementBlock(0, 3, "red"));
    formArray[1].push(createElementBlock(0, 4, "red"));
    formArray[0].push(createElementBlock(1, 4, "red"));
    formArray[0].push(createElementBlock(1, 5, "red"));

    return formArray;
}

function createFormReversedZ() {
    
    let formArray = [[], []];

    formArray[1].push(createElementBlock(0, 5, "gray"));
    formArray[1].push(createElementBlock(0, 4, "gray"));
    formArray[0].push(createElementBlock(1, 4, "gray"));
    formArray[0].push(createElementBlock(1, 3, "gray"));

    return formArray;
}

// - Forms
// - 
// - Line Validation
// - 
createGameBlock();
// Function to slide Form Down

function slideBlockDown(form) {
    console.log(form[0]);

    // Check if the next row (same column) is empty 

    for (let item of form[0]) {
        try {
            // alert('a');
            if (!item.parentElement.parentElement.nextElementSibling || item.parentElement.parentElement.nextElementSibling.children[item.parentElement.dataset.column].firstElementChild) {
                // alert('k')
                return false
            }
        } catch {
            // alert('l');
            return false;
        }
    }

    // Apply to each square of the form

    for (let i = 0; i < form.length; i++) {
        for (let element of form[i]) {
            try {

                // Append each square of the form to the next row

                element.parentElement.parentElement.nextElementSibling.children[element.parentElement.dataset.column].append(element);
            } catch {
                return false;
            }
            // alert();
        }
    }
    
    return true;
}

// Function to slide Form to Right

function slideBlockRight(form) {


      for (let item of form[0]) {
        try {
            // alert('a');
            if (!item.parentElement.parentElement.nextElementSibling || item.parentElement.parentElement.nextElementSibling.children[item.parentElement.dataset.column].firstElementChild) {
                // alert('k')
                return false
            }
        } catch {
            // alert('l');
            return false;
        }
    }


    // Apply to each square of the form

    for (let i = 0; i < form.length; i++) {
        for (let element of form[i]) {
            try {

                // Append each square of the form to the next column
                element.parentElement.parentElement.children[+element.parentElement.dataset.column + 1].append(element);
            } catch {
                return false;
            }
            // alert();
        }
    }
}
         
// Function to slide Form to Left

function slideBlockLeft(form) {

    // Apply to each square of the form

    for (let i = 0; i < form.length; i++) {
        for (let element of form[i]) {
            try {

                // Append each square of the form to the previous column

                element.parentElement.parentElement.children[+element.parentElement.dataset.column - 1].append(element);
            } catch {
                return false;
            }
            // alert();
        }
    }
}

function isPositionOccupied(row,column) {
    const cell = gameContainer.children[row].children[column];
    return cell.firstElementChild !== null;  // will tell us if the block is empty 
}

function checkCollision(block) {
    const row = parseInt(block.parentElement.dataset.row); // our previouse function get the parameteres
    const column = parseInt(block.parentElement.dataset.column);
    
    // Check if position is already occupied
    return isPositionOccupied(row, column);
}

function isWithinBoundaries(row, column) {
    return row >= 0 && row < 10 && column >= 0 && column < 9;
}

function canMoveTo(form, newRow, newColumn) {
    // Check each block in the form
    for (let block of form.flat()) {
        const targetRow = newRow + parseInt(block.parentElement.dataset.row);
        const targetColumn = newColumn + parseInt(block.parentElement.dataset.column);
        
        // Check boundaries
        if (!isWithinBoundaries(targetRow, targetColumn)) {
            return false;
        }
        
        // Check if target position is occupied by a block not in current form
        const targetCell = gameContainer.children[targetRow].children[targetColumn];
        if (targetCell.firstElementChild && 
            !form.flat().includes(targetCell.firstElementChild)) {
            return false;
        }
    }
    
    return true;
}


function slideBlockDown(form) {
    // Check if can move down
    if (!canMoveTo(form, 1, 0)) {
        return false;
    }

    // Move blocks
    for (let i = form.length - 1; i >= 0; i--) {
        for (let block of form[i]) {
            const currentRow = parseInt(block.parentElement.dataset.row);
            const currentColumn = parseInt(block.parentElement.dataset.column);
            const nextCell = gameContainer.children[currentRow + 1].children[currentColumn];
            nextCell.appendChild(block);
        }
    }
    
    return true;
}

function slideBlockRight(form) {
    // Check if can move right
    if (!canMoveTo(form, 0, 1)) {
        return false;
    }

    // Move blocks
    for (let block of form.flat()) {
        const currentColumn = parseInt(block.parentElement.dataset.column);
        const nextCell = block.parentElement.parentElement.children[currentColumn + 1];
        nextCell.appendChild(block);
    }
}

function slideBlockLeft(form) {
    // Check if can move right
    if (!canMoveTo(form, 1, 0)) {
        return false;
    }

    // Move blocks
    for (let block of form.flat()) {
        const currentRow = parseInt(block.parentElement.dataset.column);
        const prCell = block.parentElement.parentElement.children[currentRow - 1];
        prCell.appendChild(block);
    }
}
function slideBlockLeft(form) {
    // First check if any block in the form is at the leftmost edge
    // or if there's an occupied cell to the left
    for (let i = 0; i < form.length; i++) {
        for (let element of form[i]) {
            const currentColumn = parseInt(element.parentElement.dataset.column);
            const currentRow = parseInt(element.parentElement.dataset.row);
            
            // Check if at left boundary
            if (currentColumn <= 0) {
                return false;
            }
            
            // Check if the cell to the left is occupied by a block not in the current form
            const leftCell = element.parentElement.parentElement.children[currentColumn - 1];
            if (leftCell.firstElementChild && 
                !form.flat().includes(leftCell.firstElementChild)) {
                return false;
            }
        }
    }

    // If checks pass, move blocks from left to right
    // Sort blocks by column position to prevent overlapping
    const blocks = form.flat().sort((a, b) => {
        return parseInt(a.parentElement.dataset.column) - 
               parseInt(b.parentElement.dataset.column);
    });

    // Move each block
    for (let block of blocks) {
        const currentColumn = parseInt(block.parentElement.dataset.column);
        const leftCell = block.parentElement.parentElement.children[currentColumn - 1];
        leftCell.appendChild(block);
    }

    return true;
}





















