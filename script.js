const container = document.querySelector("#container");

let containerChildren = [];

let userNumber = 16;

function originalGrid(userNum) {
  createGrid(userNum);
  //Making each div change background color when hovered over (default effect)
  let hover = document.querySelectorAll(".hover");
  hover.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "black";
    });
  });
}

originalGrid(userNumber);

//Providing buttons with functionality
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
  let hover = document.querySelectorAll(".hover");
  hover.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "black";
    });
  });
});

const blackButton = document.getElementById("black");

const colorButton = document.getElementById("color");

const colorFade = document.getElementById("colorFade");

blackButton.addEventListener("click", () => {
  removeGrid();
  createGrid(userNumber);
  let hover = document.querySelectorAll(".hover");
  hover.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "black";
    });
  });
});

colorButton.addEventListener("click", () => {
  removeGrid();
  createGrid(userNumber);
  let hover = document.querySelectorAll(".hover");
  hover.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      let redValue = Math.floor(Math.random() * 256);
      let blueValue = Math.floor(Math.random() * 256);
      let greenValue = Math.floor(Math.random() * 256);
      div.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue}`;
    });
  });
});

colorFade.addEventListener("click", () => {
  removeGrid();
  createGrid(userNumber);
  let hover = document.querySelectorAll(".hover");
  hover.forEach((div) => {
    div.style.backgroundColor = "white";
    div.style.filter = "brightness(1)";
    let brightnessTracker = 1.1;
    let isColored = false;
    div.addEventListener("mouseenter", () => {
      if (isColored === false) {
        let redValue = Math.floor(Math.random() * 256);
        let blueValue = Math.floor(Math.random() * 256);
        let greenValue = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${redValue}, ${blueValue}, ${greenValue}`;
        isColored = true;
      }
      if (brightnessTracker > 0) {
        brightnessTracker -= 0.1;
      }
      div.style.filter = `brightness(${brightnessTracker})`;
    });
  });
});

function removeGrid() {
  let hover = document.querySelectorAll(".hover");
  for (let g = 0; g < hover.length; g++) {
    container.removeChild(containerChildren[g]);
  }
  return;
}

function createGrid(number) {
  //Changes the number of rows and columns in grid
  container.style.gridTemplateColumns = `repeat(${number}, auto)`;
  container.style.gridTemplateRows = `repeat(${number}, auto)`;
  for (let k = 0; k < number ** 2; k++) {
    let userDiv = document.createElement("div");
    containerChildren[k] = userDiv;
    let pUser = document.createElement("p");
    userDiv.appendChild(pUser);
    userDiv.classList.add("hover");
    container.appendChild(userDiv);
  }
  return;
}
