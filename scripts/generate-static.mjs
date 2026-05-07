import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const dist = "dist";
const site = "https://costi79.github.io/techzen-smart-homes-web";

const routes = [
  ["/", "TechZen Smart Homes | Electricidad, KNX, Shelly y Domótica en Madrid", "Domótica profesional en Madrid. KNX Partner y Shelly Partner Verified para electricidad, Shelly, KNX, Loxone, Home Assistant, cuadros eléctricos, garaje, seguridad y consumo."],
  ["/servicios/domotica-madrid", "Domótica profesional Madrid | TechZen Smart Homes", "Domótica profesional en Madrid para viviendas, locales y espacios conectados. KNX, Shelly, Loxone, Home Assistant, luces, persianas, garaje, seguridad y consumo."],
  ["/servicios/knx-madrid", "KNX Madrid | KNX Partner TechZen Smart Homes", "Instalación KNX en Madrid por KNX Partner. Domótica cableada profesional para luces, persianas, climatización, escenas, seguridad y eficiencia energética."],
  ["/servicios/shelly-madrid", "Shelly Madrid | Shelly Partner Verified", "Instalación Shelly en Madrid para luces, persianas, garaje, consumo eléctrico y automatizaciones. TechZen Smart Homes es Shelly Partner Verified."],
  ["/servicios/loxone-madrid", "Loxone Madrid | Domótica residencial profesional", "Integración Loxone en Madrid para luces, persianas, clima, seguridad y escenas inteligentes en viviendas y espacios profesionales."],
  ["/servicios/home-assistant-madrid", "Home Assistant Madrid | Instalación y configuración", "Instalación de Home Assistant en Madrid. Paneles, automatizaciones, copias, integración con Shelly, KNX, Apple Home, Google Home, sensores y cámaras."],
  ["/servicios/cuadros-electricos-madrid", "Cuadros eléctricos Madrid | Cuadros domóticos", "Cuadros eléctricos y cuadros domóticos en Madrid para viviendas inteligentes. Orden, protección, medición, documentación y preparación para domótica."],
  ["/servicios/automatizacion-garaje-madrid", "Automatización garaje Madrid | Control con móvil y Siri", "Automatización de garaje en Madrid con control desde móvil, Siri, sensores, avisos y domótica local para viviendas y comunidades pequeñas."],
  ["/servicios/medicion-consumo-electrico-madrid", "Medición consumo eléctrico Madrid | Domótica y eficiencia", "Medición de consumo eléctrico en Madrid con Shelly, Home Assistant y cuadros preparados. Detecta picos, analiza circuitos y mejora eficiencia energética."],
  ["/blog", "Blog de domótica, KNX, Shelly y Home Assistant | TechZen", "Guías prácticas sobre domótica en Madrid, KNX, Shelly, Loxone, Home Assistant, eficiencia energética, cuadros domóticos y automatización de viviendas."],
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
