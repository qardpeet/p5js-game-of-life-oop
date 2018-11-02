//---------------------------------------------------------

let speed = 20;
let resolution = 8;
let _height = 80; // rows in matrix
let _width = 200; // cols in matrix
let matrix = initMatrix(_height, _width);

//---------------------------------------------------------

function initMatrix(_height, _width) {
  let matrix2D = [];
  for (let i = 0; i < _height; i++) {
    matrix2D[i] = [];
    for (let j = 0; j < _width; j++) {
      let status = Math.random() >= 0.5;
      matrix2D[i][j] = new Cell(status, i, j, 0);
    }
  }
  return matrix2D;
}

//---------------------------------------------------------

function copyParentMatrix() {
  let parentMatrixCopy = [];
  for (let r = 0; r < _height; r++) {
    parentMatrixCopy[r] = [];
    for (let c = 0; c < _width; c++) {
      parentMatrixCopy[r][c] = matrix[r][c].isAlive();
    }
  }
  return parentMatrixCopy;
}

//---------------------------------------------------------

function tick() {
  let parentMatrixCopy = copyParentMatrix();
  for (let i = 0; i < _height; i++) {
    for (let j = 0; j < _width; j++) {
      if (matrix[i][j].isAlive()) {
        fill(0, 255, matrix[i][j].generationsSurvived / 4);
        rect(j * resolution, i * resolution, resolution, resolution);
      }
      matrix[i][j].shouldPopulate(parentMatrixCopy);
    }
  }
}

//---------------------------------------------------------

function mouseWheel(event) {
  let increment = resolution + -(event.delta / 50);
  resolution = increment < 1 ? 1 : increment;
  resizeCanvas(_width * resolution, _height * resolution);
}

function keyPressed() {
  if (keyCode === ENTER) {
    matrix = initMatrix(_height, _width);
  }
}

function setup() {
  fSlider = createSlider(1, 100, 20);
  fSlider.position(CENTER, 0);
  textAlign(CENTER);
  createCanvas(_width * resolution, _height * resolution);
}

function draw() {
  speed = fSlider.value(); // speed of evolution
  frameRate(speed);
  background(253);
  stroke(0);
  tick();
}
