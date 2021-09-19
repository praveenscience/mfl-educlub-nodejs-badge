const fs = require("fs");
const Jimp = require("jimp");
const Students = fs.readFileSync("./students.csv");

const StudentsArr = Students.toString().split(`
`);

let loadedImage;

const PrintTicket = (File, Text) => {
  return Jimp.read("ticket.png")
    .then(image => {
      loadedImage = image;
      return Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
    })
    .then(font => {
      loadedImage
        .print(
          font,
          365,
          290,
          {
            text: Text,
            alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
          },
          1000,
          50
        )
        .write(File);
    });
};

const main = async () => {
  StudentsArr.forEach(stuName => {
    console.log(`Priting Certificate for ${stuName}`);
    await PrintTicket(stuName.trim().replace(/\s/g, "-") + ".png", stuName);
  });
};

main();
