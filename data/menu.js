const menu = [
  {
    title: 'Início',
    icon: 'mdi-home',
    to: '/dashboard',
  },
  {
    title: 'Atendimento',
    icon: 'mdi-forum',
    to: '/atendimento',
    role: 'user',
  },
  {
    title: 'Meu cronograma',
    icon: 'mdi-calendar',
    to: '/cronograma',
    role: 'user',
  },
  {
    title: 'Conteúdo exclusivo',
    icon: 'mdi-post',
    to: '/conteudo-exclusivo',
  },
  {
    title: 'Acompanhamento mensal',
    icon: 'mdi-calendar-star',
    to: '/acompanhamento-mensal',
    role: 'user',
  },
  {
    title: 'Acompanhamentos',
    icon: 'mdi-calendar-star',
    to: '/acompanhamentos',
    role: 'admin',
  },
  {
    title: 'Mini curso',
    icon: 'mdi-youtube',
    to: '/mini-curso',
  },
  {
    title: 'Críticas e sugestões',
    icon: 'mdi-message-alert-outline',
    to: '/sac/criticas-e-sugestoes',
  },
  {
    title: 'Suporte',
    icon: 'mdi-forum',
    to: '/suporte',
    role: 'admin',
  },
  {
    title: 'Turmas',
    description: 'Lista das turmas cadastradas',
    icon: 'mdi-account-group',
    to: '/turmas',
    role: 'admin',
  },
  {
    title: 'Clientes',
    description: 'Lista de clientes',
    icon: 'mdi-face-woman-shimmer-outline',
    to: '/clientes',
    role: 'admin',
  },
  {
    title: 'Modelos',
    description: 'Modelos de cronograma personalizado',
    icon: 'mdi-view-module-outline',
    to: '/modelos',
    role: 'admin',
  },
]

export default menu
