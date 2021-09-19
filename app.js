const fs = require("fs");
const Jimp = require("jimp");
const Students = fs.readFileSync("./students.csv");
const StudentsArr = Students.toString().split(`
`);
StudentsArr.forEach(stuName => {
  console.log(`Printing Certificate for ${stuName}`);
});

let loadedImage;
Jimp.read("./ticket.png").then(image => {
  loadedImage = image;
  return Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
});
