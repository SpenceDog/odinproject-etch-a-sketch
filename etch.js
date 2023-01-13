// This is the code that is used to create the etch a sketch canvas.
function etch(){

    var gridWidth = 1024; // Sets our total etch size.
    var gridHeight = 1024;

    var userInputWidth; // Declars size prompt.
    var userInputHeight;

    while(!/^[0-9][0-9]+$/.test(userInputWidth)){ // While it is NOT a number between 1-100...
        userInputWidth = prompt("Please enter a width between 10-100"); // Get Prompts.
        userInputWidth--; // Not optimal, but easy loophole to regex that is decently safe for this project.
    }

    userInputWidth++;

    while(!/^[0-9][0-9]+$/.test(userInputHeight)){
        userInputHeight = prompt("Please enter a height between 10-100");
        userInputHeight--
    }

    userInputHeight++;

    var boxWidth = gridWidth/userInputWidth; // Box dimensions.
    var boxHeight = gridHeight/userInputHeight;

    for (let i = 0; i < userInputHeight; i++) { // For each row...
        const rowContent = document.createElement("div"); // Creates a div.
       rowContent.id = "etch-row-"+i;
       rowContent.className = "etch-row"
      document.getElementById("etch-box-content").appendChild(rowContent);

    for(let y = 0; y < userInputWidth; y++){ // For each column in a row...
        const colContent = document.createElement("div"); // Creates a cell.
        colContent.id = "etch-col-"+i+"-"+y;
        colContent.className = "etch-col"
        colContent.setAttribute("style", "background-color:#fff; width: " + boxWidth + "px; height: " + boxHeight + "px;");
        document.getElementById(rowContent.id).appendChild(colContent);
        document.getElementById(colContent.id).addEventListener("mouseover", changeColor);
        }
    } 
}

function changeColor(){ // Allows the color to change.
    console.log("MOUSED OVER!" + event.target.id);
    document.getElementById(event.target.id).style.backgroundColor = "blue";
}

function clearEtch(){ // Clears and recreates it with the new dimensions.
    const etchContent = document.getElementsByClassName("etch-row"); // Clears out the form on the screen.
        while(etchContent.length > 0){
            etchContent[0].parentNode.removeChild(etchContent[0]);
        }
    etch();
}