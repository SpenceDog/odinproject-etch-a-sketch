// This is the code that is used to create the etch a sketch canvas.
function etch(){
    var boxWidth = 16; // Box dimensions.
    var boxHeight = 16;

    for (let i = 0; i < boxHeight; i++) { // For each row...
        const rowContent = document.createElement("div"); // Creates a div.
       rowContent.id = "etch-row-"+i;
       rowContent.className = "etch-row"
      document.getElementById("etch-box-content").appendChild(rowContent);

    for(let y = 0; y < boxWidth; y++){ // For each column in a row...
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