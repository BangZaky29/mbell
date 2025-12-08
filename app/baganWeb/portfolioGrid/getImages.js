import fs from "fs";
import path from "path";

export function getImages(folderName) {
  const folderPath = path.join(process.cwd(), "public", "assets", folderName);

  if (!fs.existsSync(folderPath)) {
    console.warn(`Folder tidak ditemukan: ${folderPath}`);
    return [];
  }

  const files = fs.readdirSync(folderPath);

  return files
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))
    .map((file, index) => ({
      id: index + 1,
      filename: file,
      src: `/assets/${folderName}/${file}`,
      alt: `${folderName} image ${index + 1}`,
    }));
}
