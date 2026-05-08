# Guía de imágenes - TechZen Smart Homes

## Dónde cambiar fotos

Las imágenes de servicios y de la galería están en:

```text
public/images/
```

El vídeo de demostración está en:

```text
public/videos/
```

Si quieres sustituir una imagen por una foto real, lo más sencillo es mantener el mismo nombre de archivo. Así no hace falta tocar el código.

## Reglas antes de subir fotos

- Usa fotos propias o fotos con permiso comercial claro.
- No subas imágenes de webs de empresas competidoras.
- No uses fotos con marcas de agua, logos ajenos, nombres de otras empresas o textos comerciales de terceros.
- Evita caras, matrículas, direcciones, portales, números de vivienda o datos privados.
- Comprime las imágenes antes de subirlas para no perjudicar la velocidad.
- Prioriza fotos horizontales, limpias y bien iluminadas para tarjetas de galería.

## Placeholders actuales

La web usa imágenes propias del proyecto y placeholders SVG neutros creados para TechZen. No se han usado imágenes copiadas de empresas externas.

Placeholders listos para sustituir:

- `domotic-wiring.svg`: instalaciones eléctricas y cableado.
- `electrical-panel.svg`: cuadros eléctricos.
- `knx-installation.svg`: KNX.
- `loxone-installation.svg`: Loxone.
- `home-assistant-dashboard.svg`: Home Assistant.
- `smart-lighting-scenes.svg`: iluminación inteligente.
- `motorized-blinds.svg`: persianas y estores motorizados.
- `smart-climate-control.svg`: climatización inteligente.
- `security-sensors.svg`: seguridad y sensores.
- `energy-monitoring.svg`: ahorro energético y medición.
- Tarjetas de antes/después: preparadas en la web como espacios pendientes de foto real.

## Fotos reales recomendadas

- Canalizaciones limpias y cableado ordenado.
- Cuadros eléctricos antes y después.
- Protecciones, diferenciales, magnetotérmicos y etiquetado.
- Módulos Shelly instalados detrás de mecanismos o en cuadro.
- Pulsadores KNX, pantallas y cuadros domóticos.
- Loxone Miniserver o cuadros de automatización.
- Dashboards de Home Assistant en tablet o pantalla.
- Tiras LED, iluminación ambiental y escenas.
- Persianas o estores motorizados.
- Termostatos y sensores de temperatura.
- Sensores de movimiento, apertura, fuga de agua o humo.
- Medidores de consumo y gráficos energéticos.

## Consejo para SEO visual

Cuando subas una foto real, usa un nombre descriptivo:

```text
cuadro-electrico-domotico-madrid.jpg
instalacion-shelly-luces-madrid.jpg
dashboard-home-assistant-vivienda.jpg
```

Después revisa el `alt` en `src/App.jsx` para que describa la foto con naturalidad.
