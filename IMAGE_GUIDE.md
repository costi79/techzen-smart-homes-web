# Guia de imagenes - TechZen Smart Homes

## Donde cambiar fotos

Las imagenes de servicios y de la galeria estan en:

```text
public/images/
```

El video de demostracion esta en:

```text
public/videos/
```

Si quieres sustituir una imagen por una foto real, lo mas sencillo es mantener el mismo nombre de archivo. Asi no hace falta tocar el codigo.

## Regla obligatoria de licencia

- No usar imagenes descargadas de webs de electricistas, instaladores, empresas de domotica, KNX partners, Shelly partners, Loxone partners o competidores.
- Usar solo fotos propias, bancos gratuitos con licencia comercial clara, recursos libres, mockups propios o imagenes generadas para TechZen.
- Si hay duda sobre licencia, origen o permiso de uso comercial, no se usa.

## Reglas antes de subir fotos

- Usa fotos propias o fotos con permiso comercial claro.
- No subas imagenes de webs de empresas competidoras.
- No uses fotos con marcas de agua, logos ajenos, nombres de otras empresas o textos comerciales de terceros.
- Evita caras, matriculas, direcciones, portales, numeros de vivienda o datos privados.
- Comprime las imagenes antes de subirlas para no perjudicar la velocidad.
- Prioriza fotos horizontales, limpias y bien iluminadas para tarjetas de galeria.

## Placeholders actuales

La web usa imagenes propias del proyecto y placeholders SVG neutros creados para TechZen. No se deben usar imagenes copiadas de empresas externas.

Placeholders listos para sustituir:

- `domotic-wiring.svg`: instalaciones electricas y cableado.
- `electrical-panel.svg`: cuadros electricos.
- `knx-installation.svg`: KNX.
- `loxone-installation.svg`: Loxone.
- `home-assistant-dashboard.svg`: Home Assistant.
- `smart-lighting-scenes.svg`: iluminacion inteligente.
- `motorized-blinds.svg`: persianas y estores motorizados.
- `smart-climate-control.svg`: climatizacion inteligente.
- `security-sensors.svg`: seguridad y sensores.
- `energy-monitoring.svg`: ahorro energetico y medicion.
- Tarjetas de antes/despues: preparadas en la web como espacios pendientes de foto real.

## Fotos reales recomendadas

- Canalizaciones limpias y cableado ordenado.
- Cuadros electricos antes y despues.
- Protecciones, diferenciales, magnetotermicos y etiquetado.
- Modulos Shelly instalados detras de mecanismos o en cuadro.
- Pulsadores KNX, pantallas y cuadros domoticos.
- Loxone Miniserver o cuadros de automatizacion.
- Dashboards de Home Assistant en tablet o pantalla.
- Tiras LED, iluminacion ambiental y escenas.
- Persianas o estores motorizados.
- Termostatos y sensores de temperatura.
- Sensores de movimiento, apertura, fuga de agua o humo.
- Medidores de consumo y graficos energeticos.

## Consejo para SEO visual

Cuando subas una foto real, usa un nombre descriptivo:

```text
cuadro-electrico-domotico-madrid.jpg
instalacion-shelly-luces-madrid.jpg
dashboard-home-assistant-vivienda.jpg
```

Despues revisa el `alt` en `src/App.jsx` para que describa la foto con naturalidad.
