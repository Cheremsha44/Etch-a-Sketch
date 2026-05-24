const container = document.querySelector("#container")
const vvod = document.querySelector("#myInput")
const button = document.querySelector("#myButton")

let scale = 0

button.addEventListener('click', function(){
    scale = vvod.value;
    console.log(scale)
    for(let i = 0; i < scale*scale; i++){
        let malDiv = document.createElement("div");
        malDiv.classList.add("child");
        malDiv.addEventListener('mouseenter', () => {
            malDiv.style.backgroundColor = 'black';
        });
    container.append(malDiv);
}
})

container.setAttribute("style", "display: flex; flex-wrap: wrap; background-color: rgba(81, 129, 177, 0.6); width: 800px; height: 800px; margin: 0 auto;")


