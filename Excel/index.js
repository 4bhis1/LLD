const Spreadsheet = require("./Spreadsheet");

const worksheet1 = new Spreadsheet(5, 5);


for(let i= 0; i < 5; i++) {
    console.log(worksheet1.getCell(0,i).editValue(5))
}

// console.log(worksheet1.cells);
