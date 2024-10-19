const Cell = require("./Cell");

class Spreadsheet {
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.cells = Array.from({ length: this.row }).map(() =>
      Array.from({ length: this.col }).map(() => new Cell())
    );
  }

  getCell(row, col) {
    return this.cells[row][col];
  }

  getCells() {
    return this.cells;
  }

  addRow(value) {
    this.row++;
    this.cells.push(
      Array.from({ length: this.col }).map(() => new Cell(value))
    );
  }

  addCol(value) {
    this.col++;
    this.cells.forEach((doc) => {
      doc.push(new Cell(value));
    });
  }
}

module.exports = Spreadsheet;
