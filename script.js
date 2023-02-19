const container = document.querySelector("#container");

for(let i = 0; i < 16; i++)
{
    for(let j = 0; j < 16; j++)
    {
        let newDiv = document.createElement("div");

        let p = document.createElement("p");

        newDiv.appendChild(p);

        newDiv.classList.add("hover");

        container.appendChild(newDiv);
    }
}

const hover = document.querySelectorAll(".hover");

hover.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = "black";
    });
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let userPrompt = prompt("How many squares per side would you like? The maximum amount is 100. (Enter a number)");
    userNumber = parseInt(userPrompt);
    if(userNumber > 100 || userNumber < 1 || isNaN(userNumber))
    {
        alert("This is an invalid value. Please try again")
        return;
    }
    removeGrid();
    createGrid(userNumber);
});


function removeGrid()
{
    for(let g = 0; g < 16; g++)
    {
        for(let h = 0; h < 16; h++)
        {
            let oldDiv = document.querySelector(".hover");
            container.removeChild(oldDiv);
        }
    }
    return;
}
function createGrid(number)
{
    for(let k = 0; k < number; k++)
    {
        for(let h = 0; h < number; h++)
        {
            let userDiv = document.createElement("div");
            let pUser = document.createElement("p");
            userDiv.appendChild(pUser);
            userDiv.classList.add("hover2");
            container.appendChild(userDiv);
        }   
    }
    const hover2 = document.querySelectorAll(".hover2");
    hover2.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "black";
        });
    });
    return;
}
