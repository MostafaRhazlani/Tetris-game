
function checkRowFull() {
    const screenScore = document.querySelector('.screen-score');
    
    let score = parseInt(screenScore.innerText)
    let count = 0;
    for (let i = 0; i < gameContainer.childElementCount; i++) {
        const row = gameContainer.children[i];
        
        // check if the row full by count blocks 
        for (let j = 0; j < row.childElementCount; j++) {
            let column = row.children[j]
            
            if(column.hasChildNodes()) {
                count++
            }
        }

        // clear row if count equal total column of row
        if (count == row.childElementCount) {
            for (let j = 0; j < row.childElementCount; j++) {
                let column = row.children[j]
                
                column.removeChild(column.firstElementChild)
                
            }
            
            // add score if the row removed
            score+= 15;
            screenScore.innerText = score;
        } else {
            count = 0
        }

    }
}