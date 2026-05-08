import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  BookOpen,
  Building2,
  Camera,
  CheckCircle2,
  CircuitBoard,
  Cpu,
  Gauge,
  Globe2,
  Home,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PlugZap,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const SITE_URL = "https://costi79.github.io/techzen-smart-homes-web";
const PHONE_NUMBER = "+34 675 734 122";
const WHATSAPP_NUMBER = "34675734122";
const EMAIL = "info@techzensmarthomes.com";
const CITY = "Madrid";
const WHATSAPP_MESSAGE = "Hola, quiero pedir presupuesto para una instalación de electricidad/domótica en Madrid.";

const base = import.meta.env.BASE_URL;
const asset = (path) => `${base}${path.replace(/^\//, "")}`;
const route = (path = "/") => `${base}${path.replace(/^\//, "")}`;

const navLinks = [
  ["Servicios", "/servicios/domotica-madrid"],
  ["Galería", "/#galeria"],
  ["KNX", "/servicios/knx-madrid"],
  ["Shelly", "/servicios/shelly-madrid"],
  ["Blog", "/blog"],
  ["Contacto", "/contacto"],
];

const languages = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ro", label: "Română", short: "RO" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "zh-CN", label: "中文", short: "中文" },
];

const authorityBadges = [
  "KNX Partner",
  "Shelly Partner Verified",
  "Electricidad profesional",
  "Instalaciones documentadas",
  "Soporte después de la instalación",
];

const technologies = [
  ["KNX Partner", "logos/knx-partner.svg", "Logo temporal de KNX Partner"],
  ["Shelly Partner Verified", "logos/shelly-partner-verified.svg", "Logo temporal de Shelly Partner Verified"],
  ["Loxone", "logos/loxone.svg", "Logo temporal de Loxone"],
  ["Home Assistant", "logos/home-assistant.svg", "Logo temporal de Home Assistant"],
  ["Apple Home", "logos/apple-home.svg", "Logo temporal de Apple Home"],
  ["Google Home", "logos/google-home.svg", "Logo temporal de Google Home"],
];

