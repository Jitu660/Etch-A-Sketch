const container = document.querySelector(".container");

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

const slider = document.querySelector("#slider>input");
const sliderVal = document.querySelector("#slider>p");
slider.addEventListener("input", () => {
  let newSize = slider.value;
  sliderVal.textContent = newSize;
  removeGrid();
  createGrid(newSize);
});

function fillColor() {
  this.style.backgroundColor = "black";
}

function removeGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
createGrid(16);
