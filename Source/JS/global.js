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