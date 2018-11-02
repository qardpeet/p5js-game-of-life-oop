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

  neighbors(parentMatrixCopy) {
    let neighborCount = 0;
    if (
      parentMatrixCopy[this.row].hasOwnProperty(this.col + 1) &&
      parentMatrixCopy[this.row][this.col + 1]
    ) {
      neighborCount++;
    }
    if (
      parentMatrixCopy[this.row].hasOwnProperty(this.col - 1) &&
      parentMatrixCopy[this.row][this.col - 1]
    ) {
      neighborCount++;
    }
    if (
      parentMatrixCopy.hasOwnProperty(this.row + 1) &&
      parentMatrixCopy[this.row + 1][this.col]
    ) {
      neighborCount++;
    }
    if (
      parentMatrixCopy.hasOwnProperty(this.row - 1) &&
      parentMatrixCopy[this.row - 1][this.col]
    ) {
      neighborCount++;
    }
    if (
      parentMatrixCopy.hasOwnProperty(this.row - 1) &&
      parentMatrixCopy[this.row - 1].hasOwnProperty(this.col - 1) &&
      parentMatrixCopy[this.row - 1][this.col - 1]
    ) {
      neighborCount++;
    }
    if (
      parentMatrixCopy.hasOwnProperty(this.row - 1) &&
      parentMatrixCopy[this.row - 1].hasOwnProperty(this.col + 1) &&
      parentMatrixCopy[this.row - 1][this.col + 1]
    ) {
      neighborCount++;
    }
    if (
      parentMatrixCopy.hasOwnProperty(this.row + 1) &&
      parentMatrixCopy[this.row + 1].hasOwnProperty(this.col - 1) &&
      parentMatrixCopy[this.row + 1][this.col - 1]
    ) {
      neighborCount++;
    }
    if (
      parentMatrixCopy.hasOwnProperty(this.row + 1) &&
      parentMatrixCopy[this.row + 1].hasOwnProperty(this.col + 1) &&
      parentMatrixCopy[this.row + 1][this.col + 1]
    ) {
      neighborCount++;
    }
    return neighborCount;
  }

  shouldPopulate(parentMatrixCopy) {
    if (
      this.neighbors(parentMatrixCopy) < 2 ||
      this.neighbors(parentMatrixCopy) > 3
    ) {
      this.killCell();
      this.generationsSurvived = 0;
    } else if (this.neighbors(parentMatrixCopy) === 3) {
      this.birthCell();
      this.generationsSurvived++;
    } else {
      this.generationsSurvived++;
    }
  }
}
