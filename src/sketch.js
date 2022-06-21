var cols, rows;
var w = 10;
var grid = [];
var position; 
var stack = [];
var start = true;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);

  for (var j = 0; j < cols; j++) {
    for (var i = 0; i < rows; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  position = grid[35];
}


function draw() {

  background(51);
  for (var i = 0; i < grid.length; i++) {

    if (grid[i] == position)
      position.isPosition = true;
    else
      grid[i].isPosition = false;
    grid[i].show();
  }

  if (stack.length != 0 || start == true) {
    start = false;
    position.visited = true;

    var next = position.checkAround();
    if (next) {
      next.visited = true;
      removeWalls(next, position);
      stack.push(position);
      position = next;
    }
    else {
      position = stack.pop();
    }
  }
}


function removeWalls(N, P) {
  var dif = index(P.i, P.j) - index(N.i, N.j);
  console.log(dif);
  if (dif == -1) {
    P.removeWall(1);
    N.removeWall(3);
  }
  else if (dif == 1) {
    P.removeWall(3);
    N.removeWall(1);
  }
  else if (dif > 1) {
    P.removeWall(0);
    N.removeWall(2);
  }
  else if (dif < -1) {
    P.removeWall(2);
    N.removeWall(0);
  }
}


function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1)
    return -1;
  return i + j * cols;
}

