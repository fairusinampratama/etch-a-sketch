let color = "black";
let click = true;

function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  
  let amount = Math.pow(size, 2);
  for(let i = 0; i<amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  populateBoard(input);
  document.getElementById('sizeValue').innerHTML = `${input} x ${input}`
}

function colorSquare() {
  if (click) {
    if(color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
  color = "black";
}

document.querySelector(".mode").addEventListener("click", () => {
  click = !click;
  if (click) {
    document.querySelector('.mode').textContent = "Coloring";
  } else {
    document.querySelector('.mode').textContent = "Not Coloring";
  }
});

