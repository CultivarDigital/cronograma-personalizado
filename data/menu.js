const menu = [
  {
    title: 'Início',
    icon: 'mdi-home',
    to: '/dashboard',
  },
  {
    title: 'Suporte - Chat',
    icon: 'mdi-forum',
    to: '/chat',
    role: 'admin',
  },
  {
    title: 'Atendimento',
    icon: 'mdi-forum',
    to: '/atendimento',
    role: 'user',
  },
  {
    title: 'FAQ - Perguntas frequentes',
    description: 'Encontre aqui as respostas das perguntas mais comuns',
    icon: 'mdi-frequently-asked-questions',
    to: '/faq',
  },
  {
    title: 'Clientes',
    description: 'Lista de clientes',
    icon: 'mdi-account-group-outline',
    to: '/clientes',
    role: 'admin',
  },
]

export default menu
