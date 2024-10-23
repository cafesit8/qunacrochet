import sharp from "sharp";
import fs from 'fs'
import path from 'path'

const inputDir = './';
const outputDir = './';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const convertImages = async () => {
  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    const filePath = path.join(inputDir, file);

    if (path.extname(file).toLowerCase() === '.jpg' || path.extname(file).toLowerCase() === '.jpeg') {
      const outputFilePath = path.join(outputDir, `${path.basename(file, path.extname(file))}.webp`);

      try {
        await sharp(filePath)
          .resize(600, 600)
          .toFormat('webp')
          .toFile(outputFilePath);

        console.log(`Convertido: ${file} -> ${outputFilePath}`);
      } catch (error) {
        console.error(`Error al convertir ${file}: `, error);
      }
    }
  }
};

convertImages();