const serviceData = [
  {
    slug: "electricista-madrid",
    aliases: ["/electricista-madrid"],
    icon: PlugZap,
    title: "Instalaciones eléctricas",
    h1: "Instalaciones eléctricas preparadas para el futuro en Madrid",
    metaTitle: "Electricista Madrid y domótica | TechZen Smart Homes",
    metaDescription: "Electricista en Madrid especializado en instalaciones eléctricas, reformas, puntos de luz, enchufes, cuadros eléctricos y preparación para domótica.",
    short: "Instalaciones nuevas, reformas, ampliaciones, mecanismos, puntos de luz y preparación eléctrica para domótica.",
    detail: "Una casa inteligente empieza por una instalación eléctrica segura. Revisamos cargas, protecciones, canalizaciones, mecanismos, puntos de luz, enchufes y necesidades futuras para que la vivienda pueda crecer con Shelly, KNX, Loxone o Home Assistant sin improvisaciones.",
    benefits: ["Instalación segura y ordenada", "Preparación para domótica y ampliaciones", "Protecciones adecuadas para la vivienda", "Mecanismos y puntos de luz bien planificados"],
    examples: ["Añadir puntos de luz para escenas de iluminación", "Preparar mecanismos para relés inteligentes", "Revisar una reforma eléctrica antes de domotizar"],
    process: ["Revisión de instalación existente", "Diseño de circuitos y necesidades", "Ejecución limpia y pruebas de seguridad"],
    faqs: [
      ["¿Puedo domotizar una instalación antigua?", "Depende del estado del cableado, cuadro y mecanismos. Primero conviene revisar neutros, cargas, protecciones y espacio disponible."],
      ["¿Hacéis ampliaciones pequeñas?", "Sí. Podemos valorar puntos de luz, enchufes, mecanismos, líneas dedicadas y mejoras progresivas."],
    ],
    image: "images/domotic-wiring.svg",
  },
  {
    slug: "cuadros-electricos-madrid",
    aliases: ["/cuadros-electricos-madrid"],
    icon: CircuitBoard,
    title: "Cuadros eléctricos",
    h1: "Cuadros eléctricos y cuadros domóticos ordenados en Madrid",
    metaTitle: "Cuadros eléctricos Madrid | Cuadros domóticos TechZen",
    metaDescription: "Cuadros eléctricos en Madrid: protecciones, diferenciales, magnetotérmicos, sobretensiones, sectorización, etiquetado y preparación para domótica.",
    short: "Orden, protecciones, diferenciales, magnetotérmicos, sobretensiones, sectorización y espacio para domótica.",
    detail: "Un cuadro eléctrico bien diseñado mejora seguridad, mantenimiento y eficiencia. Organizamos protecciones, diferenciales, magnetotérmicos, sobretensiones, etiquetado, medición y espacio para módulos domóticos, evitando cuadros saturados o difíciles de mantener.",
    benefits: ["Mayor seguridad eléctrica", "Etiquetado claro para mantenimiento", "Preparación para medición y automatización", "Sectorización por zonas o cargas críticas"],
    examples: ["Cuadro preparado para Shelly Pro o Shelly EM", "Separación de circuitos de climatización y cocina", "Añadir protección contra sobretensiones"],
    process: ["Diagnóstico del cuadro actual", "Propuesta de orden y protecciones", "Montaje, etiquetado y documentación"],
    faqs: [
      ["¿Cuándo conviene actualizar un cuadro antiguo?", "Cuando está saturado, mal etiquetado, sin protecciones modernas o no permite ampliar la vivienda con seguridad."],
      ["¿Un cuadro domótico es obligatorio?", "No siempre, pero en proyectos completos facilita centralizar actuadores, medición y mantenimiento."],
    ],
    image: "images/electrical-panel.svg",
  },
  {
    slug: "domotica-madrid",
    aliases: ["/domotica-madrid"],
    icon: Home,
    title: "Domótica para viviendas",
    h1: "Domótica profesional para viviendas inteligentes en Madrid",
    metaTitle: "Domótica Madrid | Viviendas inteligentes TechZen",
    metaDescription: "Domótica profesional en Madrid para luces, persianas, climatización, enchufes, sensores, escenas, horarios, seguridad y control desde móvil.",
    short: "Control de luces, persianas, clima, enchufes, sensores, escenas, horarios y automatizaciones útiles.",
    detail: "Diseñamos automatizaciones que resuelven problemas reales: comodidad al llegar, seguridad al salir, eficiencia cuando hace calor y control sencillo desde móvil, pulsadores o voz. La domótica debe ser fácil de usar, estable y comprensible para toda la familia.",
    benefits: ["Control desde móvil, voz y pulsadores", "Escenas para llegar, salir, noche o vacaciones", "Automatizaciones por presencia, horario o consumo", "Solución escalable por fases"],
    examples: ["Llegas a casa y se enciende la luz del recibidor automáticamente", "Una pulsación apaga luces, baja persianas y desconecta enchufes seleccionados", "Las persianas bajan en horas de calor para mejorar eficiencia"],
    process: ["Definir rutinas y prioridades", "Elegir tecnología adecuada", "Configurar escenas y explicar el uso"],
    faqs: [
      ["¿La domótica obliga a cambiar toda la casa?", "No. Se puede empezar por luces, persianas o consumo y ampliar después."],
      ["¿Se puede controlar desde fuera de casa?", "Sí, con una configuración segura y manteniendo funciones locales cuando sea posible."],
    ],
    image: "images/motorized-blinds.svg",
  },
  {
    slug: "shelly-madrid",
    aliases: ["/instalacion-shelly-madrid"],
    icon: Zap,
    title: "Shelly",
    h1: "Instalación Shelly en Madrid por Shelly Partner Verified",
    metaTitle: "Instalación Shelly Madrid | Shelly Partner Verified",
    metaDescription: "Instalación Shelly en Madrid: Shelly Plus, Shelly Pro, Shelly EM, relés, medición de consumo, control local, escenas y automatización sin grandes obras.",
    short: "Relés Shelly, Shelly Plus, Shelly Pro, Shelly EM, consumo, escenas y automatización sin grandes obras.",
    detail: "Shelly permite modernizar viviendas existentes manteniendo mecanismos habituales. Integramos relés, medidores, sensores y módulos Pro revisando cargas, neutros, espacio, temperatura y seguridad eléctrica. También podemos unir Shelly con Home Assistant, Apple Home o Google Home.",
    benefits: ["Automatización con obra mínima", "Control local y remoto", "Medición de consumo con Shelly EM o Plug", "Integración con escenas y asistentes"],
    examples: ["Automatizar luces sin cambiar toda la instalación", "Recibir aviso si un electrodoméstico consume más de lo esperado", "Controlar persianas por horario, sol o temperatura"],
    process: ["Revisión de mecanismos y cuadro", "Selección de módulo Shelly adecuado", "Instalación, configuración y pruebas"],
    faqs: [
      ["¿Shelly funciona sin Internet?", "Muchos usos pueden funcionar en red local, especialmente si se integra con Home Assistant."],
      ["¿Es seguro meter un relé detrás de un mecanismo?", "Sí, si hay espacio, cableado correcto, carga compatible y se instala con criterio eléctrico."],
    ],
    image: "images/shelly-luces-instalacion.jpg",
  },
  {
    slug: "knx-madrid",
    aliases: ["/knx-madrid"],
    icon: CircuitBoard,
    title: "KNX",
    h1: "Instalador KNX Partner en Madrid para viviendas premium",
    metaTitle: "Instalador KNX Madrid | KNX Partner TechZen",
    metaDescription: "Instalador KNX Partner en Madrid para iluminación, persianas, climatización, escenas, sensores, pantallas y control centralizado en viviendas premium.",
    short: "Sistema profesional, robusto y escalable para viviendas y edificios con control centralizado.",
    detail: "KNX es un estándar profesional para proyectos que necesitan fiabilidad, vida útil y ampliación futura. Como KNX Partner, TechZen Smart Homes puede diseñar soluciones para iluminación, persianas, climatización, escenas, sensores y visualizaciones con una arquitectura sólida.",
    benefits: ["Estándar abierto y profesional", "Ideal para obra nueva o reforma integral", "Muy robusto para viviendas premium", "Integrable con Home Assistant y visualizaciones"],
    examples: ["Pulsadores KNX que controlan luz, persianas y escenas", "Climatización por zonas con sensores", "Escena salida que apaga, baja persianas y activa seguridad"],
    process: ["Diseño de arquitectura KNX", "Planificación de cuadros y cableado", "Programación, pruebas y documentación"],
    faqs: [
      ["¿KNX es mejor que Shelly?", "No siempre. KNX es ideal en proyectos cableados y reformas importantes; Shelly encaja muy bien en viviendas existentes."],
      ["¿Puedo tener KNX y Home Assistant?", "Sí. Home Assistant puede aportar paneles e integraciones sobre una base KNX robusta."],
    ],
    image: "images/knx-installation.svg",
  },
  {
    slug: "loxone-madrid",
    aliases: ["/loxone-madrid"],
    icon: Cpu,
    title: "Loxone",
    h1: "Loxone en Madrid para automatización residencial avanzada",
    metaTitle: "Loxone Madrid | Automatización residencial avanzada",
    metaDescription: "Integración Loxone en Madrid con Miniserver, escenas, iluminación, climatización, seguridad, eficiencia energética y control centralizado.",
    short: "Automatización avanzada con Miniserver, escenas, eficiencia, iluminación y control centralizado.",
    detail: "Loxone encaja en viviendas que buscan automatización integrada y lógica centralizada. Permite coordinar iluminación, persianas, clima, seguridad, energía y escenas para que la casa reaccione de forma inteligente sin depender de acciones manuales constantes.",
    benefits: ["Control centralizado", "Automatizaciones avanzadas", "Buen enfoque para viviendas premium", "Escenas y eficiencia energética"],
    examples: ["Escena cine con luces reguladas y persianas", "Control de clima por presencia y horario", "Automatizaciones de ahorro energético con cargas no prioritarias"],
    process: ["Definir objetivos de automatización", "Diseño de entradas, salidas y escenas", "Configuración y ajuste fino en vivienda"],
    faqs: [
      ["¿Loxone sustituye a otros sistemas?", "Puede funcionar como sistema principal o integrarse con otras soluciones según el proyecto."],
      ["¿Es una solución para vivienda premium?", "Sí, especialmente cuando se busca control centralizado y automatización muy integrada."],
    ],
    image: "images/loxone-installation.svg",
  },
  {
    slug: "home-assistant-madrid",
    aliases: ["/home-assistant-madrid"],
    icon: Cpu,
    title: "Home Assistant",
    h1: "Home Assistant en Madrid para integrar toda tu casa inteligente",
    metaTitle: "Home Assistant Madrid | Instalación y dashboards",
    metaDescription: "Instalación Home Assistant en Madrid: dashboards, sensores, cámaras, Shelly, KNX, Apple Home, Google Home, Alexa y automatizaciones locales.",
    short: "Integración de dispositivos, dashboards, sensores, cámaras, Apple Home, Google Home y automatizaciones locales.",
    detail: "Home Assistant es ideal para unir dispositivos de distintas marcas en una sola interfaz. Configuramos paneles, copias, automatizaciones, sensores, cámaras, Shelly, KNX, Apple Home, Google Home y sistemas mixtos con prioridad en control local y mantenimiento sencillo.",
    benefits: ["Dashboard claro para móvil, tablet o pared", "Control local y privacidad", "Integración de muchas marcas", "Automatizaciones avanzadas con lógica flexible"],
    examples: ["Pantalla de pared con luces, clima y seguridad", "Aviso si una ventana queda abierta con el aire encendido", "Panel de consumo eléctrico por circuitos"],
    process: ["Auditoría de dispositivos", "Instalación y estructura de Home Assistant", "Dashboards, automatizaciones y explicación al cliente"],
    faqs: [
      ["¿Home Assistant es complicado?", "Puede serlo si crece sin orden. Con una estructura clara se vuelve cómodo y fácil de mantener."],
      ["¿Se integra con Apple Home o Google Home?", "Sí. Se puede combinar con Siri, Apple Home, Google Home y Alexa según necesidades."],
    ],
    image: "images/home-assistant-dashboard.svg",
  },
  {
    slug: "iluminacion-inteligente-madrid",
    aliases: [],
    icon: Lightbulb,
    title: "Iluminación inteligente",
    h1: "Iluminación inteligente en Madrid para confort, diseño y ahorro",
    metaTitle: "Iluminación inteligente Madrid | LED, escenas y regulación",
    metaDescription: "Iluminación inteligente en Madrid: regulación, tiras LED, RGBW, sensores de presencia, escenas, horarios y luz decorativa o funcional.",
    short: "Regulación, tiras LED, RGBW, escenas, sensores de presencia, horarios e iluminación decorativa.",
    detail: "La iluminación inteligente mejora la experiencia diaria: luz cálida por la noche, escenas para trabajar, presencia en pasillos, iluminación decorativa y apagados automáticos. Podemos integrar tiras LED, RGBW, dimmers, pulsadores y control desde móvil.",
    benefits: ["Ambientes adaptados a cada momento", "Ahorro con sensores y horarios", "Control desde pulsador y móvil", "Iluminación decorativa y funcional"],
    examples: ["Luz de pasillo suave por la noche", "Escena cena con regulación cálida", "Tiras LED RGBW para salón o cocina"],
    process: ["Diseño de escenas", "Selección de drivers, dimmers o relés", "Ajuste de niveles y uso diario"],
    faqs: [
      ["¿Puedo regular luces existentes?", "Depende del tipo de luminaria y driver. Revisamos compatibilidad antes de instalar."],
      ["¿Se pueden usar sensores de presencia?", "Sí, son muy útiles en pasillos, baños, garajes y zonas de paso."],
    ],
    image: "images/control-luces-app.jpg",
  },
  {
    slug: "persianas-estores-motorizados-madrid",
    aliases: [],
    icon: Home,
    title: "Persianas y estores motorizados",
    h1: "Persianas y estores motorizados con control inteligente en Madrid",
    metaTitle: "Persianas motorizadas Madrid | Control móvil y escenas",
    metaDescription: "Persianas y estores motorizados en Madrid con control por pulsador, móvil, voz, horarios, escenas, sol, temperatura y seguridad.",
    short: "Control por pulsador, móvil, voz, horarios, escenas, sol, temperatura y seguridad.",
    detail: "Automatizar persianas aporta confort, protección solar y seguridad. Se pueden controlar por pulsador, móvil, Siri, Google Home o escenas, además de actuar por horario, temperatura o modo vacaciones.",
    benefits: ["Confort diario", "Mejor eficiencia en horas de calor", "Simulación de presencia", "Control por voz, móvil y pulsadores"],
    examples: ["Bajar persianas en las horas de más sol", "Subida gradual por la mañana", "Modo vacaciones con movimientos programados"],
    process: ["Revisión de motores y pulsadores", "Integración con Shelly, KNX o Loxone", "Configuración de escenas seguras"],
    faqs: [
      ["¿Sirven mis persianas actuales?", "Si ya están motorizadas suele ser más sencillo. Si no, hay que valorar motor, cableado y acceso."],
      ["¿Puedo mantener el pulsador?", "Sí. Normalmente se mantiene el control manual y se añade control inteligente."],
    ],
    image: "images/basic-home-automation.jpg",
  },
  {
    slug: "climatizacion-inteligente-madrid",
    aliases: [],
    icon: ThermometerSun,
    title: "Climatización inteligente",
    h1: "Climatización inteligente en Madrid para confort y eficiencia",
    metaTitle: "Climatización inteligente Madrid | Domótica y ahorro",
    metaDescription: "Control inteligente de aire acondicionado, calefacción, termostatos, horarios, sensores de temperatura, eficiencia energética y confort.",
    short: "Aire acondicionado, calefacción, termostatos, horarios, sensores de temperatura y ahorro energético.",
    detail: "La climatización inteligente evita consumos innecesarios y mejora el confort. Podemos trabajar con termostatos, sensores de temperatura, horarios, presencia, ventanas abiertas y escenas para ajustar la vivienda a cada momento.",
    benefits: ["Confort por horarios y zonas", "Ahorro con sensores y automatizaciones", "Avisos por ventanas abiertas", "Control desde móvil y paneles"],
    examples: ["Apagar clima si una ventana queda abierta", "Precalentar una zona antes de llegar", "Reducir consumo cuando no hay presencia"],
    process: ["Revisión del sistema de clima", "Diseño de sensores y lógica", "Pruebas de confort y consumo"],
    faqs: [
      ["¿Se puede controlar aire acondicionado?", "En muchos casos sí, con pasarelas, IR, termostatos o integraciones compatibles."],
      ["¿Ayuda a ahorrar?", "Sí, sobre todo cuando se combina con presencia, horarios, ventanas y medición de consumo."],
    ],
    image: "images/smart-climate-control.svg",
  },
  {
    slug: "seguridad-sensores-madrid",
    aliases: [],
    icon: ShieldCheck,
    title: "Seguridad y sensores",
    h1: "Seguridad inteligente y sensores para viviendas en Madrid",
    metaTitle: "Seguridad inteligente Madrid | Sensores y cámaras",
    metaDescription: "Sensores de movimiento, puertas, ventanas, fugas de agua, humo, cámaras, notificaciones y automatizaciones de seguridad para viviendas.",
    short: "Movimiento, puertas, ventanas, fugas de agua, humo, cámaras, notificaciones y automatizaciones.",
    detail: "La seguridad inteligente no debe ser invasiva: debe avisar cuando importa. Integramos sensores de movimiento, apertura, fuga de agua, humo, cámaras y notificaciones para reaccionar ante eventos y activar escenas de protección.",
    benefits: ["Avisos al móvil", "Sensores para fugas, humo y accesos", "Integración con luces y persianas", "Escenas de presencia simulada"],
    examples: ["Aviso si una puerta queda abierta", "Luz automática ante movimiento nocturno", "Corte o alerta si hay fuga de agua"],
    process: ["Mapa de riesgos", "Selección de sensores y cámaras", "Pruebas de avisos y automatizaciones"],
    faqs: [
      ["¿Instaláis cámaras?", "Podemos valorar cámaras e integración con paneles o avisos, siempre respetando privacidad y normativa."],
      ["¿Los sensores pueden activar luces?", "Sí, por presencia, horario, modo noche o seguridad."],
    ],
    image: "images/security-sensors.svg",
  },
  {
    slug: "medicion-consumo-electrico-madrid",
    aliases: [],
    icon: BatteryCharging,
    title: "Ahorro energético",
    h1: "Medición de consumo eléctrico y ahorro energético en Madrid",
    metaTitle: "Medición consumo eléctrico Madrid | Shelly EM y ahorro",
    metaDescription: "Medición de consumo eléctrico en Madrid con Shelly EM, control de cargas, apagados automáticos, avisos de consumo y optimización energética.",
    short: "Shelly EM, control de cargas, apagados automáticos, avisos de consumo y optimización de potencia.",
    detail: "Medir permite decidir. Instalamos medición de consumo por vivienda o circuitos, avisos de picos, control de cargas no prioritarias y automatizaciones para reducir gasto sin sacrificar confort.",
    benefits: ["Históricos de consumo", "Avisos por picos o cargas anómalas", "Apagados automáticos", "Datos para revisar potencia contratada"],
    examples: ["Aviso si el consumo supera un límite", "Desconectar cargas no prioritarias", "Detectar electrodomésticos con consumo anómalo"],
    process: ["Definir circuitos a medir", "Instalar medidores compatibles", "Crear paneles y avisos útiles"],
    faqs: [
      ["¿Puedo medir circuitos concretos?", "Sí. Se puede medir climatización, termo, cocina, garaje, iluminación u otros circuitos."],
      ["¿Necesito Home Assistant?", "No siempre, pero ayuda mucho a visualizar históricos, crear avisos y combinar datos con automatizaciones."],
    ],
    image: "images/energy-monitoring.svg",
  },
  {
    slug: "automatizacion-garaje-madrid",
    aliases: [],
    icon: Wrench,
    title: "Automatización de garaje",
    h1: "Automatización de garaje en Madrid con móvil, Siri y sensores",
    metaTitle: "Automatización garaje Madrid | Móvil, Siri y sensores",
    metaDescription: "Automatización de garaje en Madrid con control desde móvil, Siri, sensores de apertura, avisos, cámaras y escenas seguras.",
    short: "Apertura desde móvil, Siri, sensores de estado, avisos y escenas seguras.",
    detail: "El garaje puede integrarse con la casa inteligente para abrir desde el móvil, saber si quedó abierto y recibir avisos. Configuramos control seguro, sensores de estado y automatizaciones con límites claros.",
    benefits: ["Control desde móvil y asistentes", "Aviso por puerta abierta", "Integración con cámaras o luces", "Escenas seguras de llegada y salida"],
    examples: ["Abrir desde el móvil al llegar", "Aviso si la puerta queda abierta", "Encender luz de garaje al abrir"],
    process: ["Revisión del motor y entradas", "Instalación de control y sensor", "Pruebas de seguridad y avisos"],
    faqs: [
      ["¿Se puede abrir con Siri?", "Sí, con integración adecuada y cuidando la seguridad."],
      ["¿Puedo ver el estado abierto/cerrado?", "Sí, añadiendo sensor de posición o apertura."],
    ],
    image: "images/garage-automation.svg",
  },
  {
    slug: "mantenimiento-domotica-madrid",
    aliases: [],
    icon: Wrench,
    title: "Mantenimiento y mejoras",
    h1: "Mantenimiento, ampliaciones y mejoras de domótica en Madrid",
    metaTitle: "Mantenimiento domótica Madrid | Soporte y mejoras",
    metaDescription: "Mantenimiento de domótica y electricidad en Madrid: revisión de instalaciones, averías, mejoras progresivas, ampliaciones y soporte.",
    short: "Revisión de instalaciones, solución de averías, ampliaciones, mejoras progresivas y soporte.",
    detail: "Una instalación inteligente necesita orden para seguir siendo útil. Revisamos sistemas existentes, corregimos automatizaciones, documentamos dispositivos, mejoramos cuadros y planificamos ampliaciones por fases.",
    benefits: ["Menos averías y confusión", "Mejor documentación", "Ampliaciones controladas", "Soporte para clientes y nuevas necesidades"],
    examples: ["Ordenar Home Assistant que creció sin estructura", "Añadir nuevas zonas a Shelly o KNX", "Actualizar cuadros o sensores"],
    process: ["Auditoría del sistema", "Lista de mejoras priorizadas", "Corrección, pruebas y documentación"],
    faqs: [
      ["¿Podéis revisar una instalación hecha por otro?", "Sí, siempre que se pueda acceder a la instalación y documentación mínima."],
      ["¿Se puede mejorar por fases?", "Sí. Es la forma más sensata cuando hay presupuesto o prioridades cambiantes."],
    ],
    image: "images/smart-home-panel.svg",
  },
];

