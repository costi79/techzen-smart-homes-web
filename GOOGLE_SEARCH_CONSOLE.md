# Google Search Console e indexación - TechZen Smart Homes

## URL pública detectada

La web está publicada en GitHub Pages:

```text
https://costi79.github.io/techzen-smart-homes-web/
```

Archivos para Google:

```text
https://costi79.github.io/techzen-smart-homes-web/sitemap.xml
https://costi79.github.io/techzen-smart-homes-web/robots.txt
```

## Comprobación de robots.txt

Debe quedar así:

```txt
User-agent: *
Allow: /
Sitemap: https://costi79.github.io/techzen-smart-homes-web/sitemap.xml
```

## Paso a paso en Google Search Console

### Paso 1

Entra en Google Search Console:

```text
https://search.google.com/search-console
```

### Paso 2

Pulsa en **Añadir propiedad**.

### Paso 3

Elige el tipo de propiedad:

- **Dominio** si más adelante tienes un dominio propio, por ejemplo `techzensmarthomes.com`.
- **Prefijo de URL** si usas GitHub Pages, Vercel o una URL concreta.

Para esta web en GitHub Pages, usa **Prefijo de URL** y pega:

```text
https://costi79.github.io/techzen-smart-homes-web/
```

### Paso 4

Verifica la propiedad.

Opciones recomendadas para GitHub Pages:

1. **Etiqueta HTML meta tag**: Google te dará una etiqueta parecida a esta:

```html
<meta name="google-site-verification" content="CODIGO_QUE_DA_GOOGLE" />
```

Pega esa etiqueta en `index.html`, dentro de `<head>`, justo debajo de este bloque:

```html
<!-- GOOGLE SEARCH CONSOLE VERIFICATION -->
<!-- Pegar aquí la meta tag de Google Search Console. Ejemplo: -->
<!-- <meta name="google-site-verification" content="PEGAR_AQUI_CODIGO_DE_GOOGLE" /> -->
```

Después hay que hacer build, commit, push y esperar a que GitHub Pages despliegue.

2. **Archivo HTML de verificación**: si Google ofrece descargar un archivo, colócalo dentro de `public/` sin cambiarle el nombre. Después haz build, commit, push y verifica en Search Console.

No inventes el código: usa exactamente el que te dé Google.

### Paso 5

En Search Console, entra en **Sitemaps**.

### Paso 6

Envía el sitemap. Puedes escribir solo:

```text
sitemap.xml
```

O enviar la URL completa:

```text
https://costi79.github.io/techzen-smart-homes-web/sitemap.xml
```

### Paso 7

Usa **Inspección de URL** para pedir indexación de las páginas importantes.

Proceso:

1. Copia una URL prioritaria.
2. Pégala en la barra superior de Search Console.
3. Pulsa **Probar URL publicada**.
4. Si no hay errores, pulsa **Solicitar indexación**.

### Paso 8

Revisa periódicamente:

- **Páginas indexadas**.
- **Páginas no indexadas**.
- **Errores de sitemap**.
- **Problemas móviles**.
- **Rendimiento**.
- **Consultas de búsqueda**.

## URLs prioritarias para inspeccionar primero

Home:

```text
https://costi79.github.io/techzen-smart-homes-web/
```

Servicios principales:

```text
https://costi79.github.io/techzen-smart-homes-web/servicios/domotica-madrid
https://costi79.github.io/techzen-smart-homes-web/servicios/knx-madrid
https://costi79.github.io/techzen-smart-homes-web/servicios/shelly-madrid
https://costi79.github.io/techzen-smart-homes-web/servicios/home-assistant-madrid
https://costi79.github.io/techzen-smart-homes-web/servicios/loxone-madrid
https://costi79.github.io/techzen-smart-homes-web/servicios/cuadros-electricos-madrid
https://costi79.github.io/techzen-smart-homes-web/servicios/automatizacion-garaje-madrid
https://costi79.github.io/techzen-smart-homes-web/servicios/medicion-consumo-electrico-madrid
```

Blog:

```text
https://costi79.github.io/techzen-smart-homes-web/blog
```

Artículos principales:

```text
https://costi79.github.io/techzen-smart-homes-web/blog/que-es-knx-vivienda
https://costi79.github.io/techzen-smart-homes-web/blog/shelly-madrid-luces-persianas-garaje
https://costi79.github.io/techzen-smart-homes-web/blog/home-assistant-viviendas-inteligentes
https://costi79.github.io/techzen-smart-homes-web/blog/ahorrar-energia-domotica-medicion-consumo
https://costi79.github.io/techzen-smart-homes-web/blog/domotica-local-vs-nube
https://costi79.github.io/techzen-smart-homes-web/blog/cuadro-electrico-domotico
https://costi79.github.io/techzen-smart-homes-web/blog/automatizar-garaje-movil-siri-sensores
https://costi79.github.io/techzen-smart-homes-web/blog/knx-shelly-loxone-home-assistant-diferencias
```

Contacto:

La sección de contacto está dentro de la home:

```text
https://costi79.github.io/techzen-smart-homes-web/#contacto
```

Para indexación, prioriza la home sin `#contacto`, porque Google normalmente indexa la página completa y no necesita indexar el fragmento por separado.

## Checklist

- [ ] Web pública funcionando
- [ ] sitemap.xml accesible
- [ ] robots.txt accesible
- [ ] Propiedad añadida en Google Search Console
- [ ] Web verificada
- [ ] Sitemap enviado
- [ ] Página principal inspeccionada
- [ ] URLs importantes enviadas a indexación
- [ ] Sin errores importantes de cobertura
- [ ] Sin problemas móviles graves

## Qué revisar después de enviar el sitemap

- Espera unas horas o días: Google no indexa siempre al instante.
- Revisa si el sitemap aparece como **Correcto**.
- En **Páginas**, revisa motivos como “Descubierta: actualmente sin indexar” o “Rastreada: actualmente sin indexar”.
- Si una página no se indexa, mejora contenido útil, enlaces internos y solicita indexación otra vez con moderación.
- En **Rendimiento**, mira consultas con impresiones y bajo CTR para mejorar títulos y descripciones.
