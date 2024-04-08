const grid = document.querySelector('.grid');
let gridValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');
const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');
const eraser = document.querySelector('.eraser')
const hint = document.querySelector('.hint')
let squareSize = 8;
grid.style.backgroundColor = "black";

createGrid(squareSize);

// Create Squared Divs
function createDiv(size) {
  const div = document.createElement('div');
  div.classList.add('box');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

// Creat The Grid and append it to grid
function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

function reset() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
  createGrid(squareSize);
}

function randomColor(){
    // yellow , green , purple , blue ,orange,red,light-green
    let colors = ["#f0ff8d","#b483ff","#8dc9ff","#8dc9ff","#ff7070","#66e4a2"]
    const i_num = Math.floor(Math.random()*6)
    return colors[i_num];
}

// Used event delegation to target children of the grid
grid.addEventListener('mouseover', function (e) {
  // Add the "active" class to only divs with a "box" class
  
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
    e.target.style.backgroundColor = randomColor();
    // grid.style.backgroundColor = "black"
  }
});

eraser.addEventListener('click',()=>{
    grid.addEventListener('mouseover',function(e){
        if (e.target.matches('.active')){
            e.target.classList.toggle('active')
            e.target.style.backgroundColor = "black";
            grid.style.backgroundColor = "black"
        }else{
            e.target.classList.add('active')
            e.target.style.backgroundColor = randomColor();
            grid.style.backgroundColor = "black"
        }
    })
})

grid.addEventListener('dblclick', function(e){
    if (e.target.matches('.active')){
        e.target.classList.toggle('active')
        e.target.style.backgroundColor = "black";
        // grid.style.backgroundColor = "black"
    }else{
        e.target.classList.add('active')
        e.target.style.backgroundColor = randomColor();
        // grid.style.backgroundColor = "black"
    }
})

gridSize.addEventListener('input', function (e) {
  squareSize = e.target.value;
  gridValue.textContent = `${squareSize}x${squareSize}`;
});

applyGridSize.addEventListener('click', function () {
  reset();
});

resetBtn.addEventListener('click', reset);

hint.addEventListener('click',()=>{
    alert("press once to erase and press again to re draw")
})