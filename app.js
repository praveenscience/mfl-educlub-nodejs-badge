const fs = require("fs");
const Jimp = require("jimp");
const Students = fs.readFileSync("./students.csv");
const StudentsArr = Students.toString().split(`
`);
StudentsArr.forEach(stuName => {
  console.log(`Printing Certificate for ${stuName}`);
});

let loadedImage;
Jimp.read("./ticket.png")
  .then(image => {
    loadedImage = image;
    return Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
  })
  .then(font => {
    loadedImage
      .print(
        font,
        450,
        290,
        {
          text: "Hello!",
          alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
          alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
        },
        1080,
        50
      )
      .write("PrintedTicket.png");
  });
