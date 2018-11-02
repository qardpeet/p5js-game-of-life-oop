# Game of life using p5js

"The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway."
Read more about it [here](https://bitstorm.org/gameoflife/).

In order to run it, clone the repo and host it on any live server.

### Cell Constructor

Here is how you would create an instance of the cell:

```sh
let cell = new Cell(status, row, col, generationsSurvived);
```

### Cell Methods

| Method                        | Description                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| .isAlive()                    | returns a boolean depending on the cell's status                                                                  |
| .killCell()                   | sets cell's status to false                                                                                       |
| .birthCell()                  | sets cell's status to true                                                                                        |
| .generationsSurvived()        | returns how long the cell has kept it's status true                                                               |
| .neighbors(parentMatrix)      | gets alive neighbor count, takes in a snapshot of each cell's status represented by a nested array                |
| .shouldPopulate(parentMatrix) | determines if the cell should go extinct, takes in a snapshot of each cell's status represented by a nested array |
