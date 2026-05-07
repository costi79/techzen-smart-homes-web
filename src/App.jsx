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
  Wrench,
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

const authorityBadges = [
  "KNX Partner",
  "Shelly Partner Verified",
  "Electricidad profesional",
  "Domótica avanzada",
  "Instalaciones documentadas",
];

const technologies = [
  ["KNX Partner", "logos/knx-partner.svg", "Logo temporal de KNX Partner"],
  ["Shelly Partner Verified", "logos/shelly-partner-verified.svg", "Logo temporal de Shelly Partner Verified"],
  ["Loxone", "logos/loxone.svg", "Logo temporal de Loxone"],
  ["Home Assistant", "logos/home-assistant.svg", "Logo temporal de Home Assistant"],
  ["Apple Home", "logos/apple-home.svg", "Logo temporal de Apple Home"],
  ["Google Home", "logos/google-home.svg", "Logo temporal de Google Home"],
];

const gallery = [
  ["Instalaciones Shelly", "images/shelly-installation.svg", "Instalación Shelly profesional en Madrid"],
  ["KNX", "images/knx-installation.svg", "Instalación KNX para vivienda inteligente"],
  ["Loxone", "images/loxone-installation.svg", "Integración Loxone para domótica residencial"],
  ["Cuadros eléctricos", "images/electrical-panel.svg", "Cuadro eléctrico ordenado y documentado"],
  ["Cuadros domóticos", "images/smart-home-panel.svg", "Cuadro domótico con control de vivienda"],
  ["Home Assistant dashboards", "images/home-assistant-dashboard.svg", "Panel de Home Assistant para casa inteligente"],
  ["Cableado ordenado", "images/domotic-wiring.svg", "Cableado domótico ordenado en instalación profesional"],
  ["Automatización de garaje", "images/garage-automation.svg", "Automatización de garaje con móvil y sensores"],
];

