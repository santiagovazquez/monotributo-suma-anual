const fs = require('fs');
const tabula = require('tabula-js');
// const t = tabula(source.pdf);
const CURRENT_DIR = process.cwd();

console.log(`reading files from: ${CURRENT_DIR}`);

const dirs = fs.readdirSync(CURRENT_DIR).filter(f => f.endsWith('.pdf') || f.endsWith('.PDF'));

dirs.forEach(f => {
  const file = fs.statSync(`${CURRENT_DIR}/${f}`);

  console.log(file);
});

console.log(dirs);

//t.extractCsv((err, data) => console.log(data));
