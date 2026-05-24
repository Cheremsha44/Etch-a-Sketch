const container = document.querySelector("#container")
container.setAttribute("style", "display: flex; flex-wrap: wrap; background-color: rgba(81, 129, 177, 0.6); width: 800px; height: 800px; margin: 0 auto;")

for(let i = 0; i < 256; i++){
    let malDiv = document.createElement("div");
    malDiv.classList.add("child");
    container.append(malDiv);
}
