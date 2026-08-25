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

export const PARTNERS = ["Amanda Guerses", "Eduarda Saldanha", "Eduarda Baptista"];

export type Service = {
  id: string;
  index: string;
  title: string;
  lead: string;
  body: string;
  does: string[];
  idealFor: string[];
};

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
    eyebrow: string;
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
    eyebrow: string;
    title: string;
    p1: string;
    p1Strong: string;
    p2: string;
    p3: string;
    p3StrongA: string;
    p3StrongB: string;
    caption: string;
    stats: { n: string; l: string }[];
  };
  manifesto: { eyebrow: string; quote: string; quoteAccent: string; body: string };
  services: { eyebrow: string; title: string; intro: string; does: string; idealFor: string; items: Service[] };
  process: { eyebrow: string; title: string; intro: string; steps: Step[] };
  works: { eyebrow: string; title: string; intro: string; view: string; project: string; items: Project[] };
  team: { eyebrow: string; title: string; intro: string };
  fit: { eyebrow: string; title: string; titleAccent: string; yesTitle: string; noTitle: string; yes: string[]; no: string[] };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    button: string;
    note: string;
    steps: string[];
    directLabel: string;
  };
  footer: { cta: string; ctaAccent: string; email: string; instagram: string; base: string; rights: string };
};

// ─── Imagens: compartilhadas entre os idiomas, com alt traduzido ───────────
const APT_IMAGES = (alt: string[]): ProjectImage[] => [
  { src: "/portfolio/apt2507-living-01.jpg", alt: alt[0], wide: true },
  { src: "/portfolio/apt2507-living-02.jpg", alt: alt[1] },
  { src: "/portfolio/apt2507-office.jpg", alt: alt[2] },
  { src: "/portfolio/apt2507-quarto-01.jpg", alt: alt[3] },
  { src: "/portfolio/apt2507-quarto-02.jpg", alt: alt[4] },
  { src: "/portfolio/apt2507-quarto-03.jpg", alt: alt[5] },
  { src: "/portfolio/apt2507-banho-01.jpg", alt: alt[6] },
  { src: "/portfolio/apt2507-banho-02.jpg", alt: alt[7] },
  { src: "/portfolio/apt2507-banho-03.jpg", alt: alt[8] },
  { src: "/portfolio/apt2507-moodboard.jpg", alt: alt[9] },
  { src: "/portfolio/apt2507-detalhamento.jpg", alt: alt[10], wide: true },
  { src: "/portfolio/apt2507-planta.jpg", alt: alt[11], wide: true },
];

const CABANA_IMAGES = (alt: string[]): ProjectImage[] => [
  { src: "/portfolio/cabana06-01.jpg", alt: alt[0] },
  { src: "/portfolio/cabana06-02.jpg", alt: alt[1] },
  { src: "/portfolio/cabana06-03.jpg", alt: alt[2] },
];

const TRAMONTINA_IMAGES = (alt: string[]): ProjectImage[] => [
  { src: "/portfolio/tramontina-01.jpg", alt: alt[0], wide: true },
  { src: "/portfolio/tramontina-02.jpg", alt: alt[1], wide: true },
  { src: "/portfolio/tramontina-tecnico.jpg", alt: alt[2], wide: true },
];

const EBB_IMAGES = (alt: string[]): ProjectImage[] => [
  { src: "/portfolio/ebb-hero.jpg", alt: alt[0], wide: true },
  { src: "/portfolio/ebb-planta-02.jpg", alt: alt[1] },
  { src: "/portfolio/ebb-planta-01.jpg", alt: alt[2] },
];

