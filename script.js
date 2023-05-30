const container = document.querySelector("#container");

let containerChildren = [];

let isBlack = true;

let isColor = false;

//Creates Original 16 by 16 grid

for (let i = 0; i < 256; i++) {
  let newDiv = document.createElement("div");

  containerChildren[i] = newDiv;

  let p = document.createElement("p");

  newDiv.appendChild(p);

  newDiv.classList.add("hover");

  container.appendChild(newDiv);
}

//Making each div change background color when hovered over

let hover = document.querySelectorAll(".hover");

hover.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    let redValue = Math.floor(Math.random() * 256);

    let blueValue = Math.floor(Math.random() * 256);

    let greenValue = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue}`;
  });
});

//Providing button with functionality

const makeButton = document.getElementById("make");

makeButton.addEventListener("click", () => {
  let userPrompt = prompt(
    "How many squares per side would you like? The maximum amount is 100. (Enter a number)"
  );

  userNumber = parseInt(userPrompt);

  if (userNumber > 100 || userNumber < 1 || isNaN(userNumber)) {
    alert("This is an invalid value. Please try again");

    return;
  }
  removeGrid();

  createGrid(userNumber);
});

const blackButton = document.getElementById("black");

const colorButton = document.getElementById("color");

blackButton.addEventListener("click", () => {
  hover.forEach((div) => {
    div.style.backgroundColor = "white";
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "black";
    });
  });
});
colorButton.addEventListener("click", () => {
  hover.forEach((div) => {
    div.style.backgroundColor = "white";
    div.addEventListener("mouseenter", () => {
      let redValue = Math.floor(Math.random() * 256);

      let blueValue = Math.floor(Math.random() * 256);

      let greenValue = Math.floor(Math.random() * 256);

      div.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue}`;
    });
  });
});

function removeGrid() {
  for (let g = 0; g < hover.length; g++) {
    container.removeChild(containerChildren[g]);
  }
  return;
}

function createGrid(number) {
  //Changes the number of rows and columns in grid

  document.getElementById(
    "container"
  ).style.gridTemplateColumns = `repeat(${number}, auto)`;

  document.getElementById(
    "container"
  ).style.gridTemplateRows = `repeat(${number}, auto)`;

  for (let k = 0; k < number ** 2; k++) {
    let userDiv = document.createElement("div");

    containerChildren[k] = userDiv;

    let pUser = document.createElement("p");

    userDiv.appendChild(pUser);

    userDiv.classList.add("hover");

    container.appendChild(userDiv);
  }

  hover = document.querySelectorAll(".hover");

  console.log(hover.length);

  hover.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      let redValue = Math.floor(Math.random() * 256);

      let blueValue = Math.floor(Math.random() * 256);

      let greenValue = Math.floor(Math.random() * 256);

      div.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue}`;

      document.div.style.filter = `brightness(${brightnessPercent}%)`;
    });
  });

  return;
}
