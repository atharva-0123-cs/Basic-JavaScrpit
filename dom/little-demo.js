const mainButton = document.querySelector("button");
console.log(mainButton);
const body = document.body;
const crrColor = document.querySelector(".current-color");

function randomColorGenerator(){
    const red = Math.floor(Math.random()*125);
    const green = Math.floor(Math.random()*125);
    const blue = Math.floor(Math.random()*125);

    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}

mainButton.addEventListener("click", ()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    crrColor.textContent = randomColor;
})
