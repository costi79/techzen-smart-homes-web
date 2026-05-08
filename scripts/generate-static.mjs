import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const dist = "dist";
const site = "https://costi79.github.io/techzen-smart-homes-web";

const routes = [
  ["/", "TechZen Smart Homes | Electricidad, KNX, Shelly y Domótica en Madrid", "Electricidad y domótica profesional en Madrid. KNX Partner y Shelly Partner Verified para Shelly, KNX, Loxone, Home Assistant, cuadros eléctricos, seguridad y ahorro energético."],
  ["/contacto", "Contacto TechZen Smart Homes | Presupuesto domótica Madrid", "Contacta con TechZen Smart Homes para electricidad, domótica, KNX, Shelly, Loxone y Home Assistant en Madrid y alrededores."],
  ["/servicios/electricista-madrid", "Electricista Madrid y domótica | TechZen Smart Homes", "Electricista en Madrid especializado en instalaciones eléctricas, reformas, puntos de luz, enchufes, cuadros eléctricos y preparación para domótica."],
  ["/electricista-madrid", "Electricista Madrid y domótica | TechZen Smart Homes", "Electricista en Madrid especializado en instalaciones eléctricas, reformas, puntos de luz, enchufes, cuadros eléctricos y preparación para domótica."],
  ["/servicios/cuadros-electricos-madrid", "Cuadros eléctricos Madrid | Cuadros domóticos TechZen", "Cuadros eléctricos en Madrid: protecciones, diferenciales, magnetotérmicos, sobretensiones, sectorización, etiquetado y preparación para domótica."],
  ["/cuadros-electricos-madrid", "Cuadros eléctricos Madrid | Cuadros domóticos TechZen", "Cuadros eléctricos en Madrid: protecciones, diferenciales, magnetotérmicos, sobretensiones, sectorización, etiquetado y preparación para domótica."],
  ["/servicios/domotica-madrid", "Domótica Madrid | Viviendas inteligentes TechZen", "Domótica profesional en Madrid para luces, persianas, climatización, enchufes, sensores, escenas, horarios, seguridad y control desde móvil."],
  ["/domotica-madrid", "Domótica Madrid | Viviendas inteligentes TechZen", "Domótica profesional en Madrid para luces, persianas, climatización, enchufes, sensores, escenas, horarios, seguridad y control desde móvil."],
  ["/servicios/shelly-madrid", "Instalación Shelly Madrid | Shelly Partner Verified", "Instalación Shelly en Madrid: Shelly Plus, Shelly Pro, Shelly EM, relés, medición de consumo, control local, escenas y automatización sin grandes obras."],
  ["/instalacion-shelly-madrid", "Instalación Shelly Madrid | Shelly Partner Verified", "Instalación Shelly en Madrid: Shelly Plus, Shelly Pro, Shelly EM, relés, medición de consumo, control local, escenas y automatización sin grandes obras."],
  ["/servicios/knx-madrid", "Instalador KNX Madrid | KNX Partner TechZen", "Instalador KNX Partner en Madrid para iluminación, persianas, climatización, escenas, sensores, pantallas y control centralizado en viviendas premium."],
  ["/knx-madrid", "Instalador KNX Madrid | KNX Partner TechZen", "Instalador KNX Partner en Madrid para iluminación, persianas, climatización, escenas, sensores, pantallas y control centralizado en viviendas premium."],
  ["/servicios/loxone-madrid", "Loxone Madrid | Automatización residencial avanzada", "Integración Loxone en Madrid con Miniserver, escenas, iluminación, climatización, seguridad, eficiencia energética y control centralizado."],
  ["/loxone-madrid", "Loxone Madrid | Automatización residencial avanzada", "Integración Loxone en Madrid con Miniserver, escenas, iluminación, climatización, seguridad, eficiencia energética y control centralizado."],
  ["/servicios/home-assistant-madrid", "Home Assistant Madrid | Instalación y dashboards", "Instalación Home Assistant en Madrid: dashboards, sensores, cámaras, Shelly, KNX, Apple Home, Google Home, Alexa y automatizaciones locales."],
  ["/home-assistant-madrid", "Home Assistant Madrid | Instalación y dashboards", "Instalación Home Assistant en Madrid: dashboards, sensores, cámaras, Shelly, KNX, Apple Home, Google Home, Alexa y automatizaciones locales."],
  ["/servicios/iluminacion-inteligente-madrid", "Iluminación inteligente Madrid | LED, escenas y regulación", "Iluminación inteligente en Madrid: regulación, tiras LED, RGBW, sensores de presencia, escenas, horarios y luz decorativa o funcional."],
  ["/servicios/persianas-estores-motorizados-madrid", "Persianas motorizadas Madrid | Control móvil y escenas", "Persianas y estores motorizados en Madrid con control por pulsador, móvil, voz, horarios, escenas, sol, temperatura y seguridad."],
  ["/servicios/climatizacion-inteligente-madrid", "Climatización inteligente Madrid | Domótica y ahorro", "Control inteligente de aire acondicionado, calefacción, termostatos, horarios, sensores de temperatura, eficiencia energética y confort."],
  ["/servicios/seguridad-sensores-madrid", "Seguridad inteligente Madrid | Sensores y cámaras", "Sensores de movimiento, puertas, ventanas, fugas de agua, humo, cámaras, notificaciones y automatizaciones de seguridad para viviendas."],
  ["/servicios/medicion-consumo-electrico-madrid", "Medición consumo eléctrico Madrid | Shelly EM y ahorro", "Medición de consumo eléctrico en Madrid con Shelly EM, control de cargas, apagados automáticos, avisos de consumo y optimización energética."],
  ["/servicios/automatizacion-garaje-madrid", "Automatización garaje Madrid | Móvil, Siri y sensores", "Automatización de garaje en Madrid con control desde móvil, Siri, sensores de apertura, avisos, cámaras y escenas seguras."],
  ["/servicios/mantenimiento-domotica-madrid", "Mantenimiento domótica Madrid | Soporte y mejoras", "Mantenimiento de domótica y electricidad en Madrid: revisión de instalaciones, averías, mejoras progresivas, ampliaciones y soporte."],
  ["/blog", "Blog de domótica, KNX, Shelly y Home Assistant | TechZen", "Guías prácticas sobre domótica Madrid, KNX, Shelly, Loxone, Home Assistant, ahorro energético, cuadros eléctricos y automatización de viviendas."],
  ["/blog/que-es-knx-vivienda", "Qué es KNX y cuándo instalarlo en vivienda | TechZen", "Guía práctica sobre KNX: qué es, cuándo conviene instalarlo, ventajas frente a otros sistemas y cómo encaja en proyectos de domótica en Madrid."],
  ["/blog/shelly-madrid-luces-persianas-garaje", "Shelly Madrid para luces, persianas y garaje", "Cómo usar Shelly para automatizar luces, persianas y garaje en Madrid sin grandes obras, manteniendo seguridad eléctrica y control local."],
  ["/blog/home-assistant-viviendas-inteligentes", "Home Assistant viviendas inteligentes | Ventajas", "Ventajas de Home Assistant para viviendas inteligentes: control local, paneles, automatizaciones, integración con Shelly, KNX, Apple Home y Google Home."],
  ["/blog/ahorrar-energia-domotica-medicion-consumo", "Ahorrar energía con domótica y medición de consumo", "Ideas prácticas para ahorrar energía con domótica, medición de consumo eléctrico, automatizaciones y control de climatización en viviendas."],
  ["/blog/domotica-local-vs-nube", "Domótica local vs nube | Qué opción es más fiable", "Comparativa entre domótica local y domótica en la nube para viviendas: fiabilidad, privacidad, mantenimiento y uso con Home Assistant."],
  ["/blog/cuadro-electrico-domotico", "Cuadro eléctrico domótico | Qué es y por qué importa", "Qué es un cuadro eléctrico domótico, cómo se organiza y por qué es clave para una instalación segura, mantenible y preparada para crecer."],
  ["/blog/automatizar-garaje-movil-siri-sensores", "Automatizar garaje con móvil, Siri y sensores", "Cómo automatizar el garaje con móvil, Siri, sensores de apertura, avisos y cámaras para mejorar comodidad y seguridad."],
  ["/blog/knx-shelly-loxone-home-assistant-diferencias", "KNX, Shelly, Loxone y Home Assistant | Diferencias", "Diferencias entre KNX, Shelly, Loxone y Home Assistant para elegir la mejor solución de domótica según vivienda, presupuesto y objetivos."],
];

const template = await readFile(join(dist, "index.html"), "utf8");

function htmlFor(path, title, description) {
  const canonical = `${site}${path === "/" ? "/" : path}`;
  return template
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace("</head>", `<link rel="canonical" href="${canonical}" />\n  </head>`);
}

for (const [path, title, description] of routes) {
  const file = path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, htmlFor(path, title, description));
}

await writeFile(join(dist, "404.html"), htmlFor("/", routes[0][1], routes[0][2]));
await writeFile(join(dist, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);
await writeFile(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map(([path]) => `  <url><loc>${site}${path === "/" ? "/" : path}</loc><changefreq>${path.startsWith("/blog/") ? "monthly" : "weekly"}</changefreq><priority>${path === "/" ? "1.0" : path === "/blog" ? "0.7" : "0.8"}</priority></url>`)
    .join("\n")}\n</urlset>\n`,
);

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
