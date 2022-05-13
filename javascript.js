const container = document.querySelector(".container");
let colorType = "black";
// Funtions to create, erase and fill the grid
function createGrid(size) {
  const cellSize = 650 / size;
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.height = cellSize + "px";
      cell.style.width = cellSize + "px";
      cell.addEventListener("mouseover", fillColor);
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}
function removeGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
function fillColor() {
  if (colorType === "Black") {
    this.style.backgroundColor = "black";
  } else if (colorType === "Random") {
    this.style.backgroundColor = generateRandomColor();
  }
}
function generateRandomColor() {
  // Function to generate a random hex color value so that it can be used to function the random button
  let choices = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += choices[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Reset button functionality
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  removeGrid();
  createGrid(16);
  slider.value = 16;
  sliderVal.textContent = 16;
});

// Black button functionality
const blackButton = document.querySelector("#black");
blackButton.addEventListener("click", () => {
  colorType = "Black";
});

// Random button functionality

const randomButton = document.querySelector("#random");
randomButton.addEventListener("click", () => {
  colorType = "Random";
});
// slider to adjust the grid size
const slider = document.querySelector("#slider>input");
const sliderVal = document.querySelector("#slider>p");
slider.addEventListener("input", () => {
  let newSize = slider.value;
  sliderVal.textContent = newSize;
  removeGrid();
  createGrid(newSize);
});

createGrid(16);
blackButton.click();
