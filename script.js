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

let userNumber;
do
{
    let userPrompt = prompt("How many squares per side would you like? The maximum amount is 100. (Enter a number)");
    userNumber = userPrompt;
}
while(typeof(userNumber) != "number");

function removeGrid()
{
    for(let g = 0; g < 16; g++)
    {
        for(let h = 0; h < 16; h++)
        {
            body.removeChild(newDiv);
        }
    }
}
function userGrid(number)
{
    for(let k = 0; k < number; k++)
    {
        for(let h = 0; h < number; h++)
        {
            let userDiv = document.createElement("div");
            let pUser = document.createElement("p");
            userDiv.appendChild(pUser);
            userDiv.classList.add("hover");
            body.appendChild(newDiv);
        }   
    }
}
removeGrid();
userGrid(userNumber);