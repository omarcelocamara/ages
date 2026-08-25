export const STUDIO = {
  name: "AGES Creative Studio",
  email: "adm.agesstudio@gmail.com",
  instagram: "ages.creativestudio",
  instagramUrl: "https://instagram.com/ages.creativestudio",
  city: "Porto Alegre — RS, Brasil",
  tagline: "O braço extra de arquitetos e estudantes de arquitetura.",
} as const;

export type Service = {
  id: string;
  index: string;
  title: string;
  lead: string;
  body: string;
  does: string[];
  idealFor: string[];
};

export const SERVICES: Service[] = [
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
];

export const PROCESS = [
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
    body: "Transformamos o conceito aprovado em modelos tridimensionais e imagens realistas — materiais, cores, iluminação e volumes antes da execução.",
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
];

export type Project = {
  slug: string;
  index: string;
  title: string;
  meta: string;
  location: string;
  scope: string[];
  body: string;
  cover: string;
  images: { src: string; alt: string; wide?: boolean }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "apt-2507",
    index: "01",
    title: "Apt 2507",
    meta: "Apartamento 35 m²",
    location: "São Paulo, Brasil",
    scope: ["Projeto autoral", "Conceito ao executivo", "Modelagem 3D", "Renderização"],
    body:
      "Projeto autoral da AGES: um apartamento compacto pensado para unir funcionalidade, conforto e personalidade em cada detalhe. Desenvolvemos todas as etapas — do conceito ao anteprojeto, projeto executivo, detalhamentos, modelagem 3D e renderização. De estilo contemporâneo e maximalista, explora contrastes: a área social em tons suaves de azul e madeira clara, o quarto com cores marcantes e formas expressivas, e o banheiro em verde e branco, atemporal.",
    cover: "/portfolio/apt2507-quarto-01.jpg",
    images: [
      { src: "/portfolio/apt2507-living-01.jpg", alt: "Marcenaria integrada da sala e cozinha do Apt 2507", wide: true },
      { src: "/portfolio/apt2507-living-02.jpg", alt: "Vista ampla da área social integrada do Apt 2507" },
      { src: "/portfolio/apt2507-office.jpg", alt: "Home office sob medida aproveitando nicho existente" },
      { src: "/portfolio/apt2507-quarto-01.jpg", alt: "Quarto maximalista com teto rosa e lustre sputnik" },
      { src: "/portfolio/apt2507-quarto-02.jpg", alt: "Quarto com papel de parede listrado verde e galeria de quadros" },
      { src: "/portfolio/apt2507-quarto-03.jpg", alt: "Detalhe da cabeceira em veludo verde e mesa lateral em pedra" },
      { src: "/portfolio/apt2507-banho-01.jpg", alt: "Banheiro em verde e branco com espelho orgânico iluminado" },
      { src: "/portfolio/apt2507-banho-02.jpg", alt: "Vista do banheiro com bancada em mármore e marcenaria verde" },
      { src: "/portfolio/apt2507-banho-03.jpg", alt: "Nichos iluminados do banheiro com revestimento hexagonal" },
      { src: "/portfolio/apt2507-moodboard.jpg", alt: "Moodboard Bathroom Oasis com materiais e paleta" },
      { src: "/portfolio/apt2507-detalhamento.jpg", alt: "Prancha de detalhamento técnico do mobiliário do banheiro", wide: true },
      { src: "/portfolio/apt2507-planta.jpg", alt: "Planta baixa humanizada do Apt 2507", wide: true },
    ],
  },
  {
    slug: "cabana-06",
    index: "02",
    title: "Cozinha Cabana 06",
    meta: "Cabana",
    location: "Nova Petrópolis, Brasil",
    scope: ["Concepção de ambiente", "Modelagem 3D", "Detalhamento de marcenaria", "Imagens"],
    body:
      "Neste projeto, exploramos os detalhes como forma de comunicar a funcionalidade, a materialidade e a experiência proposta para cada ambiente. Na cozinha da Cabana 6, o foco esteve no desenho dos móveis sob medida, pensados para unir estética, praticidade e aproveitamento inteligente do espaço — traduzindo com precisão cada escolha de projeto e sua relação com o uso cotidiano.",
    cover: "/portfolio/cabana06-01.jpg",
    images: [
      { src: "/portfolio/cabana06-01.jpg", alt: "Cozinha da Cabana 06 com mesa de madeira e pendentes de fibra" },
      { src: "/portfolio/cabana06-02.jpg", alt: "Bancada e marcenaria sob medida da cozinha da cabana" },
      { src: "/portfolio/cabana06-03.jpg", alt: "Detalhe das prateleiras e utensílios da cozinha da cabana" },
    ],
  },
  {
    slug: "tramontina-kitchen",
    index: "03",
    title: "Tramontina Kitchen",
    meta: "Apartamento 36 m² — projeto conceitual",
    location: "Projeto conceitual",
    scope: ["Conceito", "Especificação técnica", "Modelagem 3D", "Renderização"],
    body:
      "Um projeto conceitual de cozinha integrada em apartamento compacto, desenvolvido com especificação completa de equipamentos e marcenaria. A ilha central organiza o preparo e a convivência, enquanto a paleta clara em madeira e tons neutros amplia visualmente a metragem e conecta a cozinha ao estar.",
    cover: "/portfolio/tramontina-01.jpg",
    images: [
      { src: "/portfolio/tramontina-01.jpg", alt: "Cozinha Tramontina com ilha central e mesa integrada", wide: true },
      { src: "/portfolio/tramontina-02.jpg", alt: "Vista da cozinha conceitual integrada ao estar", wide: true },
      { src: "/portfolio/tramontina-tecnico.jpg", alt: "Prancha técnica com vistas e especificações da cozinha", wide: true },
    ],
  },
  {
    slug: "ebb-cabins",
    index: "04",
    title: "EBB Cabins",
    meta: "Cabana 86,50 m²",
    location: "Nova Petrópolis, Brasil",
    scope: ["Concepção arquitetônica", "Plantas e fachadas", "Especificação de materiais", "Renderização"],
    body:
      "Cabanas concebidas para se implantar com leveza no relevo, elevadas do solo por embasamento em pedra grês. O volume inclinado em ripado de bambu e madeira plástica reciclada abriga dois pavimentos com esquadrias de vidro duplo, lareira dupla face e estrutura em CLT e madeira laminada colada — uma resposta contemporânea ao clima e à paisagem serrana.",
    cover: "/portfolio/ebb-hero.jpg",
    images: [
      { src: "/portfolio/ebb-hero.jpg", alt: "Implantação das cabanas EBB no campo aberto", wide: true },
      { src: "/portfolio/ebb-planta-02.jpg", alt: "Planta baixa humanizada do pavimento térreo da cabana EBB" },
      { src: "/portfolio/ebb-planta-01.jpg", alt: "Planta baixa humanizada do segundo pavimento da cabana EBB" },
    ],
  },
  {
    slug: "al-mare-hotel",
    index: "05",
    title: "Al Mare Hotel",
    meta: "Suítes 29 m² e 59 m²",
    location: "Xangri-Lá, Brasil",
    scope: ["Concepção arquitetônica", "Estudo de implantação", "Modelagem", "Interiores"],
    body:
      "Aqui exploramos a arquitetura hoteleira como forma de integrar experiência, paisagem e funcionalidade. Concebido para um terreno estratégico em Xangri-Lá, o Al Mare valoriza a proximidade com a praia e as áreas de preservação natural. A distribuição dos volumes e das áreas comuns foi pensada para promover conforto, convivência e conexão com a paisagem litorânea.",
    cover: "/portfolio/almare-fachada.jpg",
    images: [
      { src: "/portfolio/almare-fachada.jpg", alt: "Fachada do Al Mare Hotel ao entardecer", wide: true },
      { src: "/portfolio/almare-suite-01.jpg", alt: "Suíte do Al Mare Hotel com pendentes de palha e paleta neutra" },
      { src: "/portfolio/almare-suite-02.jpg", alt: "Suíte do hotel com painel ripado em madeira" },
      { src: "/portfolio/almare-planta.jpg", alt: "Plantas humanizadas das suítes de 29 m² e 59 m²" },
    ],
  },
];

