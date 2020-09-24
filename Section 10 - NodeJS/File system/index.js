const fs = require("fs").promises;
const { watchFile } = require("fs");
const path = require("path");

//listando caminho do arquivo atual
// fs.readdir(path.resolve(__dirname))
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e));

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    //usando expressão regular
    if (/\.git/g.test(fileFullPath)) continue; //n exibir o .git
    if (/node_modules/g.test(fileFullPath)) continue; // n exibir o node_modules

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }
    if (!/\.css/g.test(fileFullPath) && !/\html$/g.test(fileFullPath)) continue;
    console.log(fileFullPath);
  }
}
readdir("caminho-do-seu-diretório");
