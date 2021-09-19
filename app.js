const fs = require("fs");
const Jimp = require("jimp");
const Students = fs.readFileSync("./students.csv");
const StudentsArr = Students.toString().split(`
`);
StudentsArr.forEach(stuName => {
  console.log(`Printing Certificate for ${stuName}`);
});

Jimp.read("./ticket.png");