const ALMARE_IMAGES = (alt: string[]): ProjectImage[] => [
  { src: "/portfolio/almare-fachada.jpg", alt: alt[0], wide: true },
  { src: "/portfolio/almare-suite-01.jpg", alt: alt[1] },
  { src: "/portfolio/almare-suite-02.jpg", alt: alt[2] },
  { src: "/portfolio/almare-planta.jpg", alt: alt[3] },
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
    eyebrow: "Estúdio criativo de arquitetura, Porto Alegre, RS",
    line1: "Ideias que",
    line2: "se tornam ",
    line2Accent: "projeto.",
    statement:
      " que arquitetos, escritórios e estudantes procuram para transformar projetos e ideias em apresentações impecáveis.",
    statementStrong: "Somos o braço extra",
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
    eyebrow: "Olá.",
    title: "Mais do que um serviço, um estúdio.",
    p1Strong: "A AGES Creative Studio",
    p1: " é um estúdio de arquitetura e design dedicado a transformar ideias em espaços bem resolvidos, funcionais e visualmente marcantes.",
    p2: "Damos vida às suas ideias. Seja na renderização de imagens, criação de vídeo, diagramação de pranchas ou detalhamento de mobiliários. Comunicamo-nos com clareza e profissionalismo para entregar imagens que vendem projetos, conectando estética e estratégia visual para arquitetos e escritórios.",
    p3StrongA: "processos colaborativos",
    p3StrongB: "comunicação transparente",
    p3: "e um olhar cuidadoso em cada etapa, garantindo uma experiência fluida e resultados bem executados.",
    caption: "Amanda, Eduarda B e Eduarda S. As sócias por trás de cada entrega.",
    stats: [
      { n: "04", l: "frentes de serviço, do conceito à execução" },
      { n: "06", l: "etapas de processo transparente em interiores" },
      { n: "03", l: "sócias arquitetas à frente de cada projeto" },
    ],
  },

  manifesto: {
    eyebrow: "Nossa crença",
    quote: "Design não se trata apenas de criar imagens, mas de ",
    quoteAccent: "gerar clareza.",
    body: "Quando as ideias são claramente definidas, comunicadas e sustentadas, melhores decisões são tomadas e melhores projetos são construídos.",
  },

  services: {
    eyebrow: "O nosso serviço",
    title: "Suporte em design para todas as etapas.",
    intro:
      "Oferecemos suporte modular e colaborativo, adaptável às diferentes etapas do projeto e localizações. Um apoio confiável e de alta qualidade: do conceito até a produção.",
    does: "O que fazemos",
    idealFor: "Ideal para",
    items: [
      {
        id: "conceito",
        index: "01",
        title: "Conceito e definição de projeto",
        lead: "Dando forma e direção ao seu projeto, do início ao fim.",
        body: "Transformamos ideias iniciais em uma direção de design clara e estruturada. Essa fase busca compreender a essência do projeto, alinhar expectativas e estabelecer uma base conceitual sólida antes de avançar para o desenvolvimento detalhado.",
        does: [
          "Desenvolvimento de conceitos e narrativas de projeto",
          "Mood boards para definir atmosfera, materiais e identidade visual",
          "Estudo da organização espacial e possibilidades iniciais de layout",
          "Análise de fatores do terreno e do contexto que influenciam as decisões",
        ],
        idealFor: [
          "Projetos em estágio inicial",
          "Briefings pouco claros ou ideias em evolução",
          "Clientes que buscam direcionamento de design",
          "Projetos que exigem forte alinhamento conceitual",
        ],
      },
      {
        id: "representacao",
        index: "02",
        title: "Design visual e representação",
        lead: "Tornando ideias de design visíveis, compreensíveis e envolventes.",
        body: "É onde os conceitos se tornam tangíveis. Traduzimos ideias em visuais claros e de alta qualidade, permitindo que clientes e stakeholders compreendam e se envolvam plenamente com o projeto. Mais do que imagens bonitas, criamos representações que apoiam a comunicação, a validação e a tomada de decisões.",
        does: [
          "Modelos 3D detalhados de espaços interiores e arquitetônicos",
          "Renderizações realistas que comunicam materialidade, luz e atmosfera",
          "Plantas humanizadas que comunicam layout e escala com clareza",
          "Estudos visuais para elementos personalizados e soluções sob medida",
        ],
        idealFor: [
          "Apresentações e aprovações com clientes",
          "Validação e refinamento de design",
          "Materiais de marketing e divulgação",
          "Alinhamento de equipes em torno de uma visão comum",
        ],
      },
      {
        id: "producao",
        index: "03",
        title: "Produção e suporte técnico",
        lead: "Apoiando a transição da concepção da ideia até a execução.",
        body: "Traduzimos projetos aprovados em documentação clara e executável. A AGES atua como uma extensão das equipes de arquitetura e design, oferecendo suporte confiável de produção sem a necessidade de expandir a equipe interna.",
        does: [
          "Desenhos executivos e técnicos",
          "Levantamento de medições do espaço",
          "Plantas detalhadas, cortes, elevações e detalhamentos",
          "Mobiliário sob medida e elementos integrados",
          "Layouts de iluminação e documentação luminotécnica",
        ],
        idealFor: [
          "Estúdios de arquitetura e design de interiores",
          "Equipes que necessitam de maior capacidade de produção",
          "Projetos em fase de execução",
          "Equipes que precisam de detalhamento terceirizado",
        ],
      },
      {
        id: "completo",
        index: "04",
        title: "Suporte completo de projeto",
        lead: "Trazendo seu sonho de espaço para a realidade.",
        body: "Desenvolvimento integral de projetos de interiores ou arquitetura, do conceito inicial à documentação técnica. Serviço disponibilizado de forma seletiva e conduzido com análise cuidadosa de escopo, cronograma e alinhamento.",
        does: [
          "Liderança do desenvolvimento do conceito e da direção de design",
          "Design visual e representação",
          "Documentação técnica e executiva",
          "Coordenação dos elementos de design ao longo das etapas",
        ],
        idealFor: [
          "Projetos que exigem envolvimento coeso de ponta a ponta",
          "Clientes que buscam um único parceiro de design",
          "Projetos de interiores ou arquitetura alinhados à visão da AGES",
        ],
      },
    ],
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
      "De apartamentos compactos a hotelaria e cabanas na serra. Clique em um projeto para ver imagens, plantas e detalhamentos.",
    view: "Ver",
    project: "Projeto",
    items: [
      {
        slug: "apt-2507",
        index: "01",
        title: "Apt 2507",
        meta: "Apartamento 35 m²",
        location: "São Paulo, Brasil",
        scope: ["Projeto autoral", "Conceito ao executivo", "Modelagem 3D", "Renderização"],
        body: "Projeto autoral da AGES: um apartamento compacto pensado para unir funcionalidade, conforto e personalidade em cada detalhe. Desenvolvemos todas as etapas: do conceito ao anteprojeto, projeto executivo, detalhamentos, modelagem 3D e renderização. De estilo contemporâneo e maximalista, explora contrastes: a área social em tons suaves de azul e madeira clara, o quarto com cores marcantes e formas expressivas, e o banheiro em verde e branco, atemporal.",
        cover: "/portfolio/apt2507-quarto-01.jpg",
        images: APT_IMAGES([
          "Marcenaria integrada da sala e cozinha do Apt 2507",
          "Vista ampla da área social integrada do Apt 2507",
          "Home office sob medida aproveitando nicho existente",
          "Quarto maximalista com teto rosa e lustre sputnik",
          "Quarto com papel de parede listrado verde e galeria de quadros",
          "Detalhe da cabeceira em veludo verde e mesa lateral em pedra",
          "Banheiro em verde e branco com espelho orgânico iluminado",
          "Vista do banheiro com bancada em mármore e marcenaria verde",
          "Nichos iluminados do banheiro com revestimento hexagonal",
          "Moodboard Bathroom Oasis com materiais e paleta",
          "Prancha de detalhamento técnico do mobiliário do banheiro",
          "Planta baixa humanizada do Apt 2507",
        ]),
      },
      {
        slug: "cabana-06",
        index: "02",
        title: "Cozinha Cabana 06",
        meta: "Cabana",
        location: "Nova Petrópolis, Brasil",
        scope: ["Concepção de ambiente", "Modelagem 3D", "Detalhamento de marcenaria", "Imagens"],
        body: "Neste projeto, exploramos os detalhes como forma de comunicar a funcionalidade, a materialidade e a experiência proposta para cada ambiente. Na cozinha da Cabana 6, o foco esteve no desenho dos móveis sob medida, pensados para unir estética, praticidade e aproveitamento inteligente do espaço, traduzindo com precisão cada escolha de projeto e sua relação com o uso cotidiano.",
        cover: "/portfolio/cabana06-01.jpg",
        images: CABANA_IMAGES([
          "Cozinha da Cabana 06 com mesa de madeira e pendentes de fibra",
          "Bancada e marcenaria sob medida da cozinha da cabana",
          "Detalhe das prateleiras e utensílios da cozinha da cabana",
        ]),
      },
      {
        slug: "tramontina-kitchen",
        index: "03",
        title: "Tramontina Kitchen",
        meta: "Apartamento 36 m², projeto conceitual",
        location: "Projeto conceitual",
        scope: ["Conceito", "Especificação técnica", "Modelagem 3D", "Renderização"],
        body: "Um projeto conceitual de cozinha integrada em apartamento compacto, desenvolvido com especificação completa de equipamentos e marcenaria. A ilha central organiza o preparo e a convivência, enquanto a paleta clara em madeira e tons neutros amplia visualmente a metragem e conecta a cozinha ao estar.",
        cover: "/portfolio/tramontina-01.jpg",
        images: TRAMONTINA_IMAGES([
          "Cozinha Tramontina com ilha central e mesa integrada",
          "Vista da cozinha conceitual integrada ao estar",
          "Prancha técnica com vistas e especificações da cozinha",
        ]),
      },
      {
        slug: "ebb-cabins",
        index: "04",
        title: "EBB Cabins",
        meta: "Cabana 86,50 m²",
        location: "Nova Petrópolis, Brasil",
        scope: ["Concepção arquitetônica", "Plantas e fachadas", "Especificação de materiais", "Renderização"],
        body: "Cabanas concebidas para se implantar com leveza no relevo, elevadas do solo por embasamento em pedra grês. O volume inclinado em ripado de bambu e madeira plástica reciclada abriga dois pavimentos com esquadrias de vidro duplo, lareira dupla face e estrutura em CLT e madeira laminada colada. Uma resposta contemporânea ao clima e à paisagem serrana.",
        cover: "/portfolio/ebb-hero.jpg",
        images: EBB_IMAGES([
          "Implantação das cabanas EBB no campo aberto",
          "Planta baixa humanizada do pavimento térreo da cabana EBB",
          "Planta baixa humanizada do segundo pavimento da cabana EBB",
        ]),
      },
      {
        slug: "al-mare-hotel",
        index: "05",
        title: "Al Mare Hotel",
        meta: "Suítes 29 m² e 59 m²",
        location: "Xangri-Lá, Brasil",
        scope: ["Concepção arquitetônica", "Estudo de implantação", "Modelagem", "Interiores"],
        body: "Aqui exploramos a arquitetura hoteleira como forma de integrar experiência, paisagem e funcionalidade. Concebido para um terreno estratégico em Xangri-Lá, o Al Mare valoriza a proximidade com a praia e as áreas de preservação natural. A distribuição dos volumes e das áreas comuns foi pensada para promover conforto, convivência e conexão com a paisagem litorânea.",
        cover: "/portfolio/almare-fachada.jpg",
        images: ALMARE_IMAGES([
          "Fachada do Al Mare Hotel ao entardecer",
          "Suíte do Al Mare Hotel com pendentes de palha e paleta neutra",
          "Suíte do hotel com painel ripado em madeira",
          "Plantas humanizadas das suítes de 29 m² e 59 m²",
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
    eyebrow: "Antes de começar",
    title: "Somos a ",
    titleAccent: "escolha certa?",
    yesTitle: "Somos a escolha certa se:",
    noTitle: "Não somos a escolha certa se:",
    yes: [
      "Você valoriza comunicação clara e colaboração ao longo do processo de design",
      "Você entende que um design bem pensado exige tempo, refinamento e diálogo",
      "Você enxerga o design como um investimento estratégico, não apenas como uma entrega",
      "Você está aberto(a) a orientação profissional e soluções guiadas pelo design",
      "Você respeita prazos acordados e fornece feedback no tempo adequado",
      "Você busca um parceiro de design de longo prazo, não uma relação pontual",
    ],
    no: [
      "Você espera resultados imediatos, sem tempo para iteração ou refinamento",
      "Você prioriza principalmente o menor preço em vez de qualidade e valor",
      "Você prefere ditar todas as decisões de design sem flexibilidade",
      "Você não consegue se comprometer com prazos ou fornecer feedback consistente",
      "Você busca gestão de obra presencial ou condução de processos legais",
      "Você vê o design como um complemento opcional, e não como parte central do sucesso do projeto",
    ],
  },

  cta: {
    eyebrow: "Solicitação de orçamento",
    title: "Pronto para iniciar um novo projeto?",
    body: "Preencha nosso formulário de orçamento. Ele nos ajuda a entender suas necessidades, prazos e como podemos apoiar você da melhor forma, para enviarmos uma proposta personalizada, pensada exatamente para o seu projeto.",
    button: "Preencher formulário",
    note: "O formulário abre em uma nova aba. Leva cerca de 3 minutos.",
    steps: [
      "Conte quem você é e como prefere ser contatado",
      "Selecione os serviços que fazem sentido para o seu projeto",
      "Descreva o projeto e aguarde nosso retorno por e-mail",
    ],
    directLabel: "Prefere falar direto?",
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
    eyebrow: "Architecture creative studio, Porto Alegre, RS",
    line1: "Ideas that",
    line2: "become ",
    line2Accent: "design.",
    statement:
      " that architects, studios and students turn to in order to transform projects and ideas into flawless presentations.",
    statementStrong: "We are the extra pair of hands",
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
    eyebrow: "Hello.",
    title: "More than a service, a studio.",
    p1Strong: "AGES Creative Studio",
    p1: " is an architecture and design studio devoted to turning ideas into spaces that are well resolved, functional and visually striking.",
    p2: "We bring your ideas to life. Through image rendering, video, presentation board layout or furniture detailing. We communicate with clarity and professionalism to deliver images that sell projects, connecting aesthetics and visual strategy for architects and studios.",
    p3StrongA: "collaborative processes",
    p3StrongB: "transparent communication",
    p3: "and a careful eye at every stage, ensuring a smooth experience and well-executed results.",
    caption: "Amanda, Eduarda B and Eduarda S. The partners behind every delivery.",
    stats: [
      { n: "04", l: "service areas, from concept to execution" },
      { n: "06", l: "transparent process stages in interiors" },
      { n: "03", l: "partner architects leading every project" },
    ],
  },

  manifesto: {
    eyebrow: "What we believe",
    quote: "Design is not only about creating images, but about ",
    quoteAccent: "creating clarity.",
    body: "When ideas are clearly defined, communicated and supported, better decisions are made and better projects get built.",
  },

  services: {
    eyebrow: "What we offer",
    title: "Design support for every stage.",
    intro:
      "We offer modular, collaborative support that adapts to different project stages and locations. Reliable, high-quality help: from concept through to production.",
    does: "What we do",
    idealFor: "Ideal for",
    items: [
      {
        id: "conceito",
        index: "01",
        title: "Concept and project definition",
        lead: "Giving your project shape and direction, from start to finish.",
        body: "We turn early ideas into a clear, structured design direction. This stage seeks to understand the essence of the project, align expectations and establish a solid conceptual foundation before moving into detailed development.",
        does: [
          "Development of project concepts and narratives",
          "Mood boards defining atmosphere, materials and visual identity",
          "Study of spatial organisation and initial layout possibilities",
          "Analysis of site and context factors that shape decisions",
        ],
        idealFor: [
          "Projects at an early stage",
          "Unclear briefs or evolving ideas",
          "Clients looking for design direction",
          "Projects that demand strong conceptual alignment",
        ],
      },
      {
        id: "representacao",
        index: "02",
        title: "Visual design and representation",
        lead: "Making design ideas visible, understandable and engaging.",
        body: "This is where concepts become tangible. We translate ideas into clear, high-quality visuals, allowing clients and stakeholders to fully understand and engage with the project. More than beautiful images, we create representations that support communication, validation and decision-making.",
        does: [
          "Detailed 3D models of interior and architectural spaces",
          "Realistic renders communicating materiality, light and atmosphere",
          "Rendered floor plans that convey layout and scale clearly",
          "Visual studies for bespoke elements and custom solutions",
        ],
        idealFor: [
          "Client presentations and approvals",
          "Design validation and refinement",
          "Marketing and publicity material",
          "Aligning teams around a shared vision",
        ],
      },
      {
        id: "producao",
        index: "03",
        title: "Production and technical support",
        lead: "Supporting the move from idea to execution.",
        body: "We translate approved designs into clear, buildable documentation. AGES works as an extension of architecture and design teams, offering reliable production support without the need to expand your in-house team.",
        does: [
          "Construction and technical drawings",
          "On-site measurement surveys",
          "Detailed plans, sections, elevations and details",
          "Bespoke furniture and built-in elements",
          "Lighting layouts and documentation",
        ],
        idealFor: [
          "Architecture and interior design studios",
          "Teams needing extra production capacity",
          "Projects in the execution phase",
          "Teams that need detailing outsourced",
        ],
      },
      {
        id: "completo",
        index: "04",
        title: "Full project support",
        lead: "Bringing your dream space to life.",
        body: "End-to-end development of interior or architecture projects, from initial concept to technical documentation. Offered selectively and undertaken after careful review of scope, timeline and alignment.",
        does: [
          "Leading concept development and design direction",
          "Visual design and representation",
          "Technical and construction documentation",
          "Coordinating design elements across all stages",
        ],
        idealFor: [
          "Projects that require cohesive end-to-end involvement",
          "Clients looking for a single design partner",
          "Interior or architecture projects aligned with the AGES vision",
        ],
      },
    ],
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
      "From compact apartments to hospitality and cabins in the mountains. Click a project to see images, plans and detailing.",
    view: "View",
    project: "Project",
    items: [
      {
        slug: "apt-2507",
        index: "01",
        title: "Apt 2507",
        meta: "35 m² apartment",
        location: "São Paulo, Brazil",
        scope: ["In-house project", "Concept to construction", "3D modelling", "Rendering"],
        body: "An AGES in-house project: a compact apartment designed to combine functionality, comfort and personality in every detail. We developed every stage: from concept to schematic design, construction documentation, detailing, 3D modelling and rendering. Contemporary and maximalist in style, it plays with contrast: the living area in soft blues and pale wood, the bedroom in bold colour and expressive forms, and the bathroom in timeless green and white.",
        cover: "/portfolio/apt2507-quarto-01.jpg",
        images: APT_IMAGES([
          "Built-in joinery of the living room and kitchen at Apt 2507",
          "Wide view of the open-plan living area at Apt 2507",
          "Bespoke home office fitted into an existing alcove",
          "Maximalist bedroom with pink ceiling and sputnik chandelier",
          "Bedroom with green striped wallpaper and a gallery wall",
          "Detail of the green velvet headboard and stone side table",
          "Green and white bathroom with a lit organic mirror",
          "Bathroom view with marble countertop and green joinery",
          "Lit bathroom niches with hexagonal tiling",
          "Bathroom Oasis mood board with materials and palette",
          "Technical detailing board for the bathroom furniture",
          "Rendered floor plan of Apt 2507",
        ]),
      },
      {
        slug: "cabana-06",
        index: "02",
        title: "Cabin 06 Kitchen",
        meta: "Cabin",
        location: "Nova Petrópolis, Brazil",
        scope: ["Space design", "3D modelling", "Joinery detailing", "Images"],
        body: "In this project we explored detail as a way of communicating the functionality, materiality and experience proposed for each space. In the Cabin 6 kitchen, the focus was the design of bespoke furniture, conceived to combine aesthetics, practicality and smart use of space, translating each design decision and its relationship to everyday use with precision.",
        cover: "/portfolio/cabana06-01.jpg",
        images: CABANA_IMAGES([
          "Cabin 06 kitchen with wooden table and fibre pendant lights",
          "Bespoke countertop and joinery in the cabin kitchen",
          "Detail of the shelving and utensils in the cabin kitchen",
        ]),
      },
      {
        slug: "tramontina-kitchen",
        index: "03",
        title: "Tramontina Kitchen",
        meta: "36 m² apartment, concept project",
        location: "Concept project",
        scope: ["Concept", "Technical specification", "3D modelling", "Rendering"],
        body: "A concept project for an open-plan kitchen in a compact apartment, developed with full specification of appliances and joinery. The central island organises both cooking and gathering, while the light palette of wood and neutral tones visually expands the floor area and connects the kitchen to the living space.",
        cover: "/portfolio/tramontina-01.jpg",
        images: TRAMONTINA_IMAGES([
          "Tramontina kitchen with central island and integrated table",
          "View of the concept kitchen opening onto the living area",
          "Technical board with elevations and kitchen specifications",
        ]),
      },
      {
        slug: "ebb-cabins",
        index: "04",
        title: "EBB Cabins",
        meta: "86.50 m² cabin",
        location: "Nova Petrópolis, Brazil",
        scope: ["Architectural design", "Plans and elevations", "Material specification", "Rendering"],
        body: "Cabins conceived to sit lightly on the terrain, raised off the ground on a sandstone base. The angled volume, clad in bamboo and recycled composite battens, houses two floors with double-glazed frames, a double-sided fireplace and a structure in CLT and glulam. A contemporary response to the climate and the mountain landscape.",
        cover: "/portfolio/ebb-hero.jpg",
        images: EBB_IMAGES([
          "The EBB cabins sited in open countryside",
          "Rendered ground floor plan of the EBB cabin",
          "Rendered first floor plan of the EBB cabin",
        ]),
      },
      {
        slug: "al-mare-hotel",
        index: "05",
        title: "Al Mare Hotel",
        meta: "29 m² and 59 m² suites",
        location: "Xangri-Lá, Brazil",
        scope: ["Architectural design", "Site strategy", "Modelling", "Interiors"],
        body: "Here we explored hospitality architecture as a way of integrating experience, landscape and function. Designed for a strategic site in Xangri-Lá, Al Mare makes the most of its proximity to the beach and to protected natural areas. The distribution of volumes and shared areas was conceived to encourage comfort, community and connection with the coastal landscape.",
        cover: "/portfolio/almare-fachada.jpg",
        images: ALMARE_IMAGES([
          "Al Mare Hotel façade at dusk",
          "Al Mare Hotel suite with straw pendant lights and neutral palette",
          "Hotel suite with slatted timber panelling",
          "Rendered plans of the 29 m² and 59 m² suites",
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
    eyebrow: "Before we start",
    title: "Are we the ",
    titleAccent: "right fit?",
    yesTitle: "We are the right fit if:",
    noTitle: "We are not the right fit if:",
    yes: [
      "You value clear communication and collaboration throughout the design process",
      "You understand that considered design takes time, refinement and dialogue",
      "You see design as a strategic investment, not merely a deliverable",
      "You are open to professional guidance and design-led solutions",
      "You respect agreed deadlines and give feedback in good time",
      "You are looking for a long-term design partner, not a one-off transaction",
    ],
    no: [
      "You expect immediate results, with no time for iteration or refinement",
      "You prioritise the lowest price above quality and value",
      "You prefer to dictate every design decision with no flexibility",
      "You cannot commit to deadlines or give consistent feedback",
      "You are looking for on-site construction management or legal processes",
      "You see design as an optional extra rather than central to the project's success",
    ],
  },

  cta: {
    eyebrow: "Request a quote",
    title: "Ready to start a new project?",
    body: "Fill in our quote form. It helps us understand your needs, your timeline and how we can best support you, so we can send a tailored proposal, built specifically around your project.",
    button: "Open the form",
    note: "The form opens in a new tab. It takes about 3 minutes.",
    steps: [
      "Tell us who you are and how you prefer to be contacted",
      "Select the services that fit your project",
      "Describe the project and wait for our reply by email",
    ],
    directLabel: "Prefer to talk directly?",
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
