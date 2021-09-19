const fs = require("fs");
const Students = fs.readFileSync("./students.csv");
const StudentsArr = Students.toString().split(`
`);
