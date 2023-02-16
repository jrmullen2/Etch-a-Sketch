const body = document.querySelector("body");
for(let i = 0; i < 16; i++)
{
    for(let j = 0; j < 16; j++)
    {
        let newDiv = document.createElement("div");
        let p = document.createElement("p");
        newDiv.appendChild(p);
        newDiv.classList.add("hover");
        body.appendChild(newDiv);
    }
}
const hover = document.querySelectorAll(".hover");
hover.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "black";
    });
});