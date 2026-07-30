const maindiv = document.getElementById("container")
function generateGrid(side){
    let rowElement = null;
    for (let i = 0 ; i < side ; i++){
        rowElement = document.createElement("div");

        for (let j = 0 ; j < side ; j++){
            const columnElement = document.createElement("div");
            rowElement.appendChild(columnElement);
        }

        maindiv.appendChild(rowElement);
    }
    let opacity = 0;
    const box = document.querySelectorAll("#container div div");
    box.forEach(columnElement => {
        columnElement.style.opacity = 0;
        columnElement.addEventListener("mouseenter", () => {
            let currentOpacity = parseFloat(columnElement.style.opacity);
            opacity = currentOpacity + 0.1;
            if (opacity > 1){
                opacity = 1;
            }
            columnElement.style.opacity = opacity;
            console.log("success");
        });
    });
    box.forEach(columnElement => {
            columnElement.style.opacity = 0;
        });
    const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    box.forEach(columnElement => {
        columnElement.style.opacity = 0;
    });
});
}
generateGrid(16)


const squareSideInput = document.getElementById("squareSideInput");
const squareSideButton = document.getElementById("squareSide");
squareSideButton.addEventListener("click", () => {
    const squareSide = parseInt(squareSideInput.value);
    if (isNaN(squareSide) || squareSide <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }
    else{
        maindiv.innerHTML = "";
        generateGrid(squareSide);
    }
    squareSideInput.value = "";
}); 