import { promises as fs } from "fs";
import path from "path";

export async function getLocalData(fileName) {
  const filePath = path.join(process.cwd(), "content/", fileName);
  const jsonData = await fs.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return objectData;
}
