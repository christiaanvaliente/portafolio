import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
    id: 1,
    title: "Líder Tecnológico de Proyecto - Proyecto Humedal",
    subtitle: "AIEP, Municipalidad, ONG y empresa privada",
    description:
      "Encargado del desarrollo de una plataforma web educativa e informativa para la conservación de un humedal urbano. Lidero el diseño, arquitectura y despliegue del sistema junto a estudiantes de programación y ciberseguridad, integrando sensores IoT, indicadores medioambientales y contenido accesible.",
    date: "Julio 2025",
  }, 
  {
    id: 2,
    title: "Docente de Programación y Análisis de Sistemas",
    subtitle: "Instituto Profesional AIEP",
    description:
      "Diseño e imparto clases para carreras técnicas e ingenieriles, enfocándome en principios de desarrollo profesional como Clean Code, SOLID y patrones de diseño. Guío a los estudiantes en la implementación de soluciones funcionales, robustas y mantenibles.",
    date: "Marzo 2025",
  },
  {
    id: 3,
    title: "Líder Tecnológico de Proyecto - Logística Sustentable",
    subtitle: "Instituto AIEP & SERCOTEC",
    description:
      "Responsable del desarrollo e implementación del software de gestión logística para pymes. Coordinación de estudiantes de distintas carreras, planificación técnica, capacitación y acompañamiento en cada etapa del SDCL hasta su implementación en terreno.",
    date: "Agosto 2024",
    
  },
  {
    id: 4,
    title: "Docente de Programación y Análisis de Sistemas",
    subtitle: "Instituto Profesional AIEP",
    description:
      "Diseño e imparto clases para carreras técnicas e ingenieriles, enfocándome en principios de desarrollo profesional como Clean Code, SOLID y patrones de diseño. Guío a los estudiantes en la implementación de soluciones funcionales, robustas y mantenibles.",
    date: "Marzo 2024",
  },  
  {
    id: 5,
    title: "Desarrollador Web Freelance",
    subtitle: "Independiente",
    description:
      "Encargado del levantamiento de requerimientos, diseño e implementación de sitios web a medida para clientes individuales y pequeñas empresas. Enfoque en usabilidad, rendimiento y adaptabilidad.",
    date: "Marzo 2023",
  },
  {
    id: 6,
    title: "Técnico de Soporte Informático",
    subtitle: "Instituto Profesional AIEP",
    description:
      "Responsable del diagnóstico, reparación y mantenimiento de equipos. Soporte a usuarios en modalidad presencial y remota, optimización de redes internas y continuidad operativa de servicios institucionales.",
    date: "Oct 2014",
  },
  {
    id: 7,
    title: "Encargado de Activos",
    subtitle: "Convenio de Cierre Universidad del Mar",
    description:
      "Gestión y seguimiento del inventario físico y digital de activos de la institución. Apoyo en procesos de cierre administrativo y auditorías externas.",
    date: "Mayo 2013",
  },
  {
    id: 8,
    title: "Analista Académico",
    subtitle: "Universidad del Mar",
    description:
      "Desarrollo de reportes, consultas SQL y análisis de datos académicos. Soporte a equipos administrativos para la toma de decisiones y mejora de indicadores institucionales.",
    date: "Abril 2013",
  },
];


export const dataCounter = [
  {
    id: 0,
    endCounter: 25,
    text: "Proyectos desarrollados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 12,
    text: "Años en tecnología",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 15,
    text: "Instituciones apoyadas",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 3,
    text: "Premios y reconocimientos",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Automatización de procesos",
    description: "Desarrollo e implementación de herramientas que permiten realizar labores desde script",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  }
  
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];