import * as fs from "fs";
import * as path from "path";
import * as rimraf from "rimraf";
import * as temp from "temp";
import { models } from "../../../../util/apis";

export function isDirectory(path: string): boolean {
  return fs.statSync(path).isDirectory();
}

export async function saveConfigFile(filePath: string, configuration: models.BranchConfiguration): Promise<string> {
  return new Promise((resolve) => {
    fs.writeFileSync(filePath, JSON.stringify(configuration));
    resolve(filePath);
  });
}

async function getTempPath(filePath: string): Promise<string> {
  return new Promise((resolve) => {
    const outputFolderPath: string = temp.mkdirSync("branch-configs");
    rimraf.sync(outputFolderPath);
    fs.mkdirSync(outputFolderPath);

    const outputFilePath: string = path.join(outputFolderPath, path.basename(filePath));
    resolve(outputFilePath);
  });
}

export async function saveToTemp(filePath: string, configuration: models.BranchConfiguration): Promise<string> {
  const outputFilePath: string = await getTempPath(filePath);
  await saveConfigFile(outputFilePath, configuration);
  return outputFilePath;
}

export async function saveTo(filePath: string, configuration: models.BranchConfiguration): Promise<string> {
  const outputFilePath: string = path.join(process.cwd(), path.basename(filePath));
  await saveConfigFile(outputFilePath, configuration);
  return outputFilePath;
}

export async function readFrom(filePath: string): Promise<any> {
  return new Promise((resolve, reject) => {
    // const outputFilePath: string = path.join(process.cwd(), path.basename(filePath));
    const fileString = fs.readFileSync(path.basename(filePath)).toString();
    try {
      const configuration = JSON.parse(fileString);
      resolve(configuration);
    } catch (error) {
      reject(error);
    }
  });
}
