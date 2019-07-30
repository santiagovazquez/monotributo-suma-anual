# monotributo-suma-anual

¿Sos monotributista y tenés que calcular el total de tu facturación del año? Tal vez esto te puede ayudar.

# Pasos

1. Descargá todas tus facturas

    1. Si no las tenés descargadas bajalas desde la web de la afip:
    2. Para bajarlas todas juntas y evitar muchos clicks, podés quitar la opción de preguntar antes de descargar: [chrome://settings/downloads](chrome://settings/downloads)
    3. Abrí el chrome tools y corré el siguiente script en la consola:
    ````
    $('input[value="Ver"]').toArray().forEach((e) => {
      const newUrlPart = e.onclick.toString().match(/imprimirComprobante.do\?c=[0-9]+/);
      if (!newUrlPart) console.log(e);
      window.open(window.location.href.replace('buscarComprobantesGenerados.do', newUrlPart[0]), '_blank');
    });
    ````

2. Instalá el mono-sum
````
npm install -g monotributo-suma-anual
````
3. Corré el programa y pasale como argumento el path al directorio donde tenés descargadas tus facturas:
````
mono-sum [PATH_TO_DIR]
````
