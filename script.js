const container = document.querySelector("#container")
const buttons = document.querySelectorAll(".scale")
const colorPicker = document.querySelector("#colorPicker")

container.setAttribute("style", "display: flex; flex-wrap: wrap; background-color: rgba(81, 129, 177, 0.6); width: 800px; height: 800px; margin: 0 auto;")

let color = "green"

function createGrid(scale){
    container.innerHTML = ''
    let percent = 100 / scale
    for(let i = 0; i < scale*scale; i++){
        let malDiv = document.createElement("div");
        malDiv.setAttribute("style", `width: ${percent}%; height: ${percent}%; background-color: brown;`)
        malDiv.addEventListener('mouseenter', () => {
            malDiv.style.backgroundColor = color;
        });
        container.append(malDiv);
    }
}

colorPicker.addEventListener('input', () => {
    color = colorPicker.value
    console.log(color)
})

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        let scale = button.id
        if (scale > 129) scale = 128;
        createGrid(scale);
    })
})

createGrid(16)