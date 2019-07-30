#!/usr/bin/env node

const fs = require('fs');
const getBillTotal = require('./getBillTotal');

const [,, ...args] = process.argv;

let rootDir = process.cwd();
if (args.length > 0) {
  rootDir = args[0];
}

const pdfsOnDir = fs.readdirSync(rootDir).filter(f => f.endsWith('.pdf') || f.endsWith('.PDF'));

if (pdfsOnDir.length === 0 && args.length === 0) {
  throw new Error(`No hay PDFs en el directorio actual. Podés especificar un directorio:\n mono-sum [DIR_PATH]`);
} else if (pdfsOnDir.length === 0) {
  throw new Error(`No hay PDFs en el directorio especificado: ${rootDir}`);
}

const tasks = pdfsOnDir.map(fileName => getBillTotal(`${rootDir}/${fileName}`));

Promise.all(tasks)
  .then( (billTotals) => {
    console.log(`Suma total: `, billTotals.reduce((acum, i) => (acum + i), 0));
  })
  .catch(e => {
    console.log(e);
  });