export const FIT_YES = [
  "Você valoriza comunicação clara e colaboração ao longo do processo de design",
  "Você entende que um design bem pensado exige tempo, refinamento e diálogo",
  "Você enxerga o design como um investimento estratégico, não apenas como uma entrega",
  "Você está aberto(a) a orientação profissional e soluções guiadas pelo design",
  "Você respeita prazos acordados e fornece feedback no tempo adequado",
  "Você busca um parceiro de design de longo prazo, não uma relação pontual",
];

export const FIT_NO = [
  "Você espera resultados imediatos, sem tempo para iteração ou refinamento",
  "Você prioriza principalmente o menor preço em vez de qualidade e valor",
  "Você prefere ditar todas as decisões de design sem flexibilidade",
  "Você não consegue se comprometer com prazos ou fornecer feedback consistente",
  "Você busca gestão de obra presencial ou condução de processos legais",
  "Você vê o design como um complemento opcional, e não como parte central do sucesso do projeto",
];

export const PARTNERS = ["Amanda Guerses", "Eduarda Saldanha", "Eduarda Baptista"];

// ─── Formulário de orçamento ────────────────────────────────────────────────
export const PERFIS = [
  "Escritório de Arquitetura",
  "Profissional autônomo",
  "Estudante de Arquitetura",
];

export const AJUDAS = [
  "Renderização de imagens e/ou produção de vídeos",
  "Projeto arquitetônico",
  "Projeto de interiores",
  "Levantamento de medições",
  "Desenvolvimento de projeto 3D",
  "Diagramação de pranchas",
  "Conceito e definição de projeto",
  "Produção e suporte técnico",
  "Design visual e representação",
  "Suporte completo de projeto",
];
