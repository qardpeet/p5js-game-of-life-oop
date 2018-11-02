# Game of life using p5js

"The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway."
Read more about it [here](https://bitstorm.org/gameoflife/).

In order to run it, clone the repo and host it on any live server.

### Cell Constructor

Here is how you would create an instance of the cell:

```sh
let cell = new Cell(status, row, col, generationsSurvived);
```

- status - will the cell be alive or dead (true/false)
- row - location of the cell in a 2D array
- col - location of the cell in a 2D array
- generationsSurvived - generally you would set this to 0, but you have the option to change it

### Cell Methods

| Method                            | Description                                                                                                       |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| .isAlive()                        | returns a boolean depending on the cell's status                                                                  |
| .killCell()                       | sets cell's status to false                                                                                       |
| .birthCell()                      | sets cell's status to true                                                                                        |
| .generationsSurvived()            | returns how long the cell has kept it's status true                                                               |
| .neighbors(parentMatrixCopy)      | gets alive neighbor count, takes in a snapshot of each cell's status represented by a nested array                |
| .shouldPopulate(parentMatrixCopy) | determines if the cell should go extinct, takes in a snapshot of each cell's status represented by a nested array |

### Initializing array of Cell objects

In my demonstration, I store each cell instance in a matrix (2D array) and refer to it every time I need a snapshot of cells' status.
Here is how you can initialize the array:

```sh
function initMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      let status = Math.random() >= 0.5;
      matrix[i][j] = new Cell(status, i, j, 0);
    }
  }
  return matrix;
}
```

### Coming alive

Now all you need to do for the cells to start 'living' is start iterating over the 2D array using nested for loops and call cell.shouldPopulate(parentMatrixCopy) on every instance.

```sh
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (matrix[i][j].isAlive()) {
            //Do something
        }
        matrix[i][j].shouldPopulate(parentMatrixCopy);
    }
}
```

Keep in mind, that the parentMatrixCopy should be just a copy of cell instances array where you only copy each cell's status.

```sh
function copyParentMatrix(array2D) {
    let parentMatrixCopy = [];
    for (let r = 0; r < rows; r++) {
        parentMatrixCopy[r] = [];
        for (let c = 0; c < cols; c++) {
            parentMatrixCopy[r][c] = matrix[r][c].isAlive();
        }
    }
    return parentMatrixCopy;
}
```
