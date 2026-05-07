import { useState } from "react";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Camera,
  CheckCircle2,
  CircuitBoard,
  Clock3,
  Cpu,
  Home,
  Lightbulb,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  PlugZap,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  Zap,
} from "lucide-react";

const PHONE_NUMBER = "+34 675 734 122";
const WHATSAPP_NUMBER = "34675734122";
const EMAIL = "info@techzensmarthomes.com";
const CITY = "Madrid";

const navItems = [
  ["Servicios", "#servicios"],
  ["Domótica", "#domotica"],
  ["Método", "#metodo"],
  ["FAQ", "#faq"],
  ["Contacto", "#contacto"],
];

const services = [
  {
    icon: PlugZap,
    title: "Electricidad preparada para domótica",
    text: "Revisamos cuadros, líneas, conmutadas, persianas, garaje y puntos críticos para que cada instalación sea segura y escalable.",
  },
  {
    icon: CircuitBoard,
    title: "Instalación Shelly en Madrid",
    text: "Integramos relés, medidores, dimmers y módulos Shelly sin convertir tu vivienda en una obra innecesaria.",
  },
  {
    icon: Cpu,
    title: "Home Assistant bien configurado",
    text: "Creamos paneles, escenas, automatizaciones, copias de seguridad y una estructura clara para crecer sin caos.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y control remoto",
    text: "Cámaras, sensores, avisos, presencia simulada y acceso desde el móvil para saber qué pasa en casa cuando no estás.",
  },
];

const automationAreas = [
  {
    icon: Lightbulb,
    title: "Luces y ambientes",
    text: "Escenas por hora, presencia, modo noche, apagado general y control por Siri, Apple Home o Home Assistant.",
  },
  {
    icon: Home,
    title: "Persianas, puerta y garaje",
    text: "Control local y remoto con reglas por amanecer, temperatura, seguridad o rutinas familiares.",
  },
  {
    icon: BatteryCharging,
    title: "Consumo eléctrico",
    text: "Medición por circuitos, alertas de picos, históricos y decisiones prácticas para reducir gasto energético.",
  },
  {
    icon: ThermometerSun,
    title: "Clima y eficiencia",
    text: "Automatizaciones de calefacción, aire acondicionado y ventilación para ganar confort sin disparar la factura.",
  },
];

const cases = [
  "Piso en Madrid con apagado general, control de luces y escenas para noche, trabajo y vacaciones.",
  "Chalet con garaje, cámaras, sensores de apertura, persianas y avisos inteligentes al móvil.",
  "Vivienda con Home Assistant, Shelly y Apple Home para controlar todo con Siri sin perder control local.",
];

const method = [
  ["1", "Diagnóstico", "Escuchamos qué quieres conseguir y revisamos instalación eléctrica, WiFi, cuadro y dispositivos existentes."],
  ["2", "Propuesta clara", "Te damos una solución por fases, con prioridades, materiales recomendados y presupuesto transparente."],
  ["3", "Instalación cuidada", "Montamos, configuramos, probamos y documentamos para que la domótica quede estable y entendible."],
  ["4", "Entrega y soporte", "Te enseñamos a usarlo, dejamos copias básicas y podemos acompañarte en futuras ampliaciones."],
];

const faqs = [
  {
    q: "¿Trabajáis solo en Madrid?",
    a: `La base está en ${CITY}. Podemos valorar trabajos en la Comunidad de Madrid según alcance, disponibilidad y tipo de instalación.`,
  },
  {
    q: "¿Necesito hacer obra para tener una casa inteligente?",
    a: "No siempre. Muchas mejoras con Shelly, sensores y Home Assistant pueden hacerse aprovechando mecanismos y cableado existentes.",
  },
  {
    q: "¿Funciona si se cae Internet?",
    a: "Diseñamos con prioridad local cuando es posible. Home Assistant y muchos dispositivos Shelly pueden seguir funcionando dentro de casa.",
  },
  {
    q: "¿Puedo usar Siri o Apple Home?",
    a: "Sí. Podemos integrar automatizaciones con Apple Home, Siri y Home Assistant para que tengas control cómodo sin perder flexibilidad.",
  },
];

