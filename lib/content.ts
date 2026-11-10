export type Lang = "pt" | "en";

export const LANGS: Lang[] = ["pt", "en"];

/** Caminho da versão do site em cada idioma. */
export const PATHS: Record<Lang, string> = { pt: "/", en: "/en" };

export const STUDIO = {
  name: "AGES Creative Studio",
  email: "adm.agesstudio@gmail.com",
  instagram: "ages.creativestudio",
  instagramUrl: "https://instagram.com/ages.creativestudio",
  site: "https://agesstudio.com.br",
} as const;

/** Formulário de orçamento do Google, um por idioma. */
export const QUOTE_FORM: Record<Lang, string> = {
  pt: "https://docs.google.com/forms/d/e/1FAIpQLSetXHPZikXkU87zTf8pSi6-D37Wsf2NUFM_oo9FKKUgGdL4UQ/viewform",
  en: "https://docs.google.com/forms/d/e/1FAIpQLSf0jb8tEqJvzuaa5LOuEdJGiyA6zW5f3TgvtOEhitaSmmEfWQ/viewform",
};

/** Sócias, na ordem em que aparecem. Sem `linkedin`, o nome aparece sem link. */
export const PARTNERS: { name: string; linkedin?: string }[] = [
  { name: "Amanda Guerses", linkedin: "https://www.linkedin.com/in/amandaguerses/" },
  { name: "Eduarda Saldanha", linkedin: "https://www.linkedin.com/in/eduardaseverosaldanha/" },
  { name: "Eduarda Baptista" },
];

export type ProjectImage = { src: string; alt: string; wide?: boolean };

export type Project = {
  slug: string;
  index: string;
  title: string;
  meta: string;
  location: string;
  scope: string[];
  body: string;
  cover: string;
  images: ProjectImage[];
};

export type Step = { n: string; title: string; body: string; items: string[] };

