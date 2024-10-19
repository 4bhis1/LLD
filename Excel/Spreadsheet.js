const Cell = require("./Cell")

class Spreadsheet {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.cells = new Array(this.row).fill(new Array(this.col).fill(new Cell()));
    }



    getCell(row, col) {
        return this.cells[row][col];
    }

    getCells() {
        return this.cells
    }

}

module.exports = Spreadsheet