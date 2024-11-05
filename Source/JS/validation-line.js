function checkRowFull() {
    const screenScore = document.querySelector('.screen-score');
    
    let fullRows = 0;
    let score = parseInt(screenScore.innerText);
    const rows = Array.from(gameContainer.children); // Make an array to access rows easily

    console.log(rows);
    
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let count = 0;
        
        // Check if the row is full by count
        for (let j = 0; j < row.childElementCount; j++) {
            let column = row.children[j];
            
            if (column.hasChildNodes()) {
                count++;
            }
        }

        // If the row is full clear it
        if (count === row.childElementCount) {
            fullRows++;
            
            // Remove all child elements in this row
            for (let j = 0; j < row.childElementCount; j++) {
                let column = row.children[j];
                column.removeChild(column.firstElementChild);
            }

            // Increase score
            score += 15;
            screenScore.innerText = score;

            // Shift rows above down by 1
            for (let k = i - 1; k >= 0; k--) {
                const rowAbove = rows[k];

                console.log(rowAbove);
                
                for (let j = 0; j < rowAbove.childElementCount; j++) {
                    const column = rowAbove.children[j];
                    const block = column.firstElementChild;
                    if (block) {
                        // Move block to the row directly below
                        gameContainer.children[k + 1].children[j].appendChild(block);
                    }
                }
            }
        }
    }
}
