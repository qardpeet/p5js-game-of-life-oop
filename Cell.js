class Cell {
  constructor(status, row, col, generationsSurvived) {
    this.status = status;
    this.row = row;
    this.col = col;
    this.generationsSurvived = generationsSurvived;
  }

  get isAlive() {
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

  neighbours(parentMatrix) {
    let neighbourCount = 0;
    if (
      parentMatrix[this.row].hasOwnProperty(this.col + 1) &&
      parentMatrix[this.row][this.col + 1]
    ) {
      neighbourCount++;
    }
    if (
      parentMatrix[this.row].hasOwnProperty(this.col - 1) &&
      parentMatrix[this.row][this.col - 1]
    ) {
      neighbourCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row + 1) &&
      parentMatrix[this.row + 1][this.col]
    ) {
      neighbourCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row - 1) &&
      parentMatrix[this.row - 1][this.col]
    ) {
      neighbourCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row - 1) &&
      parentMatrix[this.row - 1].hasOwnProperty(this.col - 1) &&
      parentMatrix[this.row - 1][this.col - 1]
    ) {
      neighbourCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row - 1) &&
      parentMatrix[this.row - 1].hasOwnProperty(this.col + 1) &&
      parentMatrix[this.row - 1][this.col + 1]
    ) {
      neighbourCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row + 1) &&
      parentMatrix[this.row + 1].hasOwnProperty(this.col - 1) &&
      parentMatrix[this.row + 1][this.col - 1]
    ) {
      neighbourCount++;
    }
    if (
      parentMatrix.hasOwnProperty(this.row + 1) &&
      parentMatrix[this.row + 1].hasOwnProperty(this.col + 1) &&
      parentMatrix[this.row + 1][this.col + 1]
    ) {
      neighbourCount++;
    }
    return neighbourCount;
  }

  shouldPopulate(parentMatrix) {
    if (
      this.neighbours(parentMatrix) < 2 ||
      this.neighbours(parentMatrix) > 3
    ) {
      this.killCell();
      this.generationsSurvived = 0;
    } else if (this.neighbours(parentMatrix) === 3) {
      this.birthCell();
      this.generationsSurvived++;
    } else {
      this.generationsSurvived++;
    }
  }
}
