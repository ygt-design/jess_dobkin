import sharp from "sharp";
const fs = require("fs");

// Compress and resize the images in a directory
const inputDir = "./images/";
const outputDir = "./compressed_images/";

fs.readdirSync(inputDir).forEach((file) => {
  sharp(`${inputDir}/${file}`)
    .resize({ width: 800 }) // Resize to a width of 800px, maintaining aspect ratio
    .toFormat("jpeg", { quality: 70 }) // Convert to JPEG with 70% quality
    .toFile(`${outputDir}/${file}`, (err, info) => {
      if (err) console.error(err);
      else console.log(`Image ${file} compressed successfully!`);
    });
});
