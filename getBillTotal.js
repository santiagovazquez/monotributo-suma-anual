const PDFExtract = require('pdf.js-extract').PDFExtract;

module.exports = (filePath) => new Promise((resolve, reject) => {
  const pdfExtract = new PDFExtract();
  // takes only the first page on the PDF
  const options = { firstPage: 1, lastPage: 1 }; /* see below */

  pdfExtract.extract(filePath, options, (err, data) => {
    if (err) return reject(err);

    const { pages: [ { content } = {} ] = [] } = data || {};

    // area with result, taken from tabula-pdf project
    const [ y1, x1, y2, x2 ] = [647.434375, 498.684375, 672.7218750000001, 579.009375];

    const itemsOnPage = content.filter(({ x, y }) => x > x1 && y > y1 && x < x2 && y < y2);

    if (itemsOnPage.length === 1) {
      const billTotal = parseInt(itemsOnPage[0].str.replace(',', '.'));

      console.log(`Factura ${filePath}: $`, billTotal);

      resolve(billTotal);

    } else if (itemsOnPage.length === 0){
      reject(new Error('Total de la factura no encontrado!'));
    } else {
      reject(new Error('Se encontraron más elementos en el área del total de la factura'));
    }
  })
});
