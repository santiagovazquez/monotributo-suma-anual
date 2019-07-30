# monotributo-suma-anual

Calcula la facturación anual de tu monotributo. 

# Pasos

1. Instalá el mono-sum
````
npm install -g santiagovazquez/monotributo-suma-anual
````
2. Corré el programa y pasale como argumento el path al directorio donde tenés descargadas tus facturas:
````
mono-sum [PATH_TO_DIR]
````

¡Listo!

# Extra: descarga todas tus facturas desde la web de AFIP
1. Si ya tenés todas tus facturas descargadas, salteá este paso. 
    1. Descargá todas tus facturas desde el sitio de afip:
       
        ![alt text](https://raw.githubusercontent.com/santiagovazquez/monotributo-suma-anual/master/images/afip_paso_1.png)

        ![alt text](https://raw.githubusercontent.com/santiagovazquez/monotributo-suma-anual/master/images/afip_paso_2.png)

    2. En la siguiente pantalla podés bajarlas ejecutando un script, pero antes deshabilitá la opción del chrome para evitar el popup que pregunta dónde debería descargarla (luego la podés volver a habilitar): 
        
        Para acceder a los ajustes de chrome: [chrome://settings/downloads](chrome://settings/downloads)
    
        ![alt text](https://raw.githubusercontent.com/santiagovazquez/monotributo-suma-anual/master/images/chrome_settings.png)

        Correr en la consola del developer tools:
        ````
            $('input[value="Ver"]').toArray().forEach((e) => {
                const newUrlPart = e.onclick.toString().match(/imprimirComprobante.do\?c=[0-9]+/);
                if (!newUrlPart) console.log(e);
                window.open(window.location.href.replace('buscarComprobantesGenerados.do', newUrlPart[0]), '_blank');
            });
        ````


