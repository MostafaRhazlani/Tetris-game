
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





