const services = [
  {
    slug: "domotica-madrid",
    title: "Domótica profesional en Madrid",
    short: "Diseño e instalación de viviendas inteligentes con control de luces, persianas, clima, seguridad y consumo.",
    h1: "Domótica profesional en Madrid para viviendas más seguras y eficientes",
    metaTitle: "Domótica profesional Madrid | TechZen Smart Homes",
    metaDescription: "Domótica profesional en Madrid para viviendas, locales y espacios conectados. KNX, Shelly, Loxone, Home Assistant, luces, persianas, garaje, seguridad y consumo.",
    benefits: ["Control cómodo desde móvil y asistentes de voz", "Automatizaciones locales y fiables", "Instalaciones escalables por fases", "Documentación clara de cada circuito"],
    faqs: [
      ["¿Qué incluye una instalación domótica?", "Puede incluir luces, persianas, climatización, garaje, sensores, cámaras, consumo eléctrico y escenas adaptadas al uso real de la vivienda."],
      ["¿Se puede automatizar sin grandes obras?", "Sí. Muchas viviendas pueden mejorar con Shelly, sensores y una planificación eléctrica cuidada sin reforma integral."],
    ],
  },
  {
    slug: "knx-madrid",
    title: "KNX Madrid",
    short: "Proyectos KNX para viviendas y locales que necesitan estabilidad, cableado profesional y control a largo plazo.",
    h1: "KNX Partner en Madrid para proyectos de domótica profesional",
    metaTitle: "KNX Madrid | KNX Partner TechZen Smart Homes",
    metaDescription: "Instalación KNX en Madrid por KNX Partner. Domótica cableada profesional para luces, persianas, climatización, escenas, seguridad y eficiencia energética.",
    benefits: ["Estándar internacional para domótica profesional", "Ideal para obra nueva o reforma integral", "Control robusto de luces, persianas y climatización", "Integración con visualizaciones y otros sistemas"],
    faqs: [
      ["¿Cuándo merece la pena KNX?", "KNX suele tener sentido en obra nueva, reformas importantes o viviendas donde la fiabilidad y la vida útil del sistema son prioritarias."],
      ["¿KNX se puede combinar con Home Assistant?", "Sí. Puede integrarse con Home Assistant para visualización, automatizaciones avanzadas y conexión con otros ecosistemas."],
    ],
  },
  {
    slug: "shelly-madrid",
    title: "Shelly Madrid",
    short: "Instalación Shelly y Shelly Partner Verified para automatizar sin grandes obras y mantener control local.",
    h1: "Instalación Shelly en Madrid por Shelly Partner Verified",
    metaTitle: "Shelly Madrid | Shelly Partner Verified",
    metaDescription: "Instalación Shelly en Madrid para luces, persianas, garaje, consumo eléctrico y automatizaciones. TechZen Smart Homes es Shelly Partner Verified.",
    benefits: ["Automatización con obra mínima", "Medición de consumo por circuitos", "Integración con Home Assistant, Apple Home y Google Home", "Instalación eléctrica revisada y documentada"],
    faqs: [
      ["¿Shelly sirve para persianas y luces?", "Sí. Existen módulos específicos para luces, persianas, medición de consumo, entradas y otros usos."],
      ["¿Shelly depende siempre de Internet?", "Muchos dispositivos Shelly pueden funcionar en red local, especialmente si se integran correctamente con Home Assistant."],
    ],
  },
  {
    slug: "loxone-madrid",
    title: "Loxone Madrid",
    short: "Integración Loxone para viviendas que buscan una experiencia domótica centralizada y preparada para crecer.",
    h1: "Loxone en Madrid para automatización residencial profesional",
    metaTitle: "Loxone Madrid | Domótica residencial profesional",
    metaDescription: "Integración Loxone en Madrid para luces, persianas, clima, seguridad y escenas inteligentes en viviendas y espacios profesionales.",
    benefits: ["Sistema centralizado para control residencial", "Automatizaciones pensadas para el uso diario", "Integración con iluminación, clima y seguridad", "Escalabilidad para proyectos completos"],
    faqs: [
      ["¿Loxone es adecuado para viviendas?", "Sí, especialmente cuando se busca una solución centralizada con control de múltiples sistemas desde una lógica común."],
      ["¿Se puede comparar con KNX o Shelly?", "Cada tecnología tiene su lugar. Loxone encaja bien en proyectos integrales, KNX en instalaciones cableadas estándar y Shelly en mejoras flexibles."],
    ],
  },
  {
    slug: "home-assistant-madrid",
    title: "Home Assistant Madrid",
    short: "Instalación, configuración y orden de Home Assistant para centralizar dispositivos y automatizaciones.",
    h1: "Home Assistant en Madrid para controlar tu casa inteligente",
    metaTitle: "Home Assistant Madrid | Instalación y configuración",
    metaDescription: "Instalación de Home Assistant en Madrid. Paneles, automatizaciones, copias, integración con Shelly, KNX, Apple Home, Google Home, sensores y cámaras.",
    benefits: ["Control local y flexible", "Paneles útiles para móvil, tablet y pared", "Automatizaciones avanzadas con sensores y consumo", "Integración con Shelly, KNX, Apple Home y Google Home"],
    faqs: [
      ["¿Home Assistant es para usuarios avanzados?", "Puede serlo, pero una instalación bien configurada permite usarlo de forma sencilla con paneles claros y automatizaciones documentadas."],
      ["¿Qué pasa si falla Internet?", "Si la instalación está diseñada con prioridad local, muchas funciones pueden seguir operando dentro de casa."],
    ],
  },
  {
    slug: "cuadros-electricos-madrid",
    title: "Cuadros eléctricos Madrid",
    short: "Montaje, revisión y orden de cuadros eléctricos y cuadros domóticos preparados para control y seguridad.",
    h1: "Cuadros eléctricos y cuadros domóticos en Madrid",
    metaTitle: "Cuadros eléctricos Madrid | Cuadros domóticos",
    metaDescription: "Cuadros eléctricos y cuadros domóticos en Madrid para viviendas inteligentes. Orden, protección, medición, documentación y preparación para domótica.",
    benefits: ["Orden y seguridad eléctrica", "Espacio preparado para módulos domóticos", "Medición de consumos y circuitos clave", "Etiquetado y documentación para mantenimiento"],
    faqs: [
      ["¿Es necesario revisar el cuadro antes de instalar domótica?", "Sí. Un cuadro ordenado y protegido reduce riesgos y facilita futuras ampliaciones."],
      ["¿Qué es un cuadro domótico?", "Es un cuadro preparado para integrar protecciones, actuadores, módulos de control, medición y cableado organizado."],
    ],
  },
  {
    slug: "automatizacion-garaje-madrid",
    title: "Automatización de garaje Madrid",
    short: "Control de puerta de garaje desde móvil, Siri, sensores y escenas de seguridad.",
    h1: "Automatización de garaje en Madrid con móvil, Siri y sensores",
    metaTitle: "Automatización garaje Madrid | Control con móvil y Siri",
    metaDescription: "Automatización de garaje en Madrid con control desde móvil, Siri, sensores, avisos y domótica local para viviendas y comunidades pequeñas.",
    benefits: ["Apertura desde móvil y asistentes", "Avisos por puerta abierta", "Integración con cámaras y sensores", "Automatizaciones por llegada o ausencia"],
    faqs: [
      ["¿Puedo abrir el garaje con Siri?", "Sí, si el sistema se integra con Apple Home o una pasarela compatible y se configura con seguridad."],
      ["¿Se puede saber si la puerta quedó abierta?", "Sí. Añadiendo sensores se pueden enviar avisos y mostrar el estado en el móvil."],
    ],
  },
  {
    slug: "medicion-consumo-electrico-madrid",
    title: "Medición de consumo eléctrico Madrid",
    short: "Medición de consumo por circuitos para entender gasto, detectar picos y mejorar eficiencia energética.",
    h1: "Medición de consumo eléctrico en Madrid para ahorrar con domótica",
    metaTitle: "Medición consumo eléctrico Madrid | Domótica y eficiencia",
    metaDescription: "Medición de consumo eléctrico en Madrid con Shelly, Home Assistant y cuadros preparados. Detecta picos, analiza circuitos y mejora eficiencia energética.",
    benefits: ["Históricos de consumo por circuitos", "Alertas de picos y cargas anómalas", "Decisiones prácticas para reducir gasto", "Integración con automatizaciones de eficiencia"],
    faqs: [
      ["¿Puedo medir el consumo de toda la casa?", "Sí. También se pueden medir circuitos concretos como climatización, termo, cocina, garaje o iluminación."],
      ["¿La medición ayuda a ahorrar?", "Ayuda a entender dónde se consume y permite automatizar decisiones para reducir gasto sin perder confort."],
    ],
  },
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
    description: "Domótica profesional en Madrid. KNX Partner y Shelly Partner Verified para electricidad, Shelly, KNX, Loxone, Home Assistant, cuadros eléctricos, garaje, seguridad y consumo.",
  }],
  ["/blog", {
    title: "Blog de domótica, KNX, Shelly y Home Assistant | TechZen",
    description: "Guías prácticas sobre domótica en Madrid, KNX, Shelly, Loxone, Home Assistant, eficiencia energética, cuadros domóticos y automatización de viviendas.",
  }],
  ...services.map((item) => [`/servicios/${item.slug}`, { title: item.metaTitle, description: item.metaDescription }]),
  ...posts.map((item) => [`/blog/${item.slug}`, { title: item.metaTitle, description: item.metaDescription }]),
]);

