export const COMPANY = {
  legalName: "Vargas Trade LLC",
  shortName: "Vargas Trade",
  city: "Miami",
  state: "Florida",
  country: "Estados Unidos",
  location: "Miami, Florida, Estados Unidos",
  email: "informacion@vargastrade.com",
  domain: "[AGREGAR DOMINIO]",
  hours: "Lunes a viernes de 9:00 a. m. a 6:00 p. m. y sábados de 9:00 a. m. a 2:00 p. m.",
} as const;

export const SITE_URL = "https://www.vargastrade.com";

export const LEGAL_LAST_UPDATED = "15 de julio de 2026";

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Áreas de actividad", href: "/actividades" },
  { label: "Cómo operamos", href: "/#como-operamos" },
  { label: "Principios", href: "/#principios" },
  { label: "Contacto", href: "/contacto" },
];

export const FOOTER_LINKS = {
  empresa: [
    { label: "Nosotros", href: "/nosotros" },
    { label: "Áreas de actividad", href: "/actividades" },
    { label: "Cómo operamos", href: "/#como-operamos" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Términos de uso", href: "/terminos" },
    { label: "Política de cookies", href: "/cookies" },
    { label: "Aviso legal", href: "/aviso-legal" },
  ],
};

/* ---------------------------------------------------------------- */
/* Home — Hero                                                       */
/* ---------------------------------------------------------------- */
export const HERO = {
  title: "Comercio digital con una visión global",
  subtitle:
    "En Vargas Trade LLC desarrollamos y gestionamos operaciones de comercio electrónico orientadas a conectar productos de consumo con clientes a través de canales digitales.",
  support:
    "Trabajamos con proveedores y operadores externos para coordinar procesos comerciales, abastecimiento y cumplimiento de pedidos.",
  primaryCta: { label: "Conocer nuestra empresa", href: "/nosotros" },
  secondaryCta: { label: "Contactar", href: "/contacto" },
};

/* ---------------------------------------------------------------- */
/* Home — Franja de confianza                                        */
/* ---------------------------------------------------------------- */
export const TRUST_STRIP = [
  "Empresa constituida en Florida",
  "Operaciones de comercio electrónico",
  "Coordinación con proveedores",
  "Presencia corporativa en Miami",
];

/* ---------------------------------------------------------------- */
/* Home — Quiénes somos                                              */
/* ---------------------------------------------------------------- */
export const ABOUT_SECTION = {
  eyebrow: "01",
  title: "Una empresa creada para operar en el entorno digital",
  body: "Vargas Trade LLC es una empresa constituida en Florida que desarrolla actividades relacionadas con el comercio electrónico, la comercialización digital y la coordinación de operaciones con proveedores externos.",
  complement:
    "Nuestro enfoque combina organización, análisis comercial, atención al cliente y gestión de procesos digitales para desarrollar operaciones claras, responsables y adaptables.",
  highlight:
    "Trabajamos bajo una estructura flexible que nos permite evaluar productos, colaborar con proveedores y operar mediante canales online.",
};

/* ---------------------------------------------------------------- */
/* Home — Áreas de actividad                                         */
/* ---------------------------------------------------------------- */
export const ACTIVITY_CARDS = [
  {
    number: "01",
    title: "Comercio electrónico",
    description:
      "Gestión de canales digitales orientados a la presentación y comercialización de productos de consumo.",
  },
  {
    number: "02",
    title: "Selección de productos",
    description:
      "Evaluación de categorías, proveedores y oportunidades comerciales para mercados digitales.",
  },
  {
    number: "03",
    title: "Coordinación con proveedores",
    description:
      "Colaboración con proveedores externos para apoyar procesos de abastecimiento, procesamiento y preparación de pedidos.",
  },
  {
    number: "04",
    title: "Operaciones digitales",
    description:
      "Organización de procesos comerciales, seguimiento de pedidos, soporte y comunicación con clientes.",
  },
];

/* ---------------------------------------------------------------- */
/* Home — Cómo operamos                                              */
/* ---------------------------------------------------------------- */
export const OPERATION_STAGES = [
  {
    number: "01",
    title: "Análisis de oportunidades",
    description:
      "Evaluamos categorías, comportamiento de mercado y oportunidades de comercialización mediante canales digitales.",
  },
  {
    number: "02",
    title: "Selección y coordinación",
    description:
      "Trabajamos con proveedores externos según disponibilidad, condiciones y capacidad operativa.",
  },
  {
    number: "03",
    title: "Comercialización digital",
    description:
      "Presentamos productos mediante tiendas online, plataformas y otros canales digitales.",
  },
  {
    number: "04",
    title: "Procesamiento y seguimiento",
    description:
      "Coordinamos el procesamiento de pedidos, la atención al cliente y el seguimiento de cada operación.",
  },
];

/* ---------------------------------------------------------------- */
/* Home — Modelo de operación                                        */
/* ---------------------------------------------------------------- */
export const OPERATION_MODEL = {
  title: "Un modelo digital y flexible",
  body: "Vargas Trade LLC opera mediante un modelo basado en canales digitales, colaboración con proveedores y coordinación con operadores externos.",
  columns: [
    {
      title: "Canales digitales",
      description:
        "Utilizamos medios digitales para presentar, promocionar y gestionar operaciones comerciales.",
    },
    {
      title: "Proveedores externos",
      description:
        "Colaboramos con proveedores que apoyan el abastecimiento y procesamiento de productos.",
    },
    {
      title: "Gestión centralizada",
      description:
        "Coordinamos atención, seguimiento y procesos administrativos desde una estructura centralizada.",
    },
  ],
  note: "La disponibilidad de productos, los tiempos de procesamiento y la entrega pueden depender de proveedores y operadores logísticos externos.",
};

/* ---------------------------------------------------------------- */
/* Home — Principios corporativos                                    */
/* ---------------------------------------------------------------- */
export const PRINCIPLES = [
  {
    title: "Transparencia comercial",
    description:
      "Comunicamos de manera clara las condiciones, procesos y características relevantes de cada operación.",
  },
  {
    title: "Responsabilidad operativa",
    description:
      "Asumimos con seriedad cada proceso, desde la evaluación de productos hasta el seguimiento de pedidos.",
  },
  {
    title: "Orientación al cliente",
    description:
      "Priorizamos la claridad y la atención en cada punto de contacto con clientes y proveedores.",
  },
  {
    title: "Protección de datos",
    description:
      "Gestionamos la información de contacto con criterios de seguridad y confidencialidad.",
  },
  {
    title: "Mejora continua",
    description:
      "Revisamos nuestros procesos digitales para adaptarlos a las condiciones del mercado.",
  },
  {
    title: "Relaciones responsables con proveedores",
    description:
      "Coordinamos con proveedores externos bajo criterios de organización y cumplimiento.",
  },
];

/* ---------------------------------------------------------------- */
/* Home — Por qué Vargas Trade                                       */
/* ---------------------------------------------------------------- */
export const WHY_US = {
  title: "Una estructura pensada para el comercio digital",
  intro:
    "Construimos nuestra actividad alrededor de procesos claros, herramientas digitales y relaciones comerciales responsables.",
  points: [
    "Enfoque en operaciones online",
    "Coordinación con proveedores externos",
    "Procesos organizados",
    "Presencia empresarial en Florida",
  ],
};

/* ---------------------------------------------------------------- */
/* Home — Presencia corporativa                                      */
/* ---------------------------------------------------------------- */
export const CORPORATE_PRESENCE = {
  title: "Presencia corporativa",
  body: "Vargas Trade LLC es una compañía de responsabilidad limitada constituida en el estado de Florida, Estados Unidos.",
};

/* ---------------------------------------------------------------- */
/* Home — FAQ                                                        */
/* ---------------------------------------------------------------- */
export const FAQ = [
  {
    question: "¿A qué se dedica Vargas Trade LLC?",
    answer:
      "Vargas Trade LLC desarrolla actividades relacionadas con el comercio electrónico, la comercialización de productos mediante canales digitales y la coordinación de operaciones con proveedores externos.",
  },
  {
    question: "¿Dónde está constituida la empresa?",
    answer: "La empresa está constituida en el estado de Florida, Estados Unidos.",
  },
  {
    question: "¿Vargas Trade LLC trabaja con proveedores externos?",
    answer:
      "Sí. La empresa puede colaborar con proveedores y operadores externos para apoyar procesos de abastecimiento, procesamiento y cumplimiento de pedidos.",
  },
  {
    question: "¿Vargas Trade LLC vende directamente al público?",
    answer:
      "La empresa puede comercializar productos mediante tiendas y canales digitales, dependiendo de cada operación o marca gestionada.",
  },
  {
    question: "¿Cómo puedo contactar con la empresa?",
    answer:
      "Puedes utilizar el formulario de contacto o escribir al correo corporativo indicado en esta página.",
  },
  {
    question: "¿Dónde opera la empresa?",
    answer:
      "La empresa desarrolla sus operaciones mediante canales digitales y puede trabajar con proveedores y clientes en distintos mercados.",
  },
];

/* ---------------------------------------------------------------- */
/* Home — CTA final                                                  */
/* ---------------------------------------------------------------- */
export const FINAL_CTA = {
  title: "Conversemos sobre oportunidades comerciales",
  body: "Para consultas corporativas, comerciales o relacionadas con proveedores, puedes comunicarte con nuestro equipo mediante el formulario de contacto.",
  cta: { label: "Contactar con Vargas Trade LLC", href: "/contacto" },
};

/* ---------------------------------------------------------------- */
/* Página Nosotros                                                   */
/* ---------------------------------------------------------------- */
export const ABOUT_PAGE = {
  heroTitle: "Conoce Vargas Trade LLC",
  heroText:
    "Una empresa de comercio digital orientada a desarrollar operaciones claras, flexibles y responsables.",
  intro:
    "Vargas Trade LLC fue constituida en Florida con el propósito de desarrollar actividades comerciales mediante canales digitales. Nuestra estructura permite evaluar oportunidades, coordinar relaciones con proveedores y administrar procesos relacionados con la comercialización online.",
  mission:
    "Desarrollar operaciones de comercio electrónico mediante procesos organizados, comunicación clara y colaboración responsable con proveedores.",
  vision:
    "Construir una empresa digital sólida, adaptable y orientada a relaciones comerciales sostenibles.",
  values: [
    "Transparencia",
    "Responsabilidad",
    "Adaptabilidad",
    "Organización",
    "Enfoque digital",
    "Compromiso con el cliente",
  ],
};

/* ---------------------------------------------------------------- */
/* Página Áreas de actividad                                         */
/* ---------------------------------------------------------------- */
export const ACTIVITIES_PAGE = {
  heroTitle: "Áreas de actividad",
  heroText:
    "Desarrollamos procesos orientados a la comercialización digital y a la coordinación eficiente de operaciones online.",
  sections: [
    {
      title: "Comercio electrónico",
      description:
        "Gestión de canales digitales orientados a la presentación y comercialización de productos de consumo.",
      scope:
        "Incluye la administración de tiendas y plataformas digitales utilizadas para comercializar productos.",
      process:
        "Presentación de productos, gestión de contenido comercial y actualización continua de los canales digitales.",
    },
    {
      title: "Investigación de productos",
      description:
        "Evaluación de categorías, tendencias y oportunidades comerciales para mercados digitales.",
      scope:
        "Análisis de productos de consumo con potencial de comercialización a través de canales online.",
      process:
        "Revisión de categorías, comparación de opciones y selección de productos con criterios comerciales claros.",
    },
    {
      title: "Selección de proveedores",
      description:
        "Evaluación y coordinación con proveedores externos según disponibilidad y capacidad operativa.",
      scope:
        "Relación con proveedores que apoyan el abastecimiento y procesamiento de productos comercializados.",
      process:
        "Evaluación de condiciones, coordinación de disponibilidad y seguimiento de la relación comercial.",
    },
    {
      title: "Coordinación operativa",
      description:
        "Organización de procesos internos relacionados con la gestión de pedidos y operaciones comerciales.",
      scope:
        "Coordinación entre los distintos procesos que intervienen en una operación de comercio electrónico.",
      process:
        "Seguimiento de cada etapa, desde la comercialización hasta el procesamiento de pedidos.",
    },
    {
      title: "Atención y seguimiento",
      description:
        "Comunicación con clientes y seguimiento de sus consultas y operaciones comerciales.",
      scope: "Atención general relacionada con consultas comerciales y de proveedores.",
      process:
        "Recepción de consultas mediante el formulario de contacto y seguimiento de cada caso.",
    },
    {
      title: "Gestión de canales digitales",
      description:
        "Administración de los medios digitales utilizados para desarrollar la actividad comercial.",
      scope:
        "Uso de canales digitales como tiendas online y plataformas de comercialización.",
      process:
        "Mantenimiento, actualización y coordinación de los canales digitales de la empresa.",
    },
  ],
};

/* ---------------------------------------------------------------- */
/* Página Contacto                                                   */
/* ---------------------------------------------------------------- */
export const CONTACT_PAGE = {
  title: "Contacto corporativo",
  text: "Utiliza este formulario para consultas comerciales, proveedores, colaboraciones o información general.",
  reasonOptions: [
    { value: "consulta-comercial", label: "Consulta comercial" },
    { value: "proveedores", label: "Proveedores" },
    { value: "colaboraciones", label: "Colaboraciones" },
    { value: "atencion-general", label: "Atención general" },
    { value: "otro", label: "Otro" },
  ],
};

/* ---------------------------------------------------------------- */
/* Metadata                                                           */
/* ---------------------------------------------------------------- */
export const SEO_DEFAULT = {
  title: "Vargas Trade LLC | Comercio electrónico y operaciones digitales",
  description:
    "Vargas Trade LLC es una empresa constituida en Florida dedicada al comercio electrónico, la comercialización digital y la coordinación de operaciones con proveedores.",
  keywords: [
    "Vargas Trade LLC",
    "comercio electrónico",
    "empresa en Florida",
    "ecommerce",
    "operaciones digitales",
    "proveedores",
    "comercio digital",
    "Miami",
  ],
};