const legacyServiceSlugs = [
  "domotica-madrid",
  "knx-madrid",
  "shelly-madrid",
  "loxone-madrid",
  "home-assistant-madrid",
  "cuadros-electricos-madrid",
  "automatizacion-garaje-madrid",
  "medicion-consumo-electrico-madrid",
];

// Politica de imagenes: no usar imagenes descargadas de webs de electricistas, instaladores,
// empresas de domotica, KNX/Shelly/Loxone partners o competidores. Si hay duda de licencia, no se usa.
// Para sustituir por trabajos reales, cambiar los archivos en public/images/ y mantener nombres o actualizar src.
const galleryItems = [
  {
    category: "Instalaciones eléctricas",
    title: "Canalización y cableado preparados para domótica",
    text: "Ejemplo visual de instalación limpia, pensada para futuras ampliaciones y mantenimiento.",
    alt: "Instalación eléctrica ordenada para domótica en Madrid",
    src: "images/domotic-wiring.svg",
    link: "/servicios/electricista-madrid",
  },
  {
    category: "Cuadros eléctricos",
    title: "Cuadro eléctrico ordenado y preparado para domótica",
    text: "Protecciones, etiquetado y espacio para medición o módulos inteligentes.",
    alt: "Cuadro eléctrico ordenado y preparado para domótica en Madrid",
    src: "images/electrical-panel.svg",
    link: "/servicios/cuadros-electricos-madrid",
  },
  {
    category: "Domótica Shelly",
    title: "Instalación Shelly para automatizar luces",
    text: "Automatización sin grandes obras manteniendo control desde pulsador y móvil.",
    alt: "Instalación Shelly para automatizar luces sin cambiar toda la instalación",
    src: "images/shelly-luces-instalacion.jpg",
    link: "/servicios/shelly-madrid",
  },
  {
    category: "Domótica Shelly",
    title: "Medición y control con Shelly Plug",
    text: "Controla y monitoriza electrodomésticos para detectar consumos y automatizar cargas.",
    alt: "Control y medición de electrodomésticos con Shelly Plug",
    src: "images/shelly-plug-consumo.jpg",
    link: "/servicios/medicion-consumo-electrico-madrid",
  },
  {
    category: "KNX",
    title: "Sistema KNX para vivienda inteligente premium",
    text: "Base profesional para luces, persianas, climatización, sensores y escenas.",
    alt: "Sistema KNX para vivienda inteligente premium en Madrid",
    src: "images/knx-installation.svg",
    link: "/servicios/knx-madrid",
  },
  {
    category: "Loxone",
    title: "Automatización avanzada con control centralizado",
    text: "Escenas, eficiencia energética, iluminación y lógica residencial integrada.",
    alt: "Sistema Loxone para automatización residencial avanzada",
    src: "images/loxone-installation.svg",
    link: "/servicios/loxone-madrid",
  },
  {
    category: "Home Assistant",
    title: "Dashboard Home Assistant para controlar toda la casa",
    text: "Panel para luces, clima, sensores, seguridad, consumo y automatizaciones locales.",
    alt: "Dashboard Home Assistant para controlar vivienda inteligente",
    src: "images/home-assistant-dashboard.svg",
    link: "/servicios/home-assistant-madrid",
  },
  {
    category: "Iluminación inteligente",
    title: "Control de iluminación desde pulsador y móvil",
    text: "Escenas, regulación, horarios y control desde app sin perder el uso normal.",
    alt: "Control de iluminación inteligente desde el móvil en Madrid",
    src: "images/smart-lighting-scenes.svg",
    link: "/servicios/iluminacion-inteligente-madrid",
  },
  {
    category: "Persianas y estores motorizados",
    title: "Escenas de luz, persianas y confort",
    text: "Preparado para horarios, modo salida, protección solar y simulación de presencia.",
    alt: "Control de persianas y escenas en una casa inteligente",
    src: "images/motorized-blinds.svg",
    link: "/servicios/persianas-estores-motorizados-madrid",
  },
  {
    category: "Climatización inteligente",
    title: "Confort conectado con sensores y horarios",
    text: "Control de clima para reducir consumo y mejorar confort sin complicar el uso diario.",
    alt: "Climatización inteligente con sensores y horarios",
    src: "images/smart-climate-control.svg",
    link: "/servicios/climatizacion-inteligente-madrid",
  },
  {
    category: "Seguridad y sensores",
    title: "Sensores, avisos y escenas de seguridad",
    text: "Movimiento, puertas, fugas, humo y notificaciones integradas con la vivienda.",
    alt: "Seguridad inteligente con sensores para vivienda en Madrid",
    src: "images/security-sensors.svg",
    link: "/servicios/seguridad-sensores-madrid",
  },
  {
    category: "Ahorro energético",
    title: "Medición de consumo eléctrico para mejorar el ahorro",
    text: "Datos reales para detectar picos, controlar cargas y ajustar hábitos.",
    alt: "Medición de consumo eléctrico para ahorro energético con domótica",
    src: "images/energy-monitoring.svg",
    link: "/servicios/medicion-consumo-electrico-madrid",
  },
  {
    category: "Proyectos antes/después",
    title: "Antes de la mejora",
    text: "Foto real pendiente de subir. Espacio reservado para comparar el estado inicial.",
    alt: "Antes de la mejora eléctrica o domótica TechZen",
    src: null,
    link: "/contacto",
  },
  {
    category: "Proyectos antes/después",
    title: "Después de la instalación TechZen",
    text: "Foto real pendiente de subir. Espacio reservado para enseñar el resultado profesional.",
    alt: "Después de la instalación TechZen Smart Homes",
    src: null,
    link: "/contacto",
  },
];