function App() {
  const currentPath = useCurrentPath();
  const service = services.find((item) => currentPath === `/servicios/${item.slug}`);
  const post = posts.find((item) => currentPath === `/blog/${item.slug}`);
  const seo = seoMap.get(currentPath) || seoMap.get("/");

  useSeo(currentPath, seo, service, post);

  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        {currentPath === "/" && <HomePage />}
        {currentPath === "/blog" && <BlogIndex />}
        {service && <ServicePage service={service} />}
        {post && <BlogPost post={post} />}
        {!service && !post && currentPath !== "/" && currentPath !== "/blog" && <NotFound />}
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

function useSeo(path, seo, service, post) {
  useEffect(() => {
    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("keywords", "domótica Madrid, KNX Madrid, KNX Partner Madrid, Shelly Madrid, Shelly Partner Verified Madrid, instalación Shelly Madrid, electricista domótica Madrid, cuadros eléctricos Madrid, Loxone Madrid, Home Assistant Madrid, automatización vivienda Madrid, casa inteligente Madrid, control garaje Madrid, medición consumo eléctrico Madrid");
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
      <Authority />
      <Partners />
      <CoreServices />
      <VisualProof />
      <Cases />
      <Method />
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
          <p className="eyebrow"><Sparkles size={16} /> Electricidad, KNX, Shelly y domótica profesional en Madrid</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Seas donde seas, tu casa siempre cerca.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            TechZen Smart Homes diseña e instala casas inteligentes con electricidad profesional, KNX, Shelly, Loxone, Home Assistant, Apple Home, Google Home, cámaras, sensores, cuadros domóticos y medición de consumo eléctrico.
          </p>
          <CtaGroup className="mt-8" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["KNX Partner", "Shelly Partner Verified", "Servicio en Madrid"].map((item) => (
              <div className="mini-proof" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="device-panel" role="img" aria-label="Panel domótico con luces, seguridad, consumo eléctrico y automatizaciones de una vivienda inteligente">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-slate-400">TechZen Control</p>
              <h2 className="text-2xl font-semibold">Casa inteligente en Madrid</h2>
            </div>
            <div className="rounded-full border border-cyan/40 bg-cyan/10 p-3 text-cyan"><Gauge size={24} /></div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Metric icon={Lightbulb} label="Luces" value="Escenas KNX" />
            <Metric icon={ShieldCheck} label="Seguridad" value="Sensores activos" />
            <Metric icon={Zap} label="Consumo" value="Medición Shelly" />
            <Metric icon={Camera} label="Cámaras" value="Avisos al móvil" />
          </div>
          <div className="mt-6 rounded-2xl border border-cyan/20 bg-cyan/5 p-5">
            <div className="flex items-center gap-3 text-cyan"><Cpu size={20} /><span className="font-medium">Automatización profesional</span></div>
            <p className="mt-3 text-sm leading-6 text-slate-300">Luces, persianas, garaje, climatización y consumo conectados con lógica local, documentación y mantenimiento sencillo.</p>
          </div>
        </div>
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
            <p className="eyebrow"><ShieldCheck size={16} /> Certificaciones y partners</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Domótica profesional certificada en Madrid</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              TechZen Smart Homes es KNX Partner y Shelly Partner Verified. Diseñamos, instalamos e integramos soluciones de domótica profesional para viviendas, locales y espacios que necesitan control, seguridad, eficiencia y fiabilidad.
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

function Partners() {
  return (
    <Section id="partners" eyebrow="Partners" title="Partners y tecnologías profesionales" intro="Trabajamos con sistemas reconocidos en el sector para ofrecer instalaciones seguras, escalables y preparadas para el futuro: KNX, Shelly, Loxone, Home Assistant, Apple Home y Google Home.">
      <div className="logo-grid">
        {technologies.map(([name, src, alt]) => (
          <article className="logo-card" key={name}>
            <img src={asset(src)} alt={alt} loading="lazy" />
            <h3>{name}</h3>
          </article>
        ))}
      </div>
    </Section>
  );
}

function CoreServices() {
  return (
    <Section id="servicios" eyebrow="Servicios SEO Madrid" title="Electricista de domótica en Madrid para instalaciones completas" intro="Unimos electricidad profesional y automatización residencial para que tu vivienda sea más cómoda, segura y eficiente sin depender de soluciones improvisadas.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <a className="smart-card" href={route(`/servicios/${service.slug}`)} key={service.slug}>
            <div className="icon-wrap"><Wrench size={24} /></div>
            <h3>{service.title}</h3>
            <p>{service.short}</p>
            <span className="text-link">Ver servicio <ArrowRight size={16} /></span>
          </a>
        ))}
      </div>
    </Section>
  );
}

function VisualProof() {
  return (
    <Section id="instalaciones" eyebrow="Instalaciones" title="Instalaciones reales y soluciones profesionales" intro="Estos recursos son placeholders profesionales preparados para sustituirse por fotos reales de trabajos autorizados: cuadros eléctricos, cuadros domóticos, cableado, Shelly, KNX, Loxone, dashboards y automatización de garaje.">
      <div className="gallery-grid">
        {gallery.map(([title, src, alt]) => (
          <figure className="gallery-card" key={title}>
            <img src={asset(src)} alt={alt} loading="lazy" />
            <figcaption>{title}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function Cases() {
  const cases = [
    ["Piso inteligente", "Apagado general, control de luces, persianas y escenas para noche, trabajo y vacaciones."],
    ["Chalet seguro", "Garaje, cámaras, sensores de apertura, avisos al móvil y simulación de presencia."],
    ["Vivienda eficiente", "Medición de consumo eléctrico, climatización inteligente y decisiones automatizadas para ahorrar energía."],
  ];
  return (
    <Section id="casos" eyebrow="Casos tipo" title="Soluciones reales para viviendas reales">
      <div className="grid gap-5 lg:grid-cols-3">
        {cases.map(([title, text], index) => (
          <div className="case-card" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>
        ))}
      </div>
    </Section>
  );
}

function Method() {
  const steps = [
    ["1", "Diagnóstico", "Revisamos objetivos, cuadro eléctrico, cableado, red, mecanismos y sistemas existentes."],
    ["2", "Propuesta técnica", "Definimos KNX, Shelly, Loxone, Home Assistant u otra solución según presupuesto y necesidades."],
    ["3", "Instalación cuidada", "Montamos, configuramos, probamos y documentamos para facilitar mantenimiento y ampliaciones."],
    ["4", "Entrega y soporte", "Te explicamos el uso, dejamos bases claras y podemos acompañar futuras mejoras SEO y técnicas."],
  ];
  return (
    <Section id="metodo" eyebrow="Método" title="Proceso de trabajo documentado y profesional">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(([number, title, text]) => <div className="step-card" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
      </div>
    </Section>
  );
}

function FaqSection() {
  const faqs = [
    ["¿Trabajáis en Madrid y alrededores?", "Sí. TechZen Smart Homes trabaja principalmente en Madrid y puede valorar proyectos en alrededores según alcance y disponibilidad."],
    ["¿Qué significa ser KNX Partner?", "Significa que contamos con formación acreditada para diseñar e integrar sistemas KNX con criterio profesional."],
    ["¿Qué significa Shelly Partner Verified?", "Indica especialización y verificación como partner para instalar e integrar soluciones Shelly de forma profesional."],
    ["¿Puedo combinar KNX, Shelly, Loxone y Home Assistant?", "Sí. La clave es diseñar una arquitectura clara donde cada tecnología aporte valor sin duplicar funciones ni crear dependencias innecesarias."],
  ];
  return <FaqList id="faq" eyebrow="FAQ" title="Preguntas frecuentes sobre domótica en Madrid" faqs={faqs} />;
}

function ServicePage({ service }) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 4);
  return (
    <PageShell eyebrow="Servicio en Madrid" title={service.h1} intro={service.metaDescription}>
      <CtaGroup className="mt-8" />
      <ContentBlock title="Beneficios del servicio">
        <ul className="benefit-list">{service.benefits.map((item) => <li key={item}><CheckCircle2 size={18} />{item}</li>)}</ul>
      </ContentBlock>
      <ContentBlock title="Proceso de trabajo">
        <div className="grid gap-5 md:grid-cols-3">
          {["Visita técnica y diagnóstico", "Propuesta por fases", "Instalación, pruebas y documentación"].map((item, index) => (
            <div className="step-card" key={item}><span>{index + 1}</span><h3>{item}</h3><p>Trabajamos con criterios de seguridad, eficiencia y mantenimiento para que la instalación tenga sentido desde el primer día.</p></div>
          ))}
        </div>
      </ContentBlock>
      <FaqList title="Preguntas frecuentes" faqs={service.faqs} compact />
      <ContentBlock title="Enlaces internos recomendados">
        <div className="internal-links">{related.map((item) => <a href={route(`/servicios/${item.slug}`)} key={item.slug}>{item.title}</a>)}<a href={route("/blog")}>Blog de domótica</a></div>
      </ContentBlock>
      <ContactSection compact />
    </PageShell>
  );
}

function BlogIndex() {
  return (
    <PageShell eyebrow="Blog SEO" title="Blog de domótica, electricidad inteligente, KNX, Shelly y Home Assistant" intro="Guías prácticas para entender tecnologías, tomar mejores decisiones y preparar una vivienda inteligente en Madrid con criterios profesionales.">
      <div className="grid gap-5 md:grid-cols-2">
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
            <p>
              En un proyecto de domótica en Madrid conviene empezar por el objetivo: comodidad, seguridad, eficiencia o mantenimiento. A partir de ahí se decide si encajan mejor KNX, Shelly, Loxone, Home Assistant o una combinación ordenada de varias tecnologías.
            </p>
            <h3>Recomendación profesional</h3>
            <p>
              Antes de comprar dispositivos, revisa cuadro eléctrico, cableado, red WiFi, cargas, protecciones y necesidades reales. Una instalación documentada evita averías, dependencias innecesarias y costes ocultos.
            </p>
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

function ContactSection({ compact = false }) {
  return (
    <section id="contacto" className={compact ? "py-10" : "contact-section"}>
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="eyebrow"><MapPin size={16} /> {CITY}, España</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Pide presupuesto para electricidad y domótica en Madrid</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">Cuéntanos qué quieres controlar y en qué punto está tu instalación. Te orientaremos con una propuesta práctica, segura y preparada para crecer.</p>
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
  const links = [["Servicios", "/servicios/domotica-madrid"], ["KNX", "/servicios/knx-madrid"], ["Shelly", "/servicios/shelly-madrid"], ["Blog", "/blog"], ["Contacto", "/#contacto"]];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <a href={route("/")} aria-label="TechZen Smart Homes inicio"><img src={asset("logo.svg")} alt="Logo de TechZen Smart Homes" className="h-11 w-auto" /></a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">{links.map(([label, href]) => <a className="transition hover:text-cyan" href={route(href)} key={label}>{label}</a>)}</nav>
        <a className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cyan lg:inline-flex" href={whatsappHref()} target="_blank" rel="noreferrer">Pedir presupuesto</a>
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen((value) => !value)}><Menu size={22} /></button>
      </div>
      {open && <nav className="container grid gap-2 border-t border-white/10 pb-5 pt-3 text-sm font-medium text-slate-200 lg:hidden">{links.map(([label, href]) => <a className="rounded-xl px-3 py-3 hover:bg-white/10" href={route(href)} key={label} onClick={() => setOpen(false)}>{label}</a>)}<a className="rounded-xl bg-cyan px-3 py-3 font-semibold text-ink" href={whatsappHref()} target="_blank" rel="noreferrer">WhatsApp</a></nav>}
    </header>
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

function CtaGroup({ className = "" }) {
  return <div className={`flex flex-col gap-3 sm:flex-row ${className}`}><a className="btn-primary" href={whatsappHref()} target="_blank" rel="noreferrer">Pedir presupuesto <ArrowRight size={18} /></a><a className="btn-secondary" href={whatsappHref()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Hablar por WhatsApp</a><a className="btn-ghost" href={phoneHref()}><Phone size={18} /> Llamar ahora</a></div>;
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
          <div className="flex flex-wrap gap-4 text-sm text-slate-400"><a href={phoneHref()}>{PHONE_NUMBER}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>{CITY}, España</span></div>
        </div>
        <div className="internal-links">{services.slice(0, 5).map((item) => <a href={route(`/servicios/${item.slug}`)} key={item.slug}>{item.title}</a>)}<a href={route("/blog")}>Blog</a></div>
      </div>
    </footer>
  );
}

function NotFound() {
  return <PageShell eyebrow="Página no encontrada" title="Esta página no existe" intro="Puedes volver al inicio o consultar los servicios principales de TechZen Smart Homes."><CoreServices /></PageShell>;
}

function whatsappHref() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

function phoneHref() {
  return `tel:${PHONE_NUMBER.replaceAll(" ", "")}`;
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
    knowsAbout: ["electricidad", "domótica", "KNX", "Shelly", "Loxone", "Home Assistant"],
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

export { services, posts, seoMap, SITE_URL };
export default App;
