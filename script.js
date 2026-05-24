const container = document.querySelector("#container")
const vvod = document.querySelector("#myInput")
const button = document.querySelector("#myButton")

container.setAttribute("style", "display: flex; flex-wrap: wrap; background-color: rgba(81, 129, 177, 0.6); width: 800px; height: 800px; margin: 0 auto;")

let scale = 0

button.addEventListener('click', function(){
    scale = vvod.value;
    container.innerHTML = ''
    let percent = 0
    for(let i = 0; i < scale*scale; i++){
        let malDiv = document.createElement("div");
        percent = 100 / scale;
        malDiv.setAttribute("style", `width: ${percent}%; height: ${percent}%; background-color: brown;`)
        malDiv.addEventListener('mouseenter', () => {
            malDiv.style.backgroundColor = 'black';
        });
        container.append(malDiv);
    }
})