export type Dictionary = {
  lang: Lang;
  htmlLang: string;
  label: string;
  city: string;
  meta: { title: string; description: string; keywords: string[] };
  nav: { studio: string; services: string; process: string; works: string; team: string; cta: string };
  hero: {
    line1: string;
    line2: string;
    line2Accent: string;
    statement: string;
    statementStrong: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  marquee: string[];
  about: {
    title: string;
    p1Strong: string;
    p1: string;
    p2: string;
    p3: string;
    p4Lead: string;
    p4StrongA: string;
    p4Mid: string;
    p4StrongB: string;
    caption: string;
  };
  services: { eyebrow: string; text: string };
  process: { eyebrow: string; title: string; intro: string; steps: Step[] };
  works: { eyebrow: string; title: string; intro: string; view: string; project: string; items: Project[] };
  team: { eyebrow: string; title: string; intro: string };
  fit: { title: string; items: string[] };
  footer: { cta: string; ctaAccent: string; email: string; instagram: string; base: string; rights: string };
};

// ─── Imagens: compartilhadas entre os idiomas, com alt traduzido ───────────
const NOTION_IMAGES = (alt: string[]): ProjectImage[] => [
  { src: "/portfolio/notion-01.jpg", alt: alt[0], wide: true },
  { src: "/portfolio/notion-02.jpg", alt: alt[1], wide: true },
];

const OPEN_IMAGES = (alt: string[]): ProjectImage[] => [
  { src: "/portfolio/open-party-01.jpg", alt: alt[0], wide: true },
  { src: "/portfolio/open-party-02.jpg", alt: alt[1], wide: true },
  { src: "/portfolio/open-playroom-01.jpg", alt: alt[2], wide: true },
  { src: "/portfolio/open-playroom-02.jpg", alt: alt[3], wide: true },
  { src: "/portfolio/open-teens.jpg", alt: alt[4] },
];

const CABANA_IMAGES = (alt: string[]): ProjectImage[] => [
  { src: "/portfolio/cabana06-01.jpg", alt: alt[0] },
  { src: "/portfolio/cabana06-02.jpg", alt: alt[1] },
  { src: "/portfolio/cabana06-03.jpg", alt: alt[2] },
  { src: "/portfolio/cabana06-exec-01.jpg", alt: alt[3] },
  { src: "/portfolio/cabana06-exec-02.jpg", alt: alt[4] },
  { src: "/portfolio/cabana06-exec-03.jpg", alt: alt[5] },
];

const APT_IMAGES = (alt: string[]): ProjectImage[] => [
  { src: "/portfolio/apt2507-office.jpg", alt: alt[0] },
  { src: "/portfolio/apt2507-living-02.jpg", alt: alt[1] },
  { src: "/portfolio/apt2507-living-01.jpg", alt: alt[2], wide: true },
];

// ════════════════════════════════════════════════════════════════════════
//  PORTUGUÊS
// ════════════════════════════════════════════════════════════════════════
const pt: Dictionary = {
  lang: "pt",
  htmlLang: "pt-BR",
  label: "Português",
  city: "Porto Alegre, RS, Brasil",

  meta: {
    title: "AGES Creative Studio | Arquitetura, representação visual e suporte de projeto",
    description:
      "Estúdio criativo especializado em arquitetura. Renderização, projeto 3D, diagramação de pranchas e detalhamento técnico para arquitetos, escritórios e estudantes.",
    keywords: [
      "estúdio de arquitetura",
      "renderização arquitetônica",
      "projeto 3D",
      "diagramação de pranchas",
      "detalhamento de mobiliário",
      "projeto de interiores",
      "Porto Alegre",
    ],
  },

  nav: {
    studio: "Estúdio",
    services: "Serviços",
    process: "Processo",
    works: "Portfólio",
    team: "Sócias",
    cta: "Solicitar orçamento",
  },

  hero: {
    line1: "Serviços terceirizados",
    line2: "para projetos de ",
    line2Accent: "arquitetura",
    statement:
      " é um estúdio de arquitetura e design dedicado a transformar ideias em espaços bem resolvidos, funcionais e visualmente marcantes.",
    statementStrong: "AGES Creative Studio",
    ctaPrimary: "Solicitar orçamento",
    ctaSecondary: "Ver portfólio",
    scroll: "Role para conhecer",
  },

  marquee: [
    "Renderização de imagens",
    "Produção de vídeos",
    "Projeto 3D",
    "Diagramação de pranchas",
    "Detalhamento de mobiliário",
    "Plantas humanizadas",
    "Levantamento de medições",
    "Projeto de interiores",
    "Moodboards",
    "Projeto executivo",
  ],

  about: {
    title: "Olá.",
    p1Strong: "A AGES Creative Studio é um estúdio de arquitetura e design",
    p1: " dedicado a transformar ideias em espaços bem resolvidos, funcionais e visualmente marcantes.",
    p2: "Desenvolvemos projetos com soluções que unem estética, estratégia e atenção aos detalhes, sempre buscando criar ambientes autênticos e alinhados à identidade e às necessidades de cada cliente.",
    p3: "Nossa missão é conduzir cada projeto com clareza, sensibilidade e organização, acreditando que um bom design vai além da aparência: ele precisa comunicar, acolher e funcionar de forma inteligente.",
    p4Lead: "Valorizamos ",
    p4StrongA: "processos colaborativos, comunicação transparente",
    p4Mid: " e um olhar cuidadoso em cada etapa, garantindo uma experiência fluida e ",
    p4StrongB: "resultados bem executados.",
    caption: "Amanda, Eduarda B e Eduarda S, as sócias da AGES Creative Studio.",
  },

  services: {
    eyebrow: "O nosso serviço",
    text: "A AGES se especializou em projetos de alto padrão, desenvolvidos em parceria com grandes construtoras, escritórios de arquitetura e empresas que levam suas marcas a eventos e convenções. Da arquitetura de interiores à arquitetura efêmera, criamos espaços que traduzem a identidade de cada cliente com estratégia, precisão e um olhar cuidadoso em cada detalhe.",
  },

  process: {
    eyebrow: "Arquitetura de interiores",
    title: "Como trabalhamos, etapa por etapa.",
    intro:
      "Nosso processo é pensado para trazer clareza, segurança e tranquilidade. Na AGES, o cliente sabe exatamente onde está, o que está sendo desenvolvido e para onde o projeto está indo, do primeiro encontro à entrega final.",
    steps: [
      {
        n: "01",
        title: "Reunião inicial e briefing",
        body: "Uma conversa detalhada onde compreendemos seus objetivos e sonhos em forma de espaço, além de rotina, referências estéticas, orçamento e prazos.",
        items: ["Reunião com o cliente", "Levantamento de necessidades", "Definição de objetivos e prioridades"],
      },
      {
        n: "02",
        title: "Visita técnica e medição",
        body: "Após a aprovação do briefing, conhecemos o espaço, entendemos suas condições reais e realizamos a medição completa do ambiente.",
        items: ["Visita ao local", "Medição técnica", "Registro fotográfico", "Análise das condições existentes"],
      },
      {
        n: "03",
        title: "Estudo de layout e conceito",
        body: "Definimos a organização dos ambientes, fluxos, setorização e a linguagem estética que irá guiar todo o projeto.",
        items: ["Propostas de layout", "Direção estética e conceitual", "Moodboards e referências", "Primeira validação"],
      },
      {
        n: "04",
        title: "Projeto 3D e visualização",
        body: "Transformamos o conceito aprovado em modelos tridimensionais e imagens realistas: materiais, cores, iluminação e volumes antes da execução.",
        items: ["Modelagem 3D", "Renderizações", "Ajustes conforme feedback", "Aprovação do conceito final"],
      },
      {
        n: "05",
        title: "Projeto executivo e detalhamento",
        body: "Todo o detalhamento técnico necessário para a execução da obra: desenhos, especificações e orientações para fornecedores e equipes.",
        items: ["Plantas técnicas", "Detalhamento de marcenaria", "Especificação de materiais", "Iluminação e paginações"],
      },
      {
        n: "06",
        title: "Suporte técnico",
        body: "Durante a execução, oferecemos suporte técnico para esclarecer dúvidas, alinhar fornecedores e garantir que o projeto seja executado conforme o planejado.",
        items: ["Suporte a fornecedores", "Compatibilização de informações", "Visitas técnicas conforme escopo"],
      },
    ],
  },

  works: {
    eyebrow: "Portfólio",
    title: "Projetos selecionados.",
    intro:
      "Do residencial ao efêmero, projetos que unem estratégia e cuidado em cada detalhe. Clique em um projeto para ver as imagens.",
    view: "Ver",
    project: "Projeto",
    items: [
      {
        slug: "notion-house",
        index: "01",
        title: "Notion House",
        meta: "Ativação de marca, arquitetura efêmera",
        location: "Cidade do México, México",
        scope: ["Arquitetura efêmera", "Experiência de marca", "Jornada do visitante"],
        body: "Colaboramos com a Notion na Mexico Tech Week 2026, criando uma experiência de marca interativa dentro da Founders & Investors House, na Cidade do México. Desenvolvemos um espaço que refletisse a identidade da Notion e convidasse os visitantes a explorar, interagir e se conectar. Com uma jornada pensada para o visitante, o estande reuniu instalações da marca, uma estação de snacks e brindes e atividades interativas em que cada convidado podia criar a sua própria Notion face. Unindo elementos lúdicos, design funcional e uma linguagem visual contemporânea, demos vida à marca e celebramos um novo capítulo da AGES no cenário internacional.",
        cover: "/portfolio/notion-01.jpg",
        images: NOTION_IMAGES([
          "Entrada do espaço da Notion na Mexico Tech Week com painel de boas-vindas",
          "Instalações da marca Notion com cubos e quadro interativo",
        ]),
      },
      {
        slug: "open-apartments",
        index: "02",
        title: "Open Apartments",
        meta: "Áreas comuns de condomínio",
        location: "Residencial",
        scope: ["Salões de festas", "Brinquedoteca", "Espaço teens e coworking"],
        body: "Para este condomínio residencial, projetamos as áreas comuns como ambientes convidativos, que estimulam a convivência, a criatividade e as experiências do dia a dia. O projeto contemplou dois salões de festas, uma brinquedoteca e um espaço teens e coworking, cada um desenvolvido para equilibrar funcionalidade e uma atmosfera lúdica e contemporânea. Com uma abordagem de design moderna, layouts dinâmicos e materiais e cores cuidadosamente selecionados, criamos espaços vibrantes, flexíveis e acolhedores para moradores de todas as idades.",
        cover: "/portfolio/open-party-01.jpg",
        images: OPEN_IMAGES([
          "Salão de festas 01 com mesas de jantar, cozinha e estar",
          "Salão de festas 02 com estar, ilha e mesa compartilhada",
          "Brinquedoteca com piscina de bolinhas, casinha e mesa infantil",
          "Vista da brinquedoteca com escorregador e estante de livros",
          "Espaço teens com letreiro neon OPEN e sofá",
        ]),
      },
      {
        slug: "cabana-06",
        index: "03",
        title: "Cabana 06",
        meta: "Cabana",
        location: "Nova Petrópolis, Brasil",
        scope: ["Concepção de ambiente", "Modelagem 3D", "Detalhamento de marcenaria", "Imagens", "Projeto executado"],
        body: "Neste projeto, exploramos os detalhes como forma de comunicar a funcionalidade, a materialidade e a experiência proposta para cada ambiente. Na Cabana 6, o foco esteve no desenho dos móveis sob medida, pensados para unir estética, praticidade e aproveitamento inteligente do espaço. Desenvolvemos a concepção do ambiente, a modelagem 3D, o detalhamento de marcenaria e as imagens, traduzindo com precisão cada escolha de projeto e sua relação com o uso cotidiano. Primeiro, os renders entregues ao cliente para aprovação; depois, o projeto executado.",
        cover: "/portfolio/cabana06-01.jpg",
        images: CABANA_IMAGES([
          "Render da cozinha da Cabana 06 com mesa de madeira e pendentes de fibra",
          "Render da bancada e marcenaria sob medida da cozinha",
          "Render das prateleiras e utensílios da cozinha",
          "Cozinha executada da Cabana 06 com mesa de jantar e janela",
          "Marcenaria executada com geladeira e prateleiras",
          "Detalhe executado da marcenaria com relógio e bancada",
        ]),
      },
      {
        slug: "apt-2507",
        index: "04",
        title: "Apartamento 2507",
        meta: "Apartamento",
        location: "São Paulo, Brasil",
        scope: ["Home office sob medida", "Marcenaria", "Decoração", "Renderização"],
        body: "Aproveitando um nicho existente na planta original do apartamento, criamos um pequeno home office integrado ao projeto. A proposta foi transformar uma área antes subutilizada em um espaço de trabalho funcional e agradável para a rotina, com design sob medida e integração visual com o restante da área social por meio de móveis soltos. A composição decorativa reforça a ideia de que até os menores espaços ganham um novo significado quando projetados com intenção.",
        cover: "/portfolio/apt2507-office.jpg",
        images: APT_IMAGES([
          "Home office sob medida no nicho do Apartamento 2507",
          "Sala de estar com sofá verde e vista para a cidade",
          "Painel da TV com prateleiras e cozinha em madeira",
        ]),
      },
    ],
  },

  team: {
    eyebrow: "Quem faz",
    title: "Três arquitetas, um estúdio.",
    intro:
      "Cada projeto nasce do encontro entre estratégia, sensibilidade e técnica. Cada escolha é intencional e cada detalhe tem propósito.",
  },

  fit: {
    title: "Somos a escolha certa se:",
    items: [
      "Você valoriza comunicação clara e colaboração ao longo do processo de design",
      "Você enxerga o design como um investimento estratégico, não apenas como uma entrega",
      "Você está aberto(a) a orientação profissional e soluções guiadas pelo design",
      "Você respeita prazos acordados e fornece feedback no tempo adequado",
      "Você busca um parceiro de design de longo prazo, não uma relação pontual",
    ],
  },

  footer: {
    cta: "Como podemos contribuir para o sucesso do seu ",
    ctaAccent: "próximo projeto?",
    email: "E-mail",
    instagram: "Instagram",
    base: "Base",
    rights: "Todos os direitos reservados.",
  },
};

// ════════════════════════════════════════════════════════════════════════
//  ENGLISH
// ════════════════════════════════════════════════════════════════════════
const en: Dictionary = {
  lang: "en",
  htmlLang: "en",
  label: "English",
  city: "Porto Alegre, RS, Brazil",

  meta: {
    title: "AGES Creative Studio | Architecture, visual representation and project support",
    description:
      "Creative studio specialised in architecture. Rendering, 3D modelling, presentation board layout and technical detailing for architects, studios and students.",
    keywords: [
      "architecture studio",
      "architectural rendering",
      "3D modelling",
      "presentation boards",
      "furniture detailing",
      "interior design",
      "Brazil",
    ],
  },

  nav: {
    studio: "Studio",
    services: "Services",
    process: "Process",
    works: "Work",
    team: "Partners",
    cta: "Request a quote",
  },

  hero: {
    line1: "Outsourcing services",
    line2: "for architecture ",
    line2Accent: "design",
    statement:
      " is an architecture and design studio dedicated to transforming ideas into well-resolved, functional, and visually striking spaces.",
    statementStrong: "AGES Creative Studio",
    ctaPrimary: "Request a quote",
    ctaSecondary: "View work",
    scroll: "Scroll to explore",
  },

  marquee: [
    "Image rendering",
    "Video production",
    "3D modelling",
    "Presentation boards",
    "Furniture detailing",
    "Rendered floor plans",
    "On-site measurement",
    "Interior design",
    "Mood boards",
    "Construction documentation",
  ],

  about: {
    title: "Hi.",
    p1Strong: "AGES Creative Studio is an architecture and design studio",
    p1: " dedicated to transforming ideas into well-resolved, functional, and visually striking spaces.",
    p2: "We develop projects with solutions that combine aesthetics, strategy, and attention to detail, always aiming to create authentic environments aligned with each client's identity and needs.",
    p3: "Our mission is to guide each project with clarity, sensitivity, and organization, believing that good design goes beyond appearance: it must communicate, welcome, and function intelligently.",
    p4Lead: "We value ",
    p4StrongA: "collaborative processes, transparent communication",
    p4Mid: ", and a careful eye at every stage, ensuring a smooth experience and ",
    p4StrongB: "well-executed results.",
    caption: "Amanda, Eduarda B and Eduarda S, the partners of AGES Creative Studio.",
  },

  services: {
    eyebrow: "Our service",
    text: "AGES specializes in high-end projects, developed in partnership with leading construction companies, architecture firms, and major brands that bring their activations to events and conventions. From interior architecture to ephemeral architecture, we create spaces that translate each client's identity with strategy, precision, and a careful eye for every detail.",
  },

  process: {
    eyebrow: "Interior architecture",
    title: "How we work, stage by stage.",
    intro:
      "Our process is designed to bring clarity, confidence and peace of mind. At AGES, the client knows exactly where things stand, what is being developed and where the project is heading, from the first meeting to final delivery.",
    steps: [
      {
        n: "01",
        title: "Kick-off meeting and brief",
        body: "A detailed conversation where we understand your goals and the space you dream of, alongside routine, aesthetic references, budget and deadlines.",
        items: ["Client meeting", "Needs assessment", "Setting goals and priorities"],
      },
      {
        n: "02",
        title: "Site visit and measurement",
        body: "Once the brief is approved, we get to know the space, understand its real conditions and carry out a full measurement survey.",
        items: ["Site visit", "Technical measurement", "Photographic record", "Analysis of existing conditions"],
      },
      {
        n: "03",
        title: "Layout study and concept",
        body: "We define the organisation of rooms, circulation, zoning and the aesthetic language that will guide the whole project.",
        items: ["Layout proposals", "Aesthetic and conceptual direction", "Mood boards and references", "First review"],
      },
      {
        n: "04",
        title: "3D design and visualisation",
        body: "We turn the approved concept into three-dimensional models and realistic images: materials, colours, lighting and volumes before anything is built.",
        items: ["3D modelling", "Renders", "Adjustments from feedback", "Final concept approval"],
      },
      {
        n: "05",
        title: "Construction documentation",
        body: "All the technical detailing needed to build: drawings, specifications and guidance for suppliers and site teams.",
        items: ["Technical drawings", "Joinery detailing", "Material specification", "Lighting and tiling layouts"],
      },
      {
        n: "06",
        title: "Technical support",
        body: "During construction we provide technical support to answer questions, align suppliers and ensure the project is built as planned.",
        items: ["Supplier support", "Reconciling information", "Site visits as agreed in scope"],
      },
    ],
  },

  works: {
    eyebrow: "Selected work",
    title: "Selected projects.",
    intro:
      "From residential to ephemeral, projects that bring together strategy and care in every detail. Click a project to see the images.",
    view: "View",
    project: "Project",
    items: [
      {
        slug: "notion-house",
        index: "01",
        title: "Notion House",
        meta: "Brand activation, ephemeral architecture",
        location: "Mexico City, Mexico",
        scope: ["Ephemeral architecture", "Brand experience", "Visitor journey"],
        body: "We collaborated with Notion at Mexico Tech Week 2026, designing an interactive brand experience within the Founders & Investors House in Mexico City. We developed a space that reflected Notion's identity while encouraging visitors to explore, interact, and connect. Through a thoughtfully designed visitor journey, the stand featured branded installations, a snacks and merchandise station, and interactive activities where guests could create their own Notion faces. Combining playful elements, functional design, and a contemporary visual approach, we brought the brand to life while celebrating a new chapter for AGES on the international stage.",
        cover: "/portfolio/notion-01.jpg",
        images: NOTION_IMAGES([
          "Entrance of the Notion space at Mexico Tech Week with a welcome panel",
          "Notion branded installations with cubes and an interactive frame",
        ]),
      },
      {
        slug: "open-apartments",
        index: "02",
        title: "Open Apartments",
        meta: "Residential complex amenities",
        location: "Residential",
        scope: ["Party rooms", "Children's playroom", "Teens and co-working space"],
        body: "For this apartment complex, we designed the shared amenity spaces to create inviting environments that encourage connection, creativity, and everyday experiences. The project included two party rooms, a children's playroom, and a teens/co-working space, each thoughtfully developed to balance functionality with a playful and contemporary atmosphere. Through a modern design approach, dynamic layouts, and carefully selected materials and colors, we created spaces that feel vibrant, flexible, and welcoming for residents of all ages.",
        cover: "/portfolio/open-party-01.jpg",
        images: OPEN_IMAGES([
          "Party room 01 with dining tables, kitchen and lounge",
          "Party room 02 with lounge, island and shared table",
          "Playroom with ball pit, play house and children's table",
          "View of the playroom with slide and bookshelf",
          "Teens space with OPEN neon sign and sofa",
        ]),
      },
      {
        slug: "cabana-06",
        index: "03",
        title: "Cabin 06",
        meta: "Cabin",
        location: "Nova Petrópolis, Brazil",
        scope: ["Spatial concept", "3D modeling", "Millwork detailing", "Renderings", "Executed project"],
        body: "In this project, we explored details as a way to communicate functionality, materiality, and the intended experience of each space. In Cabin 6, our focus was on the design of custom-made furniture, conceived to combine aesthetics, practicality, and intelligent use of space. We developed the spatial concept, 3D modeling, millwork detailing, and visual renderings, aiming to precisely translate each design decision and its relationship with everyday use. First, the renders delivered to the client for approval; then, the executed project.",
        cover: "/portfolio/cabana06-01.jpg",
        images: CABANA_IMAGES([
          "Render of the Cabin 06 kitchen with wooden table and fiber pendants",
          "Render of the custom countertop and millwork",
          "Render of the kitchen shelves and utensils",
          "Executed Cabin 06 kitchen with dining table and window",
          "Executed millwork with fridge and shelves",
          "Executed millwork detail with clock and countertop",
        ]),
      },
      {
        slug: "apt-2507",
        index: "04",
        title: "Apartment 2507",
        meta: "Apartment",
        location: "São Paulo, Brazil",
        scope: ["Custom home office", "Millwork", "Decor", "Rendering"],
        body: "Taking advantage of an existing niche in the apartment's original layout, we created a small integrated home office space within the project. The proposal was to transform a previously underutilized area into a functional and pleasant workspace for daily routines, with custom design and visual integration with the rest of the social area through freestanding furniture. The decorative composition reinforces the idea that even the smallest spaces can gain new meaning when designed with intention.",
        cover: "/portfolio/apt2507-office.jpg",
        images: APT_IMAGES([
          "Custom home office in the niche of Apartment 2507",
          "Living room with green sofa and city view",
          "TV wall with shelves and wooden kitchen",
        ]),
      },
    ],
  },

  team: {
    eyebrow: "Who we are",
    title: "Three architects, one studio.",
    intro:
      "Every project is born where strategy, sensibility and craft meet. Every choice is intentional and every detail has a purpose.",
  },

  fit: {
    title: "We are the right fit if:",
    items: [
      "You value clear communication and collaboration throughout the design process",
      "You see design as a strategic investment, not merely a deliverable",
      "You are open to professional guidance and design-led solutions",
      "You respect agreed deadlines and give feedback in good time",
      "You are looking for a long-term design partner, not a one-off transaction",
    ],
  },

  footer: {
    cta: "How can we contribute to the success of your ",
    ctaAccent: "next project?",
    email: "Email",
    instagram: "Instagram",
    base: "Based in",
    rights: "All rights reserved.",
  },
};

export const CONTENT: Record<Lang, Dictionary> = { pt, en };
