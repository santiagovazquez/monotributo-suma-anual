$('input[value="Ver"]').toArray().forEach((e) => {
  const newUrlPart = e.onclick.toString().match(/imprimirComprobante.do\?c=[0-9]+/);
  if (!newUrlPart) console.log(e);
  window.open(window.location.href.replace('buscarComprobantesGenerados.do', newUrlPart[0]), '_blank');
});