function App() {
  const phoneHref = `tel:${PHONE_NUMBER.replaceAll(" ", "")}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola TechZen Smart Homes, quiero pedir presupuesto para electricidad y domótica en Madrid.",
  )}`;
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent("Solicitud de presupuesto TechZen Smart Homes")}`;

  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
          <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
          <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" aria-hidden="true" />
          <div className="container relative grid gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28">
            <div className="max-w-3xl">
              <p className="eyebrow"><Sparkles size={16} /> Domótica y electricidad inteligente en Madrid</p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Seas donde seas, tu casa siempre cerca.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                En TechZen Smart Homes diseñamos e instalamos soluciones profesionales de electricidad, Home Assistant, Shelly, Apple Home, cámaras, sensores y automatizaciones para viviendas más seguras, cómodas y eficientes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="#contacto">
                  Pedir presupuesto <ArrowRight size={18} />
                </a>
                <a className="btn-secondary" href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} /> Hablar por WhatsApp
                </a>
                <a className="btn-ghost" href={phoneHref}>
                  <Phone size={18} /> Llamar ahora
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {["Control local y remoto", "Instalación limpia", "Soluciones por fases"].map((item) => (
                  <div className="mini-proof" key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="device-panel" role="img" aria-label="Panel domótico con luces, seguridad, consumo eléctrico y automatizaciones de una vivienda inteligente">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm text-slate-400">TechZen Control</p>
                    <h2 className="text-2xl font-semibold">Casa conectada</h2>
                  </div>
                  <div className="rounded-full border border-cyan/40 bg-cyan/10 p-3 text-cyan">
                    <Activity size={24} />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Metric icon={Lightbulb} label="Luces" value="Escena noche" />
                  <Metric icon={LockKeyhole} label="Seguridad" value="Armada" />
                  <Metric icon={Zap} label="Consumo" value="2.1 kW" />
                  <Metric icon={Camera} label="Cámaras" value="Online" />
                </div>
                <div className="mt-6 rounded-2xl border border-cyan/20 bg-cyan/5 p-5">
                  <div className="flex items-center gap-3 text-cyan">
                    <Cpu size={20} />
                    <span className="font-medium">Automatización activa</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Si no hay presencia y el consumo baja, apagar luces, activar vigilancia y enviar aviso al móvil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="servicios" eyebrow="Servicios" title="Electricidad y domótica con criterio profesional" intro="No se trata de llenar la casa de dispositivos. Se trata de que todo funcione de forma fiable, segura y sencilla para el día a día.">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} {...service} />
            ))}
          </div>
        </Section>

        <Section id="domotica" eyebrow="Domótica" title="Tu vivienda conectada, sin perder el control" intro="Integramos tecnologías abiertas y dispositivos probados para que puedas controlar, automatizar y medir lo importante desde una interfaz clara.">
          <div className="grid gap-5 md:grid-cols-2">
            {automationAreas.map((area) => (
              <Card key={area.title} {...area} large />
            ))}
          </div>
        </Section>

        <section className="band">
          <div className="container grid gap-8 lg:grid-cols-3">
            <FeatureBlock
              id="home-assistant"
              icon={Cpu}
              title="Home Assistant Madrid"
              text="Instalamos y configuramos Home Assistant para centralizar luces, persianas, sensores, consumo, cámaras y asistentes de voz. Dejamos paneles útiles, automatizaciones comprensibles y una base preparada para crecer."
            />
            <FeatureBlock
              id="shelly"
              icon={CircuitBoard}
              title="Shelly sin complicaciones"
              text="Shelly permite modernizar muchas viviendas manteniendo mecanismos habituales. Elegimos módulos adecuados, revisamos cargas, cableado y seguridad, y documentamos la instalación."
            />
            <FeatureBlock
              id="seguridad"
              icon={ShieldCheck}
              title="Seguridad y eficiencia"
              text="Combinamos sensores, cámaras, avisos y medición eléctrica para que la vivienda sea más cómoda, eficiente y vigilada sin convertirla en un sistema difícil de mantener."
            />
          </div>
        </section>

        <Section id="casos" eyebrow="Casos tipo" title="Soluciones reales para viviendas reales" intro="Cada casa tiene prioridades distintas. Por eso planteamos instalaciones por fases, empezando por lo que más valor aporta.">
          <div className="grid gap-5 lg:grid-cols-3">
            {cases.map((item, index) => (
              <div className="case-card" key={item}>
                <span>0{index + 1}</span>
                <h3>{["Piso inteligente", "Chalet seguro", "Ecosistema Apple"][index]}</h3>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="metodo" eyebrow="Método de trabajo" title="Un proceso claro desde la primera visita" intro="Queremos que sepas qué se va a instalar, por qué tiene sentido y cómo vas a usarlo después.">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {method.map(([number, title, text]) => (
              <div className="step-card" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" eyebrow="Preguntas frecuentes" title="Dudas habituales antes de automatizar una vivienda">
          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </Section>

        <section id="contacto" className="contact-section">
          <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow"><MapPin size={16} /> {CITY}, España</p>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Pide presupuesto para tu instalación domótica</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Cuéntanos qué quieres controlar, qué problemas quieres resolver y en qué punto está tu instalación. Te orientaremos con una propuesta práctica para empezar con buen pie.
              </p>
            </div>
            <div className="contact-card">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="contact-action">
                <MessageCircle size={22} />
                <span><strong>Hablar por WhatsApp</strong><small>{PHONE_NUMBER}</small></span>
              </a>
              <a href={phoneHref} className="contact-action">
                <Phone size={22} />
                <span><strong>Llamar ahora</strong><small>{PHONE_NUMBER}</small></span>
              </a>
              <a href={mailHref} className="contact-action">
                <Mail size={22} />
                <span><strong>Enviar email</strong><small>{EMAIL}</small></span>
              </a>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                Datos temporales listos para cambiar por tu teléfono, WhatsApp, correo corporativo, dominio final y logo definitivo.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}logo.svg`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="TechZen Smart Homes inicio">
          <img src={logoSrc} alt="Logo de TechZen Smart Homes" className="h-11 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
          {navItems.map(([label, href]) => (
            <a className="transition hover:text-cyan" href={href} key={label}>{label}</a>
          ))}
        </nav>
        <a className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cyan lg:inline-flex" href="#contacto">
          Pedir presupuesto
        </a>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <nav className="container grid gap-2 border-t border-white/10 pb-5 pt-3 text-sm font-medium text-slate-200 lg:hidden">
          {navItems.map(([label, href]) => (
            <a className="rounded-xl px-3 py-3 hover:bg-white/10" href={href} key={label} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="rounded-xl bg-cyan px-3 py-3 font-semibold text-ink" href="#contacto" onClick={() => setOpen(false)}>
            Pedir presupuesto
          </a>
        </nav>
      )}
    </header>
  );
}

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow"><Zap size={16} /> {eyebrow}</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-lg leading-8 text-slate-300">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, text, large = false }) {
  return (
    <article className={`smart-card ${large ? "smart-card-large" : ""}`}>
      <div className="icon-wrap"><Icon size={24} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function FeatureBlock({ id, icon: Icon, title, text }) {
  return (
    <article id={id} className="feature-block">
      <Icon size={30} />
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

function Metric({ icon: Icon, label, value }) {
  return (
    <div className="metric">
      <Icon size={20} />
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}logo.svg`;

  return (
    <footer className="border-t border-white/10 bg-[#050810] py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <img src={logoSrc} alt="Logo de TechZen Smart Homes" className="h-12 w-auto" />
          <p className="mt-3 text-sm text-slate-400">Electricidad, domótica y automatización de viviendas en Madrid.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <a href={`tel:${PHONE_NUMBER.replaceAll(" ", "")}`}>{PHONE_NUMBER}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span>{CITY}, España</span>
        </div>
      </div>
    </footer>
  );
}

export default App;
