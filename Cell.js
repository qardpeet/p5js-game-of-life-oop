class Cell {
  constructor(status, row, col, generationsSurvived) {
    this.status = status;
    this.row = row;
    this.col = col;
    this.generationsSurvived = generationsSurvived;
  }

  isAlive() {
    return this.status;
  }

  generationsSurvived() {
    return this.generationsSurvived;
  }

  killCell() {
    this.status = false;
  }

  birthCell() {
    this.status = true;
  }

  neighbors(parentMatrix) {
    let neighborCount = 0;
    if (
      parentMatrix[this.row].hasOwnProperty(this.col + 1) &&
      parentMatrix[this.row][this.col + 1]
    ) {
      neighborCount++;
    }
    if (
      parentMatrix[this.row].hasOwnProperty(this.col - 1) &&
      parentMatrix[this.row][this.col - 1]
    ) {
      neighborCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row + 1) &&
      parentMatrix[this.row + 1][this.col]
    ) {
      neighborCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row - 1) &&
      parentMatrix[this.row - 1][this.col]
    ) {
      neighborCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row - 1) &&
      parentMatrix[this.row - 1].hasOwnProperty(this.col - 1) &&
      parentMatrix[this.row - 1][this.col - 1]
    ) {
      neighborCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row - 1) &&
      parentMatrix[this.row - 1].hasOwnProperty(this.col + 1) &&
      parentMatrix[this.row - 1][this.col + 1]
    ) {
      neighborCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row + 1) &&
      parentMatrix[this.row + 1].hasOwnProperty(this.col - 1) &&
      parentMatrix[this.row + 1][this.col - 1]
    ) {
      neighborCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row + 1) &&
      parentMatrix[this.row + 1].hasOwnProperty(this.col + 1) &&
      parentMatrix[this.row + 1][this.col + 1]
    ) {
      neighborCount++;
    }
    return neighborCount;
  }

  shouldPopulate(parentMatrix) {
    if (this.neighbors(parentMatrix) < 2 || this.neighbors(parentMatrix) > 3) {
      this.killCell();
      this.generationsSurvived = 0;
    } else if (this.neighbors(parentMatrix) === 3) {
      this.birthCell();
      this.generationsSurvived++;
    } else {
      this.generationsSurvived++;
    }
  }
}
