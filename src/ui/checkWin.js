// form mark is the array was 2 dimentional 

function isHoriz(cells, player) {
  return cells.filter((row) => row.every((cell) => cell === player)).length;
}

function transpose(cells) {
  return cells[0].map((_, colIndex) => cells.map((row) => row[colIndex]));
}

function isVert(cells, player) {
  return isHoriz(transpose(cells), player);
}

function isDiag(cells, player) {
  return;
}

function isGameOver(){
    // return (cells.filter((row) => row.every((cell) => cell)).length).length
    // (cells.filter((row) => row.every((cell) => cell)).length) === 3
    // return  cells.flatMap(cell => cell ).length === 3*3
    return  cells.flatMap(cell => cell).length === 9
}

filter, reduce, some, every -> 1 for 1

map, flatMap -> transofrm some set of items into an equal number of another set of items
//[...cells] == cells

[0, 0],
  [1, 1],
  [2, 2],
  [0, 2],
  [1, 1],
  [2, 0][([0, 0, 0], [0, 0, 1], [0, 0, 0])];