const galleryCategories = ["Todas", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

const useCases = [
  "Llegas a casa y se enciende la luz del recibidor automáticamente.",
  "Al salir, una sola pulsación apaga luces, baja persianas y desconecta enchufes seleccionados.",
  "Si el consumo supera un límite, el sistema puede avisar o desconectar cargas no prioritarias.",
  "Las persianas bajan automáticamente en horas de calor para mejorar la eficiencia.",
  "El garaje se abre desde el móvil, por Siri o mediante automatizaciones seguras.",
  "Si una ventana queda abierta con el aire encendido, recibes aviso y puedes actuar.",
];

const zones = [
  "Madrid capital",
  "Pozuelo",
  "Majadahonda",
  "Las Rozas",
  "Alcobendas",
  "San Sebastián de los Reyes",
  "Getafe",
  "Leganés",
  "Boadilla del Monte",
  "Rivas-Vaciamadrid",
];

const posts = [
  {
    slug: "que-es-knx-vivienda",
    title: "Qué es KNX y cuándo merece la pena instalarlo en una vivienda",
    metaTitle: "Qué es KNX y cuándo instalarlo en vivienda | TechZen",
    metaDescription: "Guía práctica sobre KNX: qué es, cuándo conviene instalarlo, ventajas frente a otros sistemas y cómo encaja en proyectos de domótica en Madrid.",
    intro: "KNX es un estándar internacional de domótica cableada pensado para instalaciones robustas, escalables y mantenibles. En viviendas de alto uso, reformas integrales u obra nueva, puede marcar una diferencia importante.",
    sections: ["Qué aporta KNX frente a soluciones improvisadas", "Cuándo elegir KNX en una vivienda", "Cómo combinar KNX con Home Assistant"],
  },
  {
    slug: "shelly-madrid-luces-persianas-garaje",
    title: "Shelly en Madrid: cómo automatizar luces, persianas y garaje sin grandes obras",
    metaTitle: "Shelly Madrid para luces, persianas y garaje",
    metaDescription: "Cómo usar Shelly para automatizar luces, persianas y garaje en Madrid sin grandes obras, manteniendo seguridad eléctrica y control local.",
    intro: "Shelly permite modernizar muchas viviendas aprovechando mecanismos existentes. La clave está en elegir el módulo correcto, revisar cargas y documentar cada circuito.",
    sections: ["Luces y persianas con Shelly", "Garaje y avisos de seguridad", "Por qué conviene una instalación profesional"],
  },
  {
    slug: "home-assistant-viviendas-inteligentes",
    title: "Home Assistant para viviendas inteligentes: ventajas y posibilidades",
    metaTitle: "Home Assistant viviendas inteligentes | Ventajas",
    metaDescription: "Ventajas de Home Assistant para viviendas inteligentes: control local, paneles, automatizaciones, integración con Shelly, KNX, Apple Home y Google Home.",
    intro: "Home Assistant puede convertirse en el cerebro visual de la vivienda: centraliza dispositivos, automatizaciones y paneles sin depender de una única marca.",
    sections: ["Control local y privacidad", "Paneles útiles para el día a día", "Integraciones habituales en Madrid"],
  },
  {
    slug: "ahorrar-energia-domotica-medicion-consumo",
    title: "Cómo ahorrar energía con domótica y medición de consumo",
    metaTitle: "Ahorrar energía con domótica y medición de consumo",
    metaDescription: "Ideas prácticas para ahorrar energía con domótica, medición de consumo eléctrico, automatizaciones y control de climatización en viviendas.",
    intro: "La domótica no ahorra por sí sola: ayuda a medir, decidir y automatizar acciones que reducen gasto sin perder confort.",
    sections: ["Medir antes de automatizar", "Alertas y hábitos de consumo", "Climatización y escenas eficientes"],
  },
  {
    slug: "domotica-local-vs-nube",
    title: "Domótica local vs domótica en la nube: qué opción es más fiable",
    metaTitle: "Domótica local vs nube | Qué opción es más fiable",
    metaDescription: "Comparativa entre domótica local y domótica en la nube para viviendas: fiabilidad, privacidad, mantenimiento y uso con Home Assistant.",
    intro: "La nube aporta comodidad, pero el control local mejora fiabilidad y continuidad cuando Internet falla. Un buen proyecto puede combinar ambos enfoques.",
    sections: ["Ventajas del control local", "Cuándo usar servicios en la nube", "Diseñar una instalación equilibrada"],
  },
  {
    slug: "cuadro-electrico-domotico",
    title: "Cuadro eléctrico domótico: qué es y por qué es importante",
    metaTitle: "Cuadro eléctrico domótico | Qué es y por qué importa",
    metaDescription: "Qué es un cuadro eléctrico domótico, cómo se organiza y por qué es clave para una instalación segura, mantenible y preparada para crecer.",
    intro: "El cuadro domótico es la base silenciosa de una vivienda inteligente. Si está ordenado, protegido y documentado, todo lo demás funciona mejor.",
    sections: ["Protecciones y orden", "Actuadores, medición y cableado", "Documentación para mantenimiento"],
  },
  {
    slug: "automatizar-garaje-movil-siri-sensores",
    title: "Automatizar el garaje con móvil, Siri y sensores",
    metaTitle: "Automatizar garaje con móvil, Siri y sensores",
    metaDescription: "Cómo automatizar el garaje con móvil, Siri, sensores de apertura, avisos y cámaras para mejorar comodidad y seguridad.",
    intro: "Automatizar el garaje no consiste solo en abrir desde el móvil. También conviene saber si quedó abierto, quién accede y cómo se integra con la seguridad.",
    sections: ["Control desde móvil y Siri", "Sensores de estado y avisos", "Integración con cámaras y escenas"],
  },
  {
    slug: "knx-shelly-loxone-home-assistant-diferencias",
    title: "KNX, Shelly, Loxone y Home Assistant: diferencias y cuándo elegir cada uno",
    metaTitle: "KNX, Shelly, Loxone y Home Assistant | Diferencias",
    metaDescription: "Diferencias entre KNX, Shelly, Loxone y Home Assistant para elegir la mejor solución de domótica según vivienda, presupuesto y objetivos.",
    intro: "No existe una única tecnología perfecta. La mejor elección depende de si buscas una reforma integral, mejoras sin obra, visualización flexible o un sistema centralizado.",
    sections: ["Cuándo elegir KNX", "Cuándo elegir Shelly o Loxone", "Dónde encaja Home Assistant"],
  },
];

const seoMap = new Map([
  ["/", {
    title: "TechZen Smart Homes | Electricidad, KNX, Shelly y Domótica en Madrid",
    description: "Electricidad y domótica profesional en Madrid. KNX Partner y Shelly Partner Verified para Shelly, KNX, Loxone, Home Assistant, cuadros eléctricos, seguridad y ahorro energético.",
  }],
  ["/blog", {
    title: "Blog de domótica, KNX, Shelly y Home Assistant | TechZen",
    description: "Guías prácticas sobre domótica Madrid, KNX, Shelly, Loxone, Home Assistant, ahorro energético, cuadros eléctricos y automatización de viviendas.",
  }],
  ["/contacto", {
    title: "Contacto TechZen Smart Homes | Presupuesto domótica Madrid",
    description: "Contacta con TechZen Smart Homes para electricidad, domótica, KNX, Shelly, Loxone y Home Assistant en Madrid y alrededores.",
  }],
  ...serviceData.flatMap((item) => [
    [`/servicios/${item.slug}`, { title: item.metaTitle, description: item.metaDescription }],
    ...item.aliases.map((alias) => [alias, { title: item.metaTitle, description: item.metaDescription }]),
  ]),
  ...posts.map((item) => [`/blog/${item.slug}`, { title: item.metaTitle, description: item.metaDescription }]),
]);

function App() {
  const currentPath = useCurrentPath();
  const service = findService(currentPath);
  const post = posts.find((item) => currentPath === `/blog/${item.slug}`);
  const seo = seoMap.get(currentPath) || seoMap.get("/");

  useSeo(currentPath, seo, service, post);

  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        {currentPath === "/" && <HomePage />}
        {currentPath === "/blog" && <BlogIndex />}
        {currentPath === "/contacto" && <ContactPage />}
        {service && <ServicePage service={service} />}
        {post && <BlogPost post={post} />}
        {!service && !post && currentPath !== "/" && currentPath !== "/blog" && currentPath !== "/contacto" && <NotFound />}
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

function useCurrentPath() {
  return useMemo(() => {
    const pathname = window.location.pathname;
    const cleanBase = base.replace(/\/$/, "");
    const stripped = pathname.startsWith(cleanBase) ? pathname.slice(cleanBase.length) : pathname;
    return stripped === "" ? "/" : stripped.replace(/\/$/, "") || "/";
  }, []);
}

function findService(path) {
  return serviceData.find((service) => path === `/servicios/${service.slug}` || service.aliases.includes(path));
}

function useSeo(path, seo, service, post) {
  useEffect(() => {
    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("keywords", "domótica Madrid, electricista domótica Madrid, instalación Shelly Madrid, instalador KNX Madrid, smart home Madrid, automatización vivienda Madrid, electricista Madrid, cuadros eléctricos Madrid, Home Assistant Madrid, Loxone Madrid, iluminación inteligente Madrid");
    setOg("og:title", seo.title);
    setOg("og:description", seo.description);
    setOg("og:url", `${SITE_URL}${path === "/" ? "/" : path}`);
    setCanonical(`${SITE_URL}${path === "/" ? "/" : path}`);
    setJsonLd(buildSchema(path, service, post));
  }, [path, seo, service, post]);
}

function HomePage() {
  return (
    <>
      <Hero />
      <BenefitStrip />
      <Authority />
      <ServiceOverview />
      <TechnologySection />
      <UseCases />
      <VideoShowcase />
      <ProjectGallery />
      <WorkMethod />
      <TrustSection />
      <EnergySecuritySection />
      <ZonesSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
      <div className="container relative grid gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
        <div className="max-w-3xl">
          <p className="eyebrow"><Sparkles size={16} /> Electricidad, KNX, Shelly, Loxone y smart homes en Madrid</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Convierte tu vivienda en una casa inteligente, cómoda, segura y eficiente.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            TechZen Smart Homes diseña e instala soluciones de electricidad y domótica profesional en Madrid: cuadros eléctricos, Shelly, KNX, Loxone, Home Assistant, iluminación inteligente, persianas, climatización, sensores y ahorro energético.
          </p>
          <CtaGroup className="mt-8" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["KNX Partner", "Shelly Partner Verified", "Madrid y alrededores"].map((item) => (
              <div className="mini-proof" key={item}><CheckCircle2 size={18} /><span>{item}</span></div>
            ))}
          </div>
        </div>
        <div className="device-panel hero-video-panel" aria-label="Animación de marca TechZen Smart Homes y panel de control domótico">
          <div className="brand-video-frame">
            <video
              src={asset("videos/techzen-demo-domotica.mp4")}
              poster={asset("images/techzen-circuit-brand.jpg")}
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
              aria-label="Animación del nombre de TechZen Smart Homes"
            />
          </div>
          <div className="mt-6 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-slate-400">TechZen Smart Homes</p>
              <h2 className="text-2xl font-semibold">Control total de tu vivienda</h2>
            </div>
            <div className="rounded-full border border-cyan/40 bg-cyan/10 p-3 text-cyan"><Gauge size={24} /></div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Metric icon={Lightbulb} label="Luces" value="Escenas y regulación" />
            <Metric icon={Home} label="Persianas" value="Sol, horario y voz" />
            <Metric icon={ShieldCheck} label="Seguridad" value="Sensores y avisos" />
            <Metric icon={BatteryCharging} label="Consumo" value="Medición y ahorro" />
          </div>
          <div className="mt-6 rounded-2xl border border-cyan/20 bg-cyan/5 p-5">
            <div className="flex items-center gap-3 text-cyan"><Cpu size={20} /><span className="font-medium">Diseño técnico, instalación limpia y explicación clara</span></div>
            <p className="mt-3 text-sm leading-6 text-slate-300">Soluciones adaptadas a tu vivienda y presupuesto, con marcas profesionales y crecimiento por fases.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitStrip() {
  const benefits = [
    ["Más confort", "Control desde móvil, pulsadores o voz sin complicar el uso diario."],
    ["Más seguridad", "Sensores, avisos, cámaras e integración con escenas de ausencia."],
    ["Más eficiencia", "Medición de consumo, horarios y control de cargas para reducir gasto."],
    ["Instalación seria", "Electricidad, documentación, pruebas y soporte posterior."],
  ];
  return (
    <section className="pb-12">
      <div className="container grid gap-4 md:grid-cols-4">
        {benefits.map(([title, text]) => <div className="mini-panel" key={title}><h3>{title}</h3><p>{text}</p></div>)}
      </div>
    </section>
  );
}

function Authority() {
  return (
    <section className="section pt-8">
      <div className="container">
        <div className="authority-panel">
          <div>
            <p className="eyebrow"><ShieldCheck size={16} /> Certificaciones y confianza</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Domótica profesional certificada en Madrid</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              TechZen Smart Homes es KNX Partner y Shelly Partner Verified. Combinamos experiencia eléctrica, integración de sistemas y trato cercano para que la instalación sea segura, útil y mantenible.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {authorityBadges.map((badge) => <span className="trust-badge" key={badge}>{badge}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceOverview() {
  return (
    <Section id="servicios" eyebrow="Servicios" title="Servicios de electricidad y domótica en Madrid explicados sin rodeos" intro="Cada bloque responde a una necesidad concreta: seguridad eléctrica, control, confort, ahorro o mantenimiento. Puedes empezar por una mejora puntual y crecer por fases.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {serviceData.map((service) => (
          <a className="service-card" href={route(`/servicios/${service.slug}`)} key={service.slug}>
            <div className="icon-wrap"><service.icon size={24} /></div>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <ul>
              {service.benefits.slice(0, 3).map((benefit) => <li key={benefit}><CheckCircle2 size={15} />{benefit}</li>)}
            </ul>
            <span className="text-link">Ver solución <ArrowRight size={16} /></span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function TechnologySection() {
  return (
    <section className="band">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow"><CircuitBoard size={16} /> Integración de sistemas</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Shelly, KNX, Loxone y Home Assistant integrados en una sola solución</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">No todas las viviendas necesitan la misma tecnología. Elegimos el sistema según obra, presupuesto, fiabilidad, mantenimiento y objetivos: desde una automatización Shelly sin grandes obras hasta una instalación KNX o Loxone de alto nivel.</p>
        </div>
        <div className="logo-grid">
          {technologies.map(([name, src, alt]) => (
            <article className="logo-card" key={name}>
              <img src={asset(src)} alt={alt} loading="lazy" />
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <Section id="casos" eyebrow="Casos de uso" title="Ejemplos concretos de una vivienda inteligente bien diseñada" intro="La domótica no va de tener una app más. Va de resolver situaciones diarias con automatizaciones que funcionan de forma natural.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item, index) => <div className="case-card" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
      </div>
    </Section>
  );
}

function VideoShowcase() {
  return (
    <section className="band">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow"><Camera size={16} /> Vídeo demo</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Control rápido desde el móvil, sin perder pulsadores ni uso normal</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Una instalación bien pensada permite encender, regular, medir o automatizar sin que la vivienda dependa de una única app. El sistema debe ser cómodo para quien vive allí cada día.</p>
          <CtaGroup className="mt-8" />
        </div>
        <div className="video-frame">
          <video src={asset("videos/techzen-demo-domotica.mp4")} poster={asset("images/techzen-circuit-brand.jpg")} controls muted autoPlay loop playsInline preload="metadata" aria-label="Vídeo corto de domótica TechZen Smart Homes" />
        </div>
      </div>
    </section>
  );
}

function ProjectGallery() {
  const [active, setActive] = useState("Todas");
  const [selected, setSelected] = useState(null);
  const visible = active === "Todas" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <Section id="galeria" eyebrow="Galería visual" title="Proyectos y soluciones TechZen" intro="Zona preparada para mostrar instalaciones reales y ejemplos visuales. Las imágenes actuales son propias del proyecto o placeholders neutros sin marcas de terceros; cuando tengas fotos reales, puedes sustituirlas en `public/images/`.">
      <div className="filter-row" aria-label="Filtrar galería por categoría">
        {galleryCategories.map((category) => (
          <button className={active === category ? "filter-button active" : "filter-button"} key={category} onClick={() => setActive(category)} type="button">{category}</button>
        ))}
      </div>
      <div className="gallery-grid mt-8">
        {visible.map((item) => (
          <figure className="gallery-card" key={`${item.category}-${item.title}`}>
            {item.src ? <img src={asset(item.src)} alt={item.alt} loading="lazy" /> : <div className="photo-placeholder"><Camera size={28} /><span>Foto real pendiente de subir</span></div>}
            <figcaption>
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
              <div className="gallery-actions">
                <button type="button" onClick={() => setSelected(item)}>Ampliar imagen</button>
                <a href={route(item.link)}>Consultar presupuesto</a>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
}

function Lightbox({ item, onClose }) {
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="lightbox-card">
        <button className="lightbox-close" type="button" onClick={onClose} aria-label="Cerrar imagen"><X size={22} /></button>
        {item.src ? <img src={asset(item.src)} alt={item.alt} /> : <div className="photo-placeholder large"><Camera size={40} /><span>Foto real pendiente de subir</span></div>}
        <div className="p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan">{item.category}</p>
          <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
          <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
          <a className="btn-primary mt-5" href={route(item.link)}>Pedir instalación similar <ArrowRight size={18} /></a>
        </div>
      </div>
    </div>
  );
}

function WorkMethod() {
  const steps = [
    ["1", "Diagnóstico inicial", "Escuchamos qué quieres mejorar y revisamos cuadro eléctrico, mecanismos, cableado, red, cargas, sensores y sistemas existentes."],
    ["2", "Diseño de solución", "Elegimos Shelly, KNX, Loxone, Home Assistant u otra combinación según vivienda, presupuesto, obra necesaria y mantenimiento."],
    ["3", "Instalación limpia", "Montamos con orden, probamos protecciones, etiquetamos cuando procede y cuidamos acabados para que la vivienda siga siendo cómoda."],
    ["4", "Configuración y pruebas", "Creamos escenas, automatizaciones, dashboards, avisos y lógica de seguridad con pruebas reales de uso."],
    ["5", "Explicación al cliente", "Te enseñamos cómo usarlo desde pulsadores, móvil o voz, sin depender de configuraciones imposibles de entender."],
    ["6", "Soporte posterior", "Podemos mantener, ampliar y mejorar la instalación cuando cambien tus necesidades."],
  ];
  return (
    <Section id="metodo" eyebrow="Cómo trabajamos" title="Proceso claro desde la visita técnica hasta el soporte posterior">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map(([number, title, text]) => <div className="step-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
      </div>
    </Section>
  );
}

function TrustSection() {
  const trust = [
    "Trabajo limpio y ordenado",
    "Soluciones adaptadas al presupuesto",
    "Instalaciones escalables por fases",
    "Uso de marcas profesionales",
    "Integración de sistemas mixtos",
    "Explicación clara al cliente",
    "Soporte después de la instalación",
    "Experiencia en electricidad y domótica",
  ];
  return (
    <section className="band">
      <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow"><ShieldCheck size={16} /> Por qué elegir TechZen</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Una smart home fiable empieza por una instalación bien diseñada</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">No vendemos automatizaciones sueltas sin criterio. Revisamos la base eléctrica, documentamos lo importante y planteamos soluciones que puedas usar y mantener.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {trust.map((item) => <span className="trust-badge" key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}

function EnergySecuritySection() {
  return (
    <Section id="ahorro-seguridad" eyebrow="Ahorro y seguridad" title="Ahorro, seguridad y confort en una instalación bien diseñada" intro="La vivienda inteligente debe proteger, informar y ahorrar sin convertir la casa en algo difícil de usar.">
      <div className="grid gap-5 lg:grid-cols-3">
        <InfoCard icon={BatteryCharging} title="Ahorro energético" text="Medición con Shelly EM, control de cargas, avisos de consumo, apagados automáticos y datos para revisar hábitos o potencia contratada." />
        <InfoCard icon={ShieldCheck} title="Seguridad y sensores" text="Sensores de movimiento, puertas, ventanas, humo, fugas de agua y cámaras integradas con avisos y escenas de presencia." />
        <InfoCard icon={ThermometerSun} title="Confort diario" text="Climatización, persianas, iluminación y escenas que se adaptan a horarios, temperatura, presencia y modo de vida." />
      </div>
    </Section>
  );
}

function ZonesSection() {
  return (
    <section className="section pt-8">
      <div className="container">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <p className="eyebrow"><MapPin size={16} /> Zonas de servicio</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Electricidad y domótica en Madrid y alrededores</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">Trabajamos principalmente en Madrid capital y podemos valorar proyectos en municipios cercanos según alcance, disponibilidad y tipo de instalación.</p>
          <div className="mt-6 flex flex-wrap gap-3">{zones.map((zone) => <span className="zone-pill" key={zone}>{zone}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    ["¿Qué tecnología me conviene: Shelly, KNX, Loxone o Home Assistant?", "Depende de si hay obra, del presupuesto, del nivel de fiabilidad requerido y de lo que quieras controlar. Shelly es muy flexible en viviendas existentes; KNX es robusto para reformas y obra nueva; Loxone centraliza automatizaciones avanzadas; Home Assistant integra sistemas mixtos."],
    ["¿Se puede empezar poco a poco?", "Sí. Muchas viviendas empiezan por luces, persianas, consumo o garaje y después amplían a climatización, sensores, seguridad o dashboards."],
    ["¿Mantengo el control manual?", "Siempre que sea viable, sí. Una instalación cómoda debe funcionar desde pulsadores y no depender solo del móvil."],
    ["¿Trabajáis en Madrid y alrededores?", "Sí. TechZen Smart Homes trabaja principalmente en Madrid y puede valorar proyectos en alrededores según alcance y disponibilidad."],
    ["¿Qué significa KNX Partner?", "Significa que contamos con formación acreditada para diseñar e integrar sistemas KNX con criterio profesional."],
    ["¿Qué significa Shelly Partner Verified?", "Indica especialización y verificación como partner para instalar e integrar soluciones Shelly de forma profesional."],
  ];
  return <FaqList id="faq" eyebrow="FAQ" title="Preguntas frecuentes sobre domótica y electricidad inteligente" faqs={faqs} />;
}

function ServicePage({ service }) {
  const related = serviceData.filter((item) => item.slug !== service.slug).slice(0, 5);
  return (
    <PageShell eyebrow="Servicio en Madrid" title={service.h1} intro={service.detail}>
      <div className="container -mt-6 pb-6"><CtaGroup /></div>
      <ContentBlock title="Qué incluye este servicio">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <img className="service-image" src={asset(service.image)} alt={`${service.title} en Madrid con TechZen Smart Homes`} loading="lazy" />
          <div>
            <ul className="benefit-list">{service.benefits.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul>
            <h3 className="mt-8 text-2xl font-semibold">Ejemplos reales de uso</h3>
            <div className="mt-4 grid gap-3">{service.examples.map((item) => <p className="example-line" key={item}>{item}</p>)}</div>
          </div>
        </div>
      </ContentBlock>
      <ContentBlock title="Proceso de trabajo">
        <div className="grid gap-5 md:grid-cols-3">
          {service.process.map((item, index) => <div className="step-card" key={item}><span>{index + 1}</span><h3>{item}</h3><p>Lo hacemos con criterios de seguridad, claridad y mantenimiento para que la instalación sea útil desde el primer día.</p></div>)}
        </div>
      </ContentBlock>
      <FaqList title={`Preguntas frecuentes sobre ${service.title}`} faqs={service.faqs} compact />
      <ContentBlock title="Otros servicios relacionados">
        <div className="internal-links">{related.map((item) => <a href={route(`/servicios/${item.slug}`)} key={item.slug}>{item.title}</a>)}<a href={route("/#galeria")}>Ver galería de instalaciones</a><a href={route("/contacto")}>Solicitar presupuesto</a></div>
      </ContentBlock>
      <ContactSection compact />
    </PageShell>
  );
}

function BlogIndex() {
  return (
    <PageShell eyebrow="Blog SEO" title="Blog de domótica, electricidad inteligente, KNX, Shelly y Home Assistant" intro="Guías prácticas para entender tecnologías, tomar mejores decisiones y preparar una vivienda inteligente en Madrid con criterios profesionales.">
      <div className="container grid gap-5 pb-16 md:grid-cols-2">
        {posts.map((post) => (
          <a className="post-card" href={route(`/blog/${post.slug}`)} key={post.slug}>
            <BookOpen size={22} />
            <h2>{post.title}</h2>
            <p>{post.metaDescription}</p>
            <span className="text-link">Leer artículo <ArrowRight size={16} /></span>
          </a>
        ))}
      </div>
    </PageShell>
  );
}

function BlogPost({ post }) {
  return (
    <PageShell eyebrow="Guía práctica" title={post.title} intro={post.intro}>
      <article className="article-body">
        {post.sections.map((section) => (
          <section key={section}>
            <h2>{section}</h2>
            <p>En un proyecto de domótica en Madrid conviene empezar por el objetivo: comodidad, seguridad, eficiencia o mantenimiento. A partir de ahí se decide si encajan mejor KNX, Shelly, Loxone, Home Assistant o una combinación ordenada de varias tecnologías.</p>
            <h3>Recomendación profesional</h3>
            <p>Antes de comprar dispositivos, revisa cuadro eléctrico, cableado, red WiFi, cargas, protecciones y necesidades reales. Una instalación documentada evita averías, dependencias innecesarias y costes ocultos.</p>
          </section>
        ))}
      </article>
      <ContentBlock title="Sigue aprendiendo">
        <div className="internal-links">
          <a href={route("/servicios/knx-madrid")}>KNX Madrid</a>
          <a href={route("/servicios/shelly-madrid")}>Shelly Madrid</a>
          <a href={route("/servicios/home-assistant-madrid")}>Home Assistant Madrid</a>
          <a href={route("/servicios/domotica-madrid")}>Domótica profesional Madrid</a>
        </div>
      </ContentBlock>
      <ContactSection compact />
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell eyebrow="Contacto" title="Solicita presupuesto para electricidad y domótica en Madrid" intro="Cuéntanos qué quieres mejorar: electricidad, cuadros, Shelly, KNX, Loxone, Home Assistant, iluminación, persianas, climatización, seguridad o ahorro energético.">
      <ContactSection compact />
      <ContentBlock title="Qué información ayuda para presupuestar">
        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard icon={Home} title="Tipo de vivienda" text="Piso, chalet, local, reforma, obra nueva o instalación existente." />
          <InfoCard icon={Wrench} title="Qué quieres controlar" text="Luces, persianas, clima, garaje, consumo, sensores, cámaras o cuadros." />
          <InfoCard icon={Camera} title="Fotos útiles" text="Cuadro eléctrico, mecanismos, persianas, zona de instalación y cualquier sistema existente." />
        </div>
      </ContentBlock>
    </PageShell>
  );
}

function ContactSection({ compact = false }) {
  return (
    <section id="contacto" className={compact ? "py-10" : "contact-section"}>
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow"><MapPin size={16} /> {CITY}, España</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Pide presupuesto o visita técnica</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Te orientaremos con una propuesta clara, por fases y adaptada a tu vivienda. Puedes escribir por WhatsApp, llamar o enviar un email.</p>
        </div>
        <div className="contact-card">
          <a href={whatsappHref()} target="_blank" rel="noreferrer" className="contact-action"><MessageCircle size={22} /><span><strong>Hablar por WhatsApp</strong><small>{PHONE_NUMBER}</small></span></a>
          <a href={phoneHref()} className="contact-action"><Phone size={22} /><span><strong>Llamar ahora</strong><small>{PHONE_NUMBER}</small></span></a>
          <a href={`mailto:${EMAIL}?subject=Solicitud de presupuesto TechZen Smart Homes`} className="contact-action"><Mail size={22} /><span><strong>Enviar email</strong><small>{EMAIL}</small></span></a>
        </div>
      </div>
    </section>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <a href={route("/")} aria-label="TechZen Smart Homes inicio"><img src={asset("logo.svg")} alt="Logo de TechZen Smart Homes" className="h-11 w-auto" /></a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">{navLinks.map(([label, href]) => <a className="transition hover:text-cyan" href={route(href)} key={label}>{label}</a>)}</nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSelector />
          <a className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cyan" href={whatsappHref()} target="_blank" rel="noreferrer">Pedir presupuesto</a>
        </div>
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen((value) => !value)}><Menu size={22} /></button>
      </div>
      {open && <nav className="container grid gap-2 border-t border-white/10 pb-5 pt-3 text-sm font-medium text-slate-200 lg:hidden">{navLinks.map(([label, href]) => <a className="rounded-xl px-3 py-3 hover:bg-white/10" href={route(href)} key={label} onClick={() => setOpen(false)}>{label}</a>)}<div className="px-3 py-2"><LanguageSelector compact /></div><a className="rounded-xl bg-cyan px-3 py-3 font-semibold text-ink" href={whatsappHref()} target="_blank" rel="noreferrer">WhatsApp</a></nav>}
    </header>
  );
}

function LanguageSelector({ compact = false }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const saved = localStorage.getItem("techzen-language") || "es";
    setLanguage(saved);
    document.documentElement.lang = saved === "zh-CN" ? "zh" : saved;
  }, []);

  function handleChange(event) {
    const next = event.target.value;
    setLanguage(next);
    localStorage.setItem("techzen-language", next);
    document.documentElement.lang = next === "zh-CN" ? "zh" : next;

    if (next === "es") return;
    window.location.href = googleTranslateUrl(next);
  }

  return (
    <label className={`language-selector ${compact ? "w-full" : ""}`}>
      <Globe2 size={17} aria-hidden="true" />
      <span className="sr-only">Elegir idioma</span>
      <select value={language} onChange={handleChange} aria-label="Elegir idioma">
        {languages.map((item) => <option value={item.code} key={item.code}>{compact ? item.label : item.short}</option>)}
      </select>
    </label>
  );
}

function Section({ id, eyebrow, title, intro, children }) {
  return <section id={id} className="section"><div className="container"><div className="mb-10 max-w-3xl"><p className="eyebrow"><Zap size={16} /> {eyebrow}</p><h2 className="mt-5 text-3xl font-semibold sm:text-4xl">{title}</h2>{intro && <p className="mt-4 text-lg leading-8 text-slate-300">{intro}</p>}</div>{children}</div></section>;
}

function PageShell({ eyebrow, title, intro, children }) {
  return <section className="pt-28 sm:pt-32"><div className="container pb-16"><p className="eyebrow"><Building2 size={16} /> {eyebrow}</p><h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{intro}</p></div>{children}</section>;
}

function ContentBlock({ title, children }) {
  return <section className="section py-10"><div className="container"><h2 className="mb-6 text-2xl font-semibold">{title}</h2>{children}</div></section>;
}

function FaqList({ id, eyebrow, title, faqs, compact = false }) {
  return <section id={id} className={compact ? "py-10" : "section"}><div className="container"><div className="mb-8 max-w-3xl">{eyebrow && <p className="eyebrow"><Zap size={16} /> {eyebrow}</p>}<h2 className="mt-5 text-3xl font-semibold sm:text-4xl">{title}</h2></div><div className="grid gap-4 lg:grid-cols-2">{faqs.map(([q, a]) => <details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>;
}

function InfoCard({ icon: Icon, title, text }) {
  return <article className="feature-block"><Icon size={30} /><h2>{title}</h2><p>{text}</p></article>;
}

function CtaGroup({ className = "" }) {
  return <div className={`flex flex-col gap-3 sm:flex-row ${className}`}><a className="btn-primary" href={whatsappHref()} target="_blank" rel="noreferrer">Solicitar presupuesto <ArrowRight size={18} /></a><a className="btn-secondary" href={whatsappHref()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Hablar por WhatsApp</a><a className="btn-ghost" href={route("/contacto")}>Pedir visita técnica</a></div>;
}

function Metric({ icon: Icon, label, value }) {
  return <div className="metric"><Icon size={20} /><span>{label}</span><strong>{value}</strong></div>;
}

function FloatingWhatsApp() {
  return <a className="floating-whatsapp" href={whatsappHref()} target="_blank" rel="noreferrer" aria-label="Pedir presupuesto por WhatsApp"><MessageCircle size={22} /><span>WhatsApp</span></a>;
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050810] py-10">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div><img src={asset("logo.svg")} alt="Logo de TechZen Smart Homes" className="h-12 w-auto" /><p className="mt-3 text-sm text-slate-400">Electricidad, KNX, Shelly, Loxone, Home Assistant y domótica profesional en Madrid.</p></div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400"><a href={phoneHref()}>{PHONE_NUMBER}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>{CITY}, España</span><LanguageSelector /></div>
        </div>
        <div className="internal-links">{serviceData.slice(0, 8).map((item) => <a href={route(`/servicios/${item.slug}`)} key={item.slug}>{item.title}</a>)}<a href={route("/blog")}>Blog</a><a href={route("/contacto")}>Contacto</a></div>
      </div>
    </footer>
  );
}

function NotFound() {
  return <PageShell eyebrow="Página no encontrada" title="Esta página no existe" intro="Puedes volver al inicio o consultar los servicios principales de TechZen Smart Homes."><ServiceOverview /></PageShell>;
}

function whatsappHref() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

function phoneHref() {
  return `tel:${PHONE_NUMBER.replaceAll(" ", "")}`;
}

function googleTranslateUrl(targetLanguage) {
  const basePath = base.replace(/\/$/, "");
  const currentPath = typeof window === "undefined" ? "/" : window.location.pathname.replace(basePath, "") || "/";
  const currentHash = typeof window === "undefined" ? "" : window.location.hash;
  const cleanPath = currentPath.startsWith("/") ? currentPath : `/${currentPath}`;
  const productionUrl = `${SITE_URL}${cleanPath}${currentHash}`;
  return `https://translate.google.com/translate?sl=es&tl=${encodeURIComponent(targetLanguage)}&u=${encodeURIComponent(productionUrl)}`;
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setOg(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let tag = document.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", url);
}

function setJsonLd(data) {
  document.querySelectorAll("script[data-techzen-schema]").forEach((node) => node.remove());
  data.forEach((item) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.techzenSchema = "true";
    script.textContent = JSON.stringify(item);
    document.head.appendChild(script);
  });
}

function buildSchema(path, service, post) {
  const business = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician", "ProfessionalService"],
    name: "TechZen Smart Homes",
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    address: { "@type": "PostalAddress", addressLocality: CITY, addressCountry: "ES" },
    areaServed: "Madrid y alrededores",
    description: "Electricidad profesional, domótica, KNX, Shelly, Loxone, Home Assistant, cuadros eléctricos y automatizaciones inteligentes en Madrid.",
    knowsAbout: ["electricidad", "domótica", "KNX", "Shelly", "Loxone", "Home Assistant", "iluminación inteligente", "ahorro energético"],
  };
  const schemas = [business];
  if (service) {
    schemas.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: service.faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) });
  }
  if (post) {
    schemas.push({ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.metaDescription, author: { "@type": "Organization", name: "TechZen Smart Homes" }, publisher: { "@type": "Organization", name: "TechZen Smart Homes" }, mainEntityOfPage: `${SITE_URL}${path}` });
  }
  return schemas;
}

export { serviceData as services, posts, seoMap, SITE_URL };
export default App;